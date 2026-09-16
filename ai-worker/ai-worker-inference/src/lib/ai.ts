import OpenAI from 'openai';
import { extractJson, JsonExtractError } from './json';
import {
	ARTICLE_EDIT_SYSTEM_PROMPT,
	TUTOR_SYSTEM_PROMPT,
	classifySystemPrompt,
	editSystemPrompt,
	examChunkGenerateSystemPrompt,
	examChunkRepairSystemPrompt,
	examGenerateSystemPrompt,
	examRepairSystemPrompt,
	generatePageSystemPrompt,
	repairSystemPrompt,
	reviewerSystemPrompt,
	suggestionsSystemPrompt,
} from './prompts';
import { EXAM_DIFFICULTY_COUNTS } from '../schema/examen';
import type { DifficultyId } from '../schema/examen';
import type { DynamicPage } from '../schema/dynamicPage';

const MODEL = 'deepseek/deepseek-v4-flash';
const MAX_JSON_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 400;

export function createClient(apiKey: string): OpenAI {
	return new OpenAI({
		apiKey,
		baseURL: 'https://api.commandcode.ai/provider/v1',
	});
}

interface JsonCallOptions {
	responseFormat?: boolean;
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function errorStatus(error: unknown): number | undefined {
	if (error && typeof error === 'object') {
		const status = (error as { status?: unknown }).status;
		if (typeof status === 'number') {
			return status;
		}
	}
	return undefined;
}

function isUnsupportedResponseFormat(error: unknown): boolean {
	if (!(error instanceof Error)) {
		return false;
	}
	const message = error.message.toLowerCase();
	return message.includes('response_format') || message.includes('unsupported') || message.includes('not supported');
}

function isTransientError(error: unknown): boolean {
	if (error instanceof JsonExtractError) {
		return true;
	}

	const status = errorStatus(error);
	if (typeof status === 'number') {
		return status === 408 || status === 409 || status === 429 || status >= 500;
	}

	if (error instanceof Error) {
		const message = error.message.toLowerCase();
		return (
			message.includes('respuesta vacía') ||
			message.includes('timeout') ||
			message.includes('timed out') ||
			message.includes('fetch failed') ||
			message.includes('network') ||
			message.includes('econnreset') ||
			message.includes('socket hang up')
		);
	}

	return false;
}

async function completeJsonRaw(
	client: OpenAI,
	messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
	options: JsonCallOptions = {}
): Promise<unknown> {
	const useResponseFormat = options.responseFormat !== false;

	for (let attempt = 1; attempt <= MAX_JSON_ATTEMPTS; attempt += 1) {
		try {
			const completion = await client.chat.completions.create({
				model: MODEL,
				messages,
				...(useResponseFormat ? { response_format: { type: 'json_object' as const } } : {}),
			});
			const content = completion.choices[0]?.message?.content ?? '';
			if (!content.trim()) {
				throw new Error('Respuesta vacía del modelo');
			}
			return extractJson(content);
		} catch (error) {
			if (useResponseFormat && isUnsupportedResponseFormat(error)) {
				return completeJsonRaw(client, messages, { responseFormat: false });
			}

			if (attempt < MAX_JSON_ATTEMPTS && isTransientError(error)) {
				await delay(RETRY_BASE_DELAY_MS * attempt);
				continue;
			}

			throw error;
		}
	}

	throw new Error('No se pudo obtener una respuesta JSON válida del modelo');
}

export async function completeJson(
	client: OpenAI,
	messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
): Promise<unknown> {
	return completeJsonRaw(client, messages);
}

export interface PageMeta {
	attempts: number;
	repairs: number;
	reviewed: boolean;
}

export interface ClassifiedIntent {
	intent: 'chat' | 'create_page';
	topic: string | null;
}

const intents = new Set(['chat', 'create_page']);

export async function classifyIntent(
	client: OpenAI,
	messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
): Promise<ClassifiedIntent> {
	const raw = await completeJson(client, [
		{ role: 'system', content: classifySystemPrompt },
		...messages,
	]);

	if (raw && typeof raw === 'object') {
		const obj = raw as Record<string, unknown>;
		if (typeof obj.intent === 'string' && intents.has(obj.intent)) {
			const topic = typeof obj.topic === 'string' && obj.topic.trim() ? obj.topic.trim() : null;
			return { intent: obj.intent as 'chat' | 'create_page', topic };
		}
	}

	return { intent: 'chat', topic: null };
}

export async function generatePage(
	client: OpenAI,
	topic: string,
	context?: string
): Promise<DynamicPage> {
	const contextual = context && context.trim() ? `\nContexto: ${context.trim()}` : '';
	const raw = await completeJson(client, [
		{
			role: 'system',
			content: generatePageSystemPrompt,
		},
		{
			role: 'user',
			content: `Genera una página educativa sobre: ${topic}${contextual}`,
		},
	]);
	return raw as DynamicPage;
}

export interface SuggestionSection {
	title: string;
	content: string;
	subsections?: { title: string; content: string }[];
}

export async function generateSectionSuggestions(
	client: OpenAI,
	topic: string,
	sections: SuggestionSection[]
): Promise<unknown> {
	return completeJson(client, [
		{
			role: 'system',
			content: suggestionsSystemPrompt,
		},
		{
			role: 'user',
			content: `Tema de la página: ${topic}\n\nSecciones (JSON):\n${JSON.stringify(sections, null, 2)}`,
		},
	]);
}

export async function repairSuggestions(
	client: OpenAI,
	draft: unknown,
	issues: string
): Promise<unknown> {
	return completeJson(client, [
		{
			role: 'system',
			content: suggestionsSystemPrompt,
		},
		{
			role: 'user',
			content: `El siguiente JSON de sugerencias NO pasó la validación.\n\nBorrador actual (JSON):\n${JSON.stringify(draft, null, 2)}\n\nErrores de validación encontrados:\n${issues}\n\nDevuelve el JSON corregido de sugerencias.`,
		},
	]);
}

export async function editPage(
	client: OpenAI,
	instruction: string,
	page: DynamicPage
): Promise<unknown> {
	return completeJson(client, [
		{
			role: 'system',
			content: editSystemPrompt,
		},
		{
			role: 'user',
			content: `Página actual (JSON):\n${JSON.stringify(page, null, 2)}\n\nInstrucción del usuario:\n${instruction}`,
		},
	]);
}

export async function repairPage(
	client: OpenAI,
	draft: unknown,
	issues: string
): Promise<unknown> {
	return completeJson(client, [
		{
			role: 'system',
			content: repairSystemPrompt,
		},
		{
			role: 'user',
			content: `Borrador actual (JSON):\n${JSON.stringify(draft, null, 2)}\n\nErrores de validación encontrados:\n${issues}\n\nDevuelve el JSON corregido.`,
		},
	]);
}

export interface ExamChunkContext {
	start: number;
	total: number;
}

export async function generateExam(
	client: OpenAI,
	topic: string,
	difficulty: DifficultyId,
	count: number,
	chunk?: ExamChunkContext
): Promise<unknown> {
	const systemContent = chunk
		? examChunkGenerateSystemPrompt(count, chunk.start, chunk.total)
		: examGenerateSystemPrompt(count);

	return completeJson(client, [
		{
			role: 'system',
			content: systemContent,
		},
		{
			role: 'user',
			content: `Genera un examen de opción múltiple sobre el tema: ${topic}\nDificultad: ${difficulty}\nNúmero exacto de preguntas: ${count}`,
		},
	]);
}

export async function repairExam(
	client: OpenAI,
	draft: unknown,
	issues: string,
	count?: number,
	isChunk = false
): Promise<unknown> {
	const rawDifficulty =
		draft && typeof draft === 'object'
			? (draft as Record<string, unknown>).difficulty
			: undefined;
	const derivedCount =
		typeof rawDifficulty === 'string' && rawDifficulty in EXAM_DIFFICULTY_COUNTS
			? EXAM_DIFFICULTY_COUNTS[rawDifficulty as DifficultyId]
			: undefined;
	const effectiveCount = typeof count === 'number' ? count : derivedCount;
	const systemContent = isChunk
		? examChunkRepairSystemPrompt(typeof count === 'number' ? count : 0)
		: examRepairSystemPrompt(effectiveCount);

	return completeJson(client, [
		{
			role: 'system',
			content: systemContent,
		},
		{
			role: 'user',
			content: `Borrador actual (JSON):\n${JSON.stringify(draft, null, 2)}\n\nErrores de validación encontrados:\n${issues}\n\nDevuelve el JSON corregido.`,
		},
	]);
}

export interface ReviewerVerdict {
	approve: boolean;
	issues: string[];
	suggestedFixes?: Record<string, unknown> | null;
}

export async function reviewPage(
	client: OpenAI,
	page: DynamicPage,
	topic: string
): Promise<ReviewerVerdict> {
	const raw = await completeJson(client, [
		{
			role: 'system',
			content: reviewerSystemPrompt,
		},
		{
			role: 'user',
			content: `Tema solicitado: ${topic}\n\nPágina a revisar (JSON):\n${JSON.stringify(page, null, 2)}`,
		},
	]);

	if (raw && typeof raw === 'object') {
		const obj = raw as Record<string, unknown>;
		return {
			approve: obj.approve === true,
			issues: Array.isArray(obj.issues) ? obj.issues.filter((i): i is string => typeof i === 'string') : [],
			suggestedFixes:
				obj.suggestedFixes && typeof obj.suggestedFixes === 'object'
					? (obj.suggestedFixes as Record<string, unknown>)
					: null,
		};
	}

	return { approve: true, issues: [] };
}

export async function chatCompletion(
	client: OpenAI,
	messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
): Promise<string> {
	const completion = await client.chat.completions.create({
		model: MODEL,
		messages: [
			{
				role: 'system',
				content: TUTOR_SYSTEM_PROMPT,
			},
			...messages,
		],
	});

	return completion.choices[0]?.message?.content ?? '';
}

export async function* streamChatCompletion(
	client: OpenAI,
	messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
): AsyncGenerator<string> {
	const completion = await client.chat.completions.create({
		model: MODEL,
		stream: true,
		messages: [
			{
				role: 'system',
				content: TUTOR_SYSTEM_PROMPT,
			},
			...messages,
		],
	});

	for await (const chunk of completion) {
		const delta = chunk.choices?.[0]?.delta?.content;
		if (delta) {
			yield delta;
		}
	}
}

export interface ArticleTema {
	nombre: string;
	descripcion: string;
	categoria: string;
	pregunta: string;
}

function articleEditMessages(
	tema: ArticleTema,
	content: string,
	instruction: string
): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
	return [
		{
			role: 'system',
			content: ARTICLE_EDIT_SYSTEM_PROMPT,
		},
		{
			role: 'user',
			content:
				`Tema del artículo:\n` +
				`Nombre: ${tema.nombre}\n` +
				`Descripción: ${tema.descripcion}\n` +
				`Categoría: ${tema.categoria}\n` +
				`Pregunta original: ${tema.pregunta}\n\n` +
				`Artículo actual (markdown):\n${content}\n\n` +
				`Instrucción del usuario:\n${instruction}`,
		},
	];
}

export async function editArticle(
	client: OpenAI,
	tema: ArticleTema,
	content: string,
	instruction: string
): Promise<string> {
	const completion = await client.chat.completions.create({
		model: MODEL,
		messages: articleEditMessages(tema, content, instruction),
	});

	return completion.choices[0]?.message?.content ?? '';
}

export async function* streamEditArticle(
	client: OpenAI,
	tema: ArticleTema,
	content: string,
	instruction: string
): AsyncGenerator<string> {
	const completion = await client.chat.completions.create({
		model: MODEL,
		stream: true,
		messages: articleEditMessages(tema, content, instruction),
	});

	for await (const chunk of completion) {
		const delta = chunk.choices?.[0]?.delta?.content;
		if (delta) {
			yield delta;
		}
	}
}
