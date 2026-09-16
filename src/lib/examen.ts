import type { DifficultyId, Examen } from '../schemas/examen';
import { WORKER_URL } from '../config/worker';

export type ExamGenerationMeta = {
	attempts: number;
	repairs: number;
	reviewed: boolean;
};

export interface ExamGenerationResult {
	exam: Examen;
	meta: ExamGenerationMeta;
}

export type ExamGenerationErrorCode =
	| 'MAX_REPAIR'
	| 'ERROR'
	| 'TOPIC_REQUIRED'
	| 'DIFFICULTY_REQUIRED'
	| 'INVALID_DIFFICULTY';

export class ExamGenerationClientError extends Error {
	readonly code: ExamGenerationErrorCode;
	readonly issues?: string[];

	constructor(code: ExamGenerationErrorCode, message: string, issues?: string[]) {
		super(message);
		this.name = 'ExamGenerationClientError';
		this.code = code;
		this.issues = issues;
	}
}

const DEFAULT_MESSAGES: Record<ExamGenerationErrorCode, string> = {
	MAX_REPAIR: 'No se pudo generar un examen válido. Intenta con otro tema o dificultad.',
	ERROR: 'El servidor no pudo generar el examen. Intenta de nuevo.',
	TOPIC_REQUIRED: 'Escribe un tema para generar tu examen.',
	DIFFICULTY_REQUIRED: 'Elige una dificultad para generar tu examen.',
	INVALID_DIFFICULTY: 'La dificultad elegida no es válida.',
};

function isKnownCode(value: unknown): value is ExamGenerationErrorCode {
	return (
		typeof value === 'string' &&
		(value === 'MAX_REPAIR' ||
			value === 'ERROR' ||
			value === 'TOPIC_REQUIRED' ||
			value === 'DIFFICULTY_REQUIRED' ||
			value === 'INVALID_DIFFICULTY')
	);
}

function readErrorPayload(body: unknown, fallbackCode: ExamGenerationErrorCode): ExamGenerationClientError {
	const obj = (body ?? {}) as Record<string, unknown>;
	const code = isKnownCode(obj.code) ? obj.code : fallbackCode;
	const message =
		typeof obj.message === 'string' && obj.message ? obj.message : DEFAULT_MESSAGES[code];
	const issues = Array.isArray(obj.issues)
		? obj.issues.filter((i): i is string => typeof i === 'string')
		: undefined;
	return new ExamGenerationClientError(code, message, issues);
}

export async function requestExamGeneration(
	topic: string,
	difficulty: DifficultyId
): Promise<ExamGenerationResult> {
	let response: Response;
	try {
		response = await fetch(`${WORKER_URL}/generate-exam`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				topic,
				difficulty,
			}),
		});
	} catch (e) {
		console.error(e);
		throw new ExamGenerationClientError(
			'ERROR',
			'No se pudo conectar con el servidor. Revisa tu conexión e intenta de nuevo.'
		);
	}

	let body: unknown;
	try {
		body = await response.json();
	} catch {
		body = null;
	}

	if (!response.ok || !body || typeof body !== 'object') {
		const fallbackCode: ExamGenerationErrorCode =
			response.status === 422 ? 'MAX_REPAIR' : 'ERROR';
		throw readErrorPayload(body, fallbackCode);
	}

	const result = body as Record<string, unknown>;
	if (result.ok !== true || !result.exam || typeof result.exam !== 'object') {
		throw new ExamGenerationClientError('ERROR', 'El servidor devolvió una respuesta inválida.');
	}

	return {
		exam: result.exam as Examen,
		meta: (result.meta ?? { attempts: 1, repairs: 0, reviewed: false }) as ExamGenerationMeta,
	};
}
