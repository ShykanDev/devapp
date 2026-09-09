import OpenAI from 'openai';
import { z } from 'zod';
import {
	DynamicPageSchema,
	formatZodIssues,
	type DynamicPage,
} from '../schema/dynamicPage';
import { examObjectSchema, ExamSchema, EXAM_DIFFICULTY_COUNTS } from '../schema/examen';
import type { DifficultyId, Exam } from '../schema/examen';
import {
	editPage,
	generateExam,
	generatePage,
	repairExam,
	repairPage,
	reviewPage,
	type PageMeta,
} from './ai';

export const DEFAULT_MAX_REPAIR_ATTEMPTS = 3;

export const EXAM_CHUNK_MAX_QUESTIONS = 10;

export class PageGenerationError extends Error {
	readonly issues: string[];

	constructor(message: string, issues: string[] = []) {
		super(message);
		this.name = 'PageGenerationError';
		this.issues = issues;
	}
}

export function maxRepairAttempts(env?: { PAGE_MAX_REPAIR_ATTEMPTS?: string }): number {
	const raw = env?.PAGE_MAX_REPAIR_ATTEMPTS;
	if (raw) {
		const parsed = Number.parseInt(raw, 10);
		if (Number.isFinite(parsed) && parsed >= 0) {
			return parsed;
		}
	}
	return DEFAULT_MAX_REPAIR_ATTEMPTS;
}

function readIssues(issues: { path: string; message: string }[]): string {
	if (issues.length === 0) {
		return 'Validación fallida sin detalles';
	}
	return issues.map((i) => `${i.path}: ${i.message}`).join('\n');
}

async function produceValidJson(
	client: OpenAI,
	produce: () => Promise<unknown>,
	meta: PageMeta,
	maxRepairs: number
): Promise<DynamicPage> {
	let draft: unknown = await produce();
	meta.attempts += 1;

	let parsed = DynamicPageSchema.safeParse(draft);
	let repairCount = 0;

	while (!parsed.success && repairCount < maxRepairs) {
		const issues = readIssues(formatZodIssues(parsed.error));
		draft = await repairPage(client, draft, issues);
		meta.attempts += 1;
		repairCount += 1;
		meta.repairs = repairCount;
		parsed = DynamicPageSchema.safeParse(draft);
	}

	if (!parsed.success) {
		throw new PageGenerationError(
			'No se pudo generar una página válida',
			formatZodIssues(parsed.error).map((i) => `${i.path}: ${i.message}`)
		);
	}

	return parsed.data;
}

export async function generateValidPage(
	client: OpenAI,
	topic: string,
	options: { review?: boolean; maxRepairAttempts?: number } = {}
): Promise<{ page: DynamicPage; meta: PageMeta }> {
	const cleanTopic = topic.trim();
	if (!cleanTopic) {
		throw new PageGenerationError('El tema no puede estar vacío');
	}

	const maxRepairs = options.maxRepairAttempts ?? DEFAULT_MAX_REPAIR_ATTEMPTS;
	const meta: PageMeta = { attempts: 0, repairs: 0, reviewed: false };

	let page = await produceValidJson(client, () => generatePage(client, cleanTopic), meta, maxRepairs);

	if (options.review) {
		meta.reviewed = true;
		const verdict = await reviewPage(client, page, cleanTopic);

		if (!verdict.approve && verdict.issues.length > 0) {
			const suggestion =
				verdict.suggestedFixes && typeof verdict.suggestedFixes === 'object'
					? verdict.suggestedFixes
					: page;
			let repairedUnknown: unknown = suggestion;
			let reparsed = DynamicPageSchema.safeParse(repairedUnknown);
			let localRepairs = 0;

			while (!reparsed.success && localRepairs < Math.max(1, Math.floor(maxRepairs / 2))) {
				const issues = readIssues(formatZodIssues(reparsed.error));
				repairedUnknown = await repairPage(client, suggestion, issues);
				meta.attempts += 1;
				localRepairs += 1;
				reparsed = DynamicPageSchema.safeParse(repairedUnknown);
			}

			if (reparsed.success) {
				page = reparsed.data;
			}
		}
	}

	return { page, meta };
}

export async function editValidPage(
	client: OpenAI,
	page: DynamicPage,
	instruction: string,
	options: { maxRepairAttempts?: number } = {}
): Promise<{ page: DynamicPage; meta: PageMeta }> {
	const cleanInstruction = instruction.trim();
	if (!cleanInstruction) {
		throw new PageGenerationError('La instrucción no puede estar vacía');
	}

	const maxRepairs = options.maxRepairAttempts ?? DEFAULT_MAX_REPAIR_ATTEMPTS;
	const meta: PageMeta = { attempts: 0, repairs: 0, reviewed: false };

	const edited = await produceValidJson(
		client,
		() => editPage(client, cleanInstruction, page),
		meta,
		maxRepairs
	);

	return { page: edited, meta };
}

function splitIntoChunks(total: number, max: number): number[] {
	if (total <= max) {
		return [total];
	}
	const chunkCount = Math.ceil(total / max);
	const base = Math.floor(total / chunkCount);
	let remainder = total % chunkCount;
	const sizes: number[] = [];
	for (let i = 0; i < chunkCount; i++) {
		let size = base;
		if (remainder > 0) {
			size += 1;
			remainder -= 1;
		}
		sizes.push(size);
	}
	return sizes;
}

function buildExamChunkSchema(size: number) {
	return examObjectSchema.superRefine((exam, ctx) => {
		if (exam.questions.length !== size) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['questions'],
				message: `"questions" debe tener exactamente ${size} preguntas en este bloque`,
			});
		}
	});
}

async function produceValidExamChunk(
	client: OpenAI,
	topic: string,
	difficulty: DifficultyId,
	size: number,
	start: number,
	total: number,
	maxRepairs: number
): Promise<{ chunk: Exam; attempts: number; repairs: number }> {
	const schema = buildExamChunkSchema(size);
	let draft: unknown = await generateExam(client, topic, difficulty, size, { start, total });
	let parsed = schema.safeParse(draft);
	let attempts = 1;
	let repairs = 0;

	while (!parsed.success && repairs < maxRepairs) {
		const issues = [
			`Se requieren exactamente ${size} preguntas en este bloque del examen.`,
			readIssues(formatZodIssues(parsed.error)),
		].join('\n');
		draft = await repairExam(client, draft, issues, size, true);
		attempts += 1;
		repairs += 1;
		parsed = schema.safeParse(draft);
	}

	if (!parsed.success) {
		throw new PageGenerationError(
			'No se pudo generar un examen válido',
			formatZodIssues(parsed.error).map((i) => `${i.path}: ${i.message}`)
		);
	}

	return { chunk: parsed.data, attempts, repairs };
}

export async function generateValidExam(
	client: OpenAI,
	topic: string,
	difficulty: DifficultyId,
	options: { maxRepairAttempts?: number } = {}
): Promise<{ exam: Exam; meta: PageMeta }> {
	const cleanTopic = topic.trim();
	if (!cleanTopic) {
		throw new PageGenerationError('El tema no puede estar vacío');
	}
	if (!(difficulty in EXAM_DIFFICULTY_COUNTS)) {
		throw new PageGenerationError('La dificultad no es válida');
	}

	const count = EXAM_DIFFICULTY_COUNTS[difficulty];
	const maxRepairs = options.maxRepairAttempts ?? DEFAULT_MAX_REPAIR_ATTEMPTS;

	const chunkSizes = splitIntoChunks(count, EXAM_CHUNK_MAX_QUESTIONS);
	let cursor = 1;
	const results = await Promise.all(
		chunkSizes.map((size) => {
			const chunk = produceValidExamChunk(
				client,
				cleanTopic,
				difficulty,
				size,
				cursor,
				count,
				maxRepairs
			);
			cursor += size;
			return chunk;
		})
	);

	const head = results[0].chunk;
	const assembled: Exam = {
		schemaVersion: head.schemaVersion,
		title: head.title,
		topic: head.topic,
		difficulty: head.difficulty,
		questions: results.flatMap((r) => r.chunk.questions),
	};

	const parsed = ExamSchema.safeParse(assembled);
	if (!parsed.success) {
		throw new PageGenerationError(
			'No se pudo generar un examen válido',
			formatZodIssues(parsed.error).map((i) => `${i.path}: ${i.message}`)
		);
	}

	const meta: PageMeta = {
		attempts: results.reduce((sum, r) => sum + r.attempts, 0),
		repairs: results.reduce((sum, r) => sum + r.repairs, 0),
		reviewed: false,
	};

	return { exam: parsed.data, meta };
}
