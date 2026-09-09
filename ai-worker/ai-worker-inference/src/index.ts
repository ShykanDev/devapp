import OpenAI from 'openai';
import { createClient, chatCompletion, classifyIntent, editArticle, streamChatCompletion, streamEditArticle, type ArticleTema } from './lib/ai';
import { generateValidPage, editValidPage, generateValidExam, PageGenerationError, maxRepairAttempts } from './lib/pagePipeline';
import { DynamicPageSchema } from './schema/dynamicPage';
import type { DifficultyId } from './schema/examen';

const examDifficulties = new Set(['facil', 'media', 'dificil']);

interface Env {
	AI_API_KEY: string;
	PAGE_MAX_REPAIR_ATTEMPTS?: string;
}

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(body: unknown, status = 200): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			...corsHeaders,
			'Content-Type': 'application/json',
		},
	});
}

function makeClient(env: Env): OpenAI {
	return createClient(env.AI_API_KEY);
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		// Handle CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

		if (url.pathname === '/chat') {
			if (request.method !== 'POST') {
				return jsonResponse({ error: 'Method Not Allowed' }, 405);
			}

			try {
				const body = (await request.json()) as {
					messages?: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
					stream?: boolean;
				};

				if (!body.messages) {
					return jsonResponse({ error: 'Messages are required' }, 400);
				}

				const client = makeClient(env);

				if (body.stream === true) {
					try {
						const intent = await classifyIntent(client, body.messages);

						if (intent.intent === 'create_page') {
							return jsonResponse({
								answer: null,
								intent: 'create_page',
								topic: intent.topic,
							});
						}
					} catch (error) {
						console.error('Intent classify error during stream, skipping:', error);
					}

					const encoder = new TextEncoder();
					const stream = new ReadableStream({
						async start(controller) {
							try {
								for await (const delta of streamChatCompletion(client, body.messages!)) {
									controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
								}
								controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
							} catch (error) {
								console.error('AI Stream Error:', error);
								controller.enqueue(
									encoder.encode(
										`data: ${JSON.stringify({
											error: error instanceof Error ? error.message : String(error),
										})}\n\n`
									)
								);
							} finally {
								controller.close();
							}
						},
					});

					return new Response(stream, {
						headers: {
							...corsHeaders,
							'Content-Type': 'text/event-stream',
							'Cache-Control': 'no-cache, no-transform',
							Connection: 'keep-alive',
						},
					});
				}

				const [intent, answer] = await Promise.all([
					classifyIntent(client, body.messages),
					chatCompletion(client, body.messages),
				]);

				if (intent.intent === 'create_page') {
					return jsonResponse({
						answer,
						intent: 'create_page',
						topic: intent.topic,
					});
				}

				return jsonResponse({
					answer,
				});
			} catch (error) {
				console.error('AI Error:', error);

				return jsonResponse(
					{
						error: error instanceof Error ? error.message : String(error),
					},
					500,
				);
			}
		}

		if (url.pathname === '/edit-article') {
			if (request.method !== 'POST') {
				return jsonResponse({ error: 'Method Not Allowed' }, 405);
			}

			try {
				const body = (await request.json()) as {
					tema?: unknown;
					content?: unknown;
					instruction?: unknown;
					stream?: boolean;
				};

				const instruction = typeof body.instruction === 'string' ? body.instruction.trim() : '';
				if (!instruction) {
					return jsonResponse({ ok: false, code: 'INSTRUCTION_REQUIRED', message: 'instruction es requerida' }, 400);
				}

				const content = typeof body.content === 'string' ? body.content.trim() : '';
				if (!content) {
					return jsonResponse({ ok: false, code: 'CONTENT_REQUIRED', message: 'content es requerido' }, 400);
				}

				if (!body.tema || typeof body.tema !== 'object') {
					return jsonResponse({ ok: false, code: 'INVALID_TEMA', message: 'tema es requerido' }, 400);
				}

				const rawTema = body.tema as Record<string, unknown>;
				const tema: ArticleTema = {
					nombre: typeof rawTema.nombre === 'string' ? rawTema.nombre.trim() : '',
					descripcion: typeof rawTema.descripcion === 'string' ? rawTema.descripcion.trim() : '',
					categoria: typeof rawTema.categoria === 'string' ? rawTema.categoria.trim() : '',
					pregunta: typeof rawTema.pregunta === 'string' ? rawTema.pregunta.trim() : '',
				};
				if (!tema.nombre) {
					return jsonResponse({ ok: false, code: 'INVALID_TEMA', message: 'El nombre del tema es requerido' }, 400);
				}

				const client = makeClient(env);

				if (body.stream === true) {
					const encoder = new TextEncoder();
					const stream = new ReadableStream({
						async start(controller) {
							try {
								for await (const delta of streamEditArticle(client, tema, content, instruction)) {
									controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
								}
								controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
							} catch (error) {
								console.error('AI Edit Article Stream Error:', error);
								controller.enqueue(
									encoder.encode(
										`data: ${JSON.stringify({
											error: error instanceof Error ? error.message : String(error),
										})}\n\n`
									)
								);
							} finally {
								controller.close();
							}
						},
					});

					return new Response(stream, {
						headers: {
							...corsHeaders,
							'Content-Type': 'text/event-stream',
							'Cache-Control': 'no-cache, no-transform',
							Connection: 'keep-alive',
						},
					});
				}

				const edited = await editArticle(client, tema, content, instruction);
				if (!edited.trim()) {
					return jsonResponse({ ok: false, code: 'EMPTY_RESULT', message: 'El asistente no devolvió contenido' }, 422);
				}
				return jsonResponse({ ok: true, content: edited });
			} catch (error) {
				console.error('Edit Article Error:', error);

				return jsonResponse(
					{
						ok: false,
						code: 'ERROR',
						message: 'Error interno al editar el artículo',
					},
					500,
				);
			}
		}

		if (url.pathname === '/generate-page') {
			if (request.method !== 'POST') {
				return jsonResponse({ error: 'Method Not Allowed' }, 405);
			}

			try {
				const body = (await request.json()) as {
					topic?: unknown;
					review?: unknown;
				};

				const topic = typeof body.topic === 'string' ? body.topic.trim() : '';
				if (!topic) {
					return jsonResponse({ ok: false, code: 'TOPIC_REQUIRED', message: 'topic es requerido' }, 400);
				}

				const client = makeClient(env);

				const { page, meta } = await generateValidPage(client, topic, {
					review: body.review === true,
					maxRepairAttempts: maxRepairAttempts(env),
				});

				return jsonResponse({ ok: true, page, meta });
			} catch (error) {
				console.error('Generate Page Error:', error);

				if (error instanceof PageGenerationError) {
					return jsonResponse(
						{
							ok: false,
							code: 'MAX_REPAIR',
							message: 'No se pudo generar una página válida',
							issues: error.issues,
						},
						422,
					);
				}

				return jsonResponse(
					{
						ok: false,
						code: 'ERROR',
						message: 'Error interno al generar la página',
					},
					500,
				);
			}
		}

		if (url.pathname === '/edit-page') {
			if (request.method !== 'POST') {
				return jsonResponse({ error: 'Method Not Allowed' }, 405);
			}

			try {
				const body = (await request.json()) as {
					page?: unknown;
					instruction?: unknown;
				};

				const instruction = typeof body.instruction === 'string' ? body.instruction.trim() : '';
				if (!instruction) {
					return jsonResponse({ ok: false, code: 'INSTRUCTION_REQUIRED', message: 'instruction es requerida' }, 400);
				}

				const parsed = DynamicPageSchema.safeParse(body.page);
				if (!parsed.success) {
					return jsonResponse(
						{
							ok: false,
							code: 'INVALID_PAGE',
							message: 'La página enviada no es válida',
						},
						400,
					);
				}

				const client = makeClient(env);

				const { page, meta } = await editValidPage(client, parsed.data, instruction, {
					maxRepairAttempts: maxRepairAttempts(env),
				});

				return jsonResponse({ ok: true, page, meta });
			} catch (error) {
				console.error('Edit Page Error:', error);

				if (error instanceof PageGenerationError) {
					return jsonResponse(
						{
							ok: false,
							code: 'MAX_REPAIR',
							message: 'No se pudo editar la página de forma válida',
							issues: error.issues,
						},
						422,
					);
				}

				return jsonResponse(
					{
						ok: false,
						code: 'ERROR',
						message: 'Error interno al editar la página',
					},
					500,
				);
			}
		}

		if (url.pathname === '/generate-exam') {
			if (request.method !== 'POST') {
				return jsonResponse({ error: 'Method Not Allowed' }, 405);
			}

			try {
				const body = (await request.json()) as {
					topic?: unknown;
					difficulty?: unknown;
				};

				const topic = typeof body.topic === 'string' ? body.topic.trim() : '';
				if (!topic) {
					return jsonResponse({ ok: false, code: 'TOPIC_REQUIRED', message: 'topic es requerido' }, 400);
				}

				const difficulty = typeof body.difficulty === 'string' ? body.difficulty.trim() : '';
				if (!difficulty) {
					return jsonResponse({ ok: false, code: 'DIFFICULTY_REQUIRED', message: 'difficulty es requerida' }, 400);
				}

				if (!examDifficulties.has(difficulty)) {
					return jsonResponse({ ok: false, code: 'INVALID_DIFFICULTY', message: 'difficulty debe ser facil, media o dificil' }, 400);
				}

				const client = makeClient(env);
				const typedDifficulty = difficulty as DifficultyId;

				const { exam, meta } = await generateValidExam(client, topic, typedDifficulty, {
					maxRepairAttempts: maxRepairAttempts(env),
				});

				return jsonResponse({ ok: true, exam, meta });
			} catch (error) {
				console.error('Generate Exam Error:', error);

				if (error instanceof PageGenerationError) {
					return jsonResponse(
						{
							ok: false,
							code: 'MAX_REPAIR',
							message: 'No se pudo generar un examen válido',
							issues: error.issues,
						},
						422,
					);
				}

				return jsonResponse(
					{
						ok: false,
						code: 'ERROR',
						message: 'Error interno al generar el examen',
					},
					500,
				);
			}
		}

		return jsonResponse({ error: 'Not Found' }, 404);
	},
} satisfies ExportedHandler<Env>;
