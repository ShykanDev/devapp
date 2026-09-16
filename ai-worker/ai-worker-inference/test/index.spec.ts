import {
	env,
	createExecutionContext,
	waitOnExecutionContext,
	SELF,
} from "cloudflare:test";
import { describe, it, expect, vi } from "vitest";
import worker from "../src/index";

vi.mock("../src/lib/ai", () => {
	const examQuestions = (count: number) =>
		Array.from({ length: count }, (_, i) => ({
			question: `¿Cuál es la respuesta correcta para la pregunta número ${i + 1} del examen?`,
			options: ["Primera opción correcta", "Segunda opción", "Tercera opción", "Cuarta opción"],
			correctAnswer: 0,
			explanation: "La primera opción es la correcta.",
		}));

	const makeExam = (topic: string, difficulty: string, count: number) => ({
		schemaVersion: 1,
		title: `Examen: ${topic}`,
		topic,
		difficulty,
		questions: examQuestions(count),
	});

	const suggestionSet = [
		"Subtema uno",
		"Subtema dos",
		"Subtema tres",
		"Subtema cuatro",
		"Subtema cinco",
	];

	const makePage = (topic: string) => ({
		schemaVersion: 1,
		title: `Página sobre ${topic}`,
		description: "Descripción suficientemente larga para pasar la validación de la página.",
		sections: [
			{
				title: "Sección principal",
				content: "Contenido de la sección principal sobre el tema solicitado.",
				subsections: [],
			},
		],
		informativeSection: {
			title: "Dato importante",
			content: "Contenido informativo suficientemente largo para pasar la validación.",
		},
		moreInformation: {
			title: "Errores comunes y buenas prácticas",
			content: "Consejos concretos y suficientemente largos para pasar la validación.",
		},
		flashcards: [
			{ question: "¿Pregunta uno del tema?", answer: "Respuesta uno del tema educativo." },
			{ question: "¿Pregunta dos del tema?", answer: "Respuesta dos del tema educativo." },
			{ question: "¿Pregunta tres del tema?", answer: "Respuesta tres del tema educativo." },
		],
		exam: {
			questions: examQuestions(3),
		},
	});

	return {
		createClient: () => ({}),
		chatCompletion: async () => "Respuesta completa",
		classifyIntent: async () => ({ intent: "chat", topic: null }),
		streamChatCompletion: async function* () {
			yield "Hola ";
			yield "¿qué tal?";
		},
		generatePage: async (_client: unknown, topic: string) => makePage(topic),
		editPage: async (_client: unknown, _instruction: string, page: unknown) => page,
		repairPage: async (_client: unknown, draft: unknown) => draft,
		reviewPage: async () => ({ approve: true, issues: [], suggestedFixes: null }),
		generateSectionSuggestions: async (_client: unknown, _topic: string, sections: unknown[]) => ({
			suggestions: sections.map(() => suggestionSet),
		}),
		repairSuggestions: async () => ({ suggestions: [suggestionSet] }),
		editArticle: async () =>
			"## Artículo editado\n\nContenido nuevo con ejemplos de código.",
		streamEditArticle: async function* () {
			yield "## Artículo editado\n\n";
			yield "Contenido nuevo con ejemplos de código.";
		},
		generateExam: async (_client: unknown, topic: string, difficulty: string, count?: number) =>
			makeExam(topic, difficulty, typeof count === "number" ? count : 8),
		repairExam: async (_client: unknown, _draft: unknown, _issues: string, count?: number) =>
			makeExam("Tema", "facil", typeof count === "number" ? count : 8),
	};
});

const validPage = {
	schemaVersion: 1,
	title: 'Complejidad algorítmica',
	description:
		'Aprende qué es la notación Big-O, por qué importa al optimizar y cómo analizar el costo de tus algoritmos.',
	sections: [
		{
			title: '¿Qué es la complejidad?',
			content:
				'La complejidad describe cómo crece el tiempo o la memoria de un algoritmo a medida que crece la entrada.',
			subsections: [],
		},
	],
	informativeSection: {
		title: 'Dato importante',
		content:
			'Dos algoritmos con la misma tarea pueden diferir muchísimo en rendimiento; la notación Big-O te ayuda a compararlos.',
	},
	moreInformation: {
		title: 'Errores comunes y buenas prácticas',
		content:
			'No optimices antes de medir. Identifica primero el cuello de botella real y elige la estructura de datos adecuada.',
	},
	flashcards: [
		{
			question: '¿Qué mide la notación O(n)?',
			answer: 'Que el tiempo de ejecución crece de forma lineal con el tamaño de la entrada.',
		},
		{
			question: '¿Cuál es la complejidad de una búsqueda binaria?',
			answer: 'O(log n), porque divide el espacio de búsqueda a la mitad en cada paso.',
		},
		{
			question: '¿Por qué importa la complejidad espacial?',
			answer: 'Porque un algoritmo puede ser rápido pero consumir demasiada memoria.',
		},
	],
	exam: {
		questions: [
			{
				question: '¿Cuál de estas complejidades crece más rápido?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
				correctAnswer: 3,
				explanation: 'O(n^2) escala peor que las demás al aumentar la entrada.',
			},
			{
				question: '¿Qué estructura es ideal para búsquedas promedio O(1)?',
				options: ['Tabla hash', 'Lista enlazada', 'Arreglo', 'Árbol binario'],
				correctAnswer: 0,
			},
			{
				question: '¿Qué complejidad tiene acceder a un elemento por índice en un arreglo?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 0,
			},
		],
	},
};

const handler = worker as unknown as {
	fetch(request: Request, env: unknown, ctx: unknown): Promise<Response>;
};

async function unitFetch(url: string, init?: RequestInit): Promise<Response> {
	const ctx = createExecutionContext();
	const response = await handler.fetch(new Request(url, init), env, ctx);
	await waitOnExecutionContext(ctx);
	return response;
}

describe("worker routing", () => {
	it("answers OPTIONS preflight with CORS headers", async () => {
		const response = await unitFetch("http://worker.local/chat", { method: "OPTIONS" });
		expect(response.status).toBe(204);
		expect(response.headers.get("Access-Control-Allow-Origin")).toBe("*");
	});

	it("returns 404 for unknown paths", async () => {
		const response = await SELF.fetch("https://example.com/unknown");
		expect(response.status).toBe(404);
		expect(await response.json()).toEqual({ error: "Not Found" });
	});

	it("rejects /chat without messages", async () => {
		const response = await unitFetch("http://worker.local/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({}),
		});
		expect(response.status).toBe(400);
		expect(await response.json()).toEqual({ error: "Messages are required" });
	});

	it("streams SSE deltas when stream flag is set", async () => {
		const response = await unitFetch("http://worker.local/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				stream: true,
				messages: [{ role: "user", content: "Hola, cuéntame qué es la recursividad" }],
			}),
		});

		expect(response.status).toBe(200);
		expect(response.headers.get("Content-Type")?.toLowerCase()).toContain("text/event-stream");
		expect(response.headers.get("Cache-Control")).toContain("no-cache");

		const body = await response.text();
		expect(body).toContain('data: {"delta":"Hola "}');
		expect(body).toContain('data: {"delta":"¿qué tal?"}');
		expect(body).toContain('data: {"done":true}');
	});

	it("rejects /generate-page without topic", async () => {
		const response = await unitFetch("http://worker.local/generate-page", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({}),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("TOPIC_REQUIRED");
	});

	it("generates a page on /generate-page with optional context", async () => {
		const response = await unitFetch("http://worker.local/generate-page", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Recursividad", context: "Enfocado a entrevistas técnicas" }),
		});
		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		expect((body.page as { title?: string }).title).toContain("Recursividad");
		expect(body.meta).toBeDefined();
	});

	it("rejects /generate-suggestions without topic", async () => {
		const response = await unitFetch("http://worker.local/generate-suggestions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ sections: [{ title: "Sección", content: "Contenido" }] }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("TOPIC_REQUIRED");
	});

	it("rejects /generate-suggestions without sections", async () => {
		const response = await unitFetch("http://worker.local/generate-suggestions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Recursividad" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("SECTIONS_REQUIRED");
	});

	it("rejects /generate-suggestions with empty section content", async () => {
		const response = await unitFetch("http://worker.local/generate-suggestions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				topic: "Recursividad",
				sections: [{ title: "Sección", content: "" }],
			}),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("SECTIONS_REQUIRED");
	});

	it("returns suggestions on /generate-suggestions", async () => {
		const response = await unitFetch("http://worker.local/generate-suggestions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				topic: "Recursividad",
				sections: [
					{
						title: "¿Qué es la recursividad?",
						content: "Una función que se llama a sí misma para resolver un problema.",
						subsections: [{ title: "Caso base", content: "Condición que detiene la recursión." }],
					},
				],
			}),
		});
		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const suggestions = body.suggestions as string[][];
		expect(suggestions).toHaveLength(1);
		expect(suggestions[0]).toHaveLength(5);
		expect(body.meta).toBeDefined();
	});

	it("rejects /edit-page without instruction", async () => {
		const response = await unitFetch("http://worker.local/edit-page", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ page: validPage }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("INSTRUCTION_REQUIRED");
	});

	it("rejects /edit-page with an invalid page", async () => {
		const response = await unitFetch("http://worker.local/edit-page", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ page: { schemaVersion: 2 }, instruction: "Agrega info" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("INVALID_PAGE");
	});

	it("edits a valid page on /edit-page", async () => {
		const response = await unitFetch("http://worker.local/edit-page", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				page: validPage,
				instruction: "Agrega una sección sobre complejidad",
			}),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		expect((body.page as { title?: string }).title).toBe("Complejidad algorítmica");
		expect(body.meta).toBeDefined();
	});

	it("rejects /edit-article without instruction", async () => {
		const response = await unitFetch("http://worker.local/edit-article", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				tema: { nombre: "La recursividad", categoria: "Algoritmos" },
				content: "## La recursividad",
			}),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("INSTRUCTION_REQUIRED");
	});

	it("rejects /edit-article without content", async () => {
		const response = await unitFetch("http://worker.local/edit-article", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				tema: { nombre: "La recursividad", categoria: "Algoritmos" },
				content: "",
				instruction: "Amplía el tema",
			}),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("CONTENT_REQUIRED");
	});

	it("rejects /edit-article with invalid tema", async () => {
		const response = await unitFetch("http://worker.local/edit-article", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				tema: { nombre: "" },
				content: "## La recursividad",
				instruction: "Amplía el tema",
			}),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("INVALID_TEMA");
	});

	it("edits a valid article on /edit-article", async () => {
		const response = await unitFetch("http://worker.local/edit-article", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				tema: { nombre: "La recursividad", categoria: "Algoritmos", pregunta: "Explícame la recursividad" },
				content: "## La recursividad\n\nEs una técnica donde una función se llama a sí misma.",
				instruction: "Agrega una sección sobre la memoria",
			}),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		expect(body.content).toContain("Artículo editado");
	});

	it("streams SSE deltas on /edit-article with stream flag", async () => {
		const response = await unitFetch("http://worker.local/edit-article", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				stream: true,
				tema: { nombre: "La recursividad", categoria: "Algoritmos" },
				content: "## La recursividad",
				instruction: "Agrega una sección sobre la memoria",
			}),
		});

		expect(response.status).toBe(200);
		expect(response.headers.get("Content-Type")?.toLowerCase()).toContain("text/event-stream");

		const body = await response.text();
		expect(body).toContain('data: {"delta":"## Artículo editado\\n\\n"}');
		expect(body).toContain('data: {"done":true}');
	});

	it("rejects /generate-exam without topic", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ difficulty: "facil" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("TOPIC_REQUIRED");
	});

	it("rejects /generate-exam without difficulty", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Recursividad" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("DIFFICULTY_REQUIRED");
	});

	it("rejects /generate-exam with invalid difficulty", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Recursividad", difficulty: "experto" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("INVALID_DIFFICULTY");
	});

	it("generates a valid exam on /generate-exam", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Recursividad", difficulty: "facil" }),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const exam = body.exam as { difficulty?: string; questions?: unknown[]; title?: string };
		expect(exam.difficulty).toBe("facil");
		expect(exam.title).toBe("Examen: Recursividad");
		expect(exam.questions).toHaveLength(8);
		expect(body.meta).toEqual({ attempts: 1, repairs: 0, reviewed: false });
	});

	it("generates a valid 12-question exam for media difficulty (batched)", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Complejidad algorítmica", difficulty: "media" }),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const exam = body.exam as { difficulty?: string; questions?: unknown[]; title?: string };
		expect(exam.difficulty).toBe("media");
		expect(exam.title).toBe("Examen: Complejidad algorítmica");
		expect(exam.questions).toHaveLength(12);
	});

	it("generates a valid 16-question exam for dificil difficulty (batched)", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Programación orientada a objetos", difficulty: "dificil" }),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const exam = body.exam as { difficulty?: string; questions?: unknown[]; title?: string };
		expect(exam.difficulty).toBe("dificil");
		expect(exam.title).toBe("Examen: Programación orientada a objetos");
		expect(exam.questions).toHaveLength(16);
	});
});
