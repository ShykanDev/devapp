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

	return {
		createClient: () => ({}),
		chatCompletion: async () => "Respuesta completa",
		classifyIntent: async () => ({ intent: "chat", topic: null }),
		streamChatCompletion: async function* () {
			yield "Hola ";
			yield "¿qué tal?";
		},
		editPage: async (_client: unknown, _instruction: string, page: unknown) => page,
		editArticle: async () =>
			"## Artículo editado\n\nContenido nuevo con base científica.",
		streamEditArticle: async function* () {
			yield "## Artículo editado\n\n";
			yield "Contenido nuevo con base científica.";
		},
		generateExam: async (_client: unknown, topic: string, difficulty: string, count?: number) =>
			makeExam(topic, difficulty, typeof count === "number" ? count : 8),
		repairExam: async (_client: unknown, _draft: unknown, _issues: string, count?: number) =>
			makeExam("Tema", "facil", typeof count === "number" ? count : 8),
	};
});

const validPage = {
	schemaVersion: 1,
	title: 'Hipertensión arterial',
	description:
		'Aprende qué es la presión arterial alta, por qué importa controlarla y cómo convivir con ella de forma segura.',
	sections: [
		{
			title: '¿Qué es la hipertensión?',
			content:
				'La hipertensión arterial es la elevación sostenida de la presión que ejerce la sangre contra las paredes de las arterias.',
			subsections: [],
		},
	],
	informativeSection: {
		title: 'Dato importante',
		content:
			'La hipertensión suele ser asintomática, por eso se le llama el asesino silencioso: revisa tu presión al menos una vez al año.',
	},
	moreInformation: {
		title: 'Cuándo acudir al médico',
		content:
			'Si tu presión está por encima de 180/120 o tienes dolor de pecho, dificultad para respirar o visión borrosa, acude a urgencias.',
	},
	flashcards: [
		{
			question: '¿Qué significa 120/80?',
			answer: '120 es la presión sistólica y 80 la diastólica, ambos en mmHg.',
		},
		{
			question: '¿Cuándo se considera hipertensión?',
			answer: 'Cuando la presión se mantiene en 130/80 o más en varias mediciones.',
		},
		{
			question: '¿La hipertensión siempre da síntomas?',
			answer: 'No, casi nunca da síntomas; por eso hay que medirla seguido.',
		},
	],
	exam: {
		questions: [
			{
				question: '¿Cuál de estos valores se considera una crisis hipertensiva?',
				options: ['120/80', '130/80', '160/100', '180/120'],
				correctAnswer: 3,
				explanation: 'Presiones de 180/120 o mayores requieren atención de urgencia.',
			},
			{
				question: '¿Cuál es una medida clave para controlar la presión?',
				options: ['Reducir el sodio', 'Fumar más', 'Evitar el ejercicio', 'Saltarse los medicamentos'],
				correctAnswer: 0,
			},
			{
				question: '¿Cómo se llama la presión cuando el corazón se relaja?',
				options: ['Sistólica', 'Diastólica', 'Media', 'Pulso'],
				correctAnswer: 1,
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
				messages: [{ role: "user", content: "Hola, cuéntame qué es la diabetes" }],
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
				instruction: "Agrega una sección sobre dieta recomendada",
			}),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		expect((body.page as { title?: string }).title).toBe("Hipertensión arterial");
		expect(body.meta).toBeDefined();
	});

	it("rejects /edit-article without instruction", async () => {
		const response = await unitFetch("http://worker.local/edit-article", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				tema: { nombre: "El cerebro", categoria: "Anatomía" },
				content: "## El cerebro",
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
				tema: { nombre: "El cerebro", categoria: "Anatomía" },
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
				content: "## El cerebro",
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
				tema: { nombre: "El cerebro", categoria: "Anatomía", pregunta: "Explícame el cerebro" },
				content: "## El cerebro\n\nEs el centro de control del cuerpo.",
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
				tema: { nombre: "El cerebro", categoria: "Anatomía" },
				content: "## El cerebro",
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
			body: JSON.stringify({ topic: "Diabetes tipo 2" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("DIFFICULTY_REQUIRED");
	});

	it("rejects /generate-exam with invalid difficulty", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Diabetes tipo 2", difficulty: "experto" }),
		});
		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.code).toBe("INVALID_DIFFICULTY");
	});

	it("generates a valid exam on /generate-exam", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Diabetes tipo 2", difficulty: "facil" }),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const exam = body.exam as { difficulty?: string; questions?: unknown[]; title?: string };
		expect(exam.difficulty).toBe("facil");
		expect(exam.title).toBe("Examen: Diabetes tipo 2");
		expect(exam.questions).toHaveLength(8);
		expect(body.meta).toEqual({ attempts: 1, repairs: 0, reviewed: false });
	});

	it("generates a valid 12-question exam for media difficulty (batched)", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Hipertensión arterial", difficulty: "media" }),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const exam = body.exam as { difficulty?: string; questions?: unknown[]; title?: string };
		expect(exam.difficulty).toBe("media");
		expect(exam.title).toBe("Examen: Hipertensión arterial");
		expect(exam.questions).toHaveLength(12);
	});

	it("generates a valid 16-question exam for dificil difficulty (batched)", async () => {
		const response = await unitFetch("http://worker.local/generate-exam", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ topic: "Insuficiencia cardíaca", difficulty: "dificil" }),
		});

		expect(response.status).toBe(200);
		const body = (await response.json()) as Record<string, unknown>;
		expect(body.ok).toBe(true);
		const exam = body.exam as { difficulty?: string; questions?: unknown[]; title?: string };
		expect(exam.difficulty).toBe("dificil");
		expect(exam.title).toBe("Examen: Insuficiencia cardíaca");
		expect(exam.questions).toHaveLength(16);
	});
});
