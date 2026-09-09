import type { DynamicPage } from '../schemas/dynamicPage';

export type DynamicPageMeta = {
	attempts: number;
	repairs: number;
	reviewed: boolean;
};

export interface PageGenerationResult {
	page: DynamicPage;
	meta: DynamicPageMeta;
}

export type GenerateErrorCode = 'MAX_REPAIR' | 'ERROR' | 'TOPIC_REQUIRED' | 'INSTRUCTION_REQUIRED' | 'INVALID_PAGE' | 'PAGE_NOT_FOUND';

export class PageGenerationClientError extends Error {
	readonly code: GenerateErrorCode;
	readonly issues?: string[];

	constructor(code: GenerateErrorCode, message: string, issues?: string[]) {
		super(message);
		this.name = 'PageGenerationClientError';
		this.code = code;
		this.issues = issues;
	}
}

const WORKER_URL = 'https://ai-worker-inference.shykandev.workers.dev';

export async function requestPageGeneration(
	topic: string,
	options: { review?: boolean } = {}
): Promise<PageGenerationResult> {
	let response: Response;
	try {
		response = await fetch(`${WORKER_URL}/generate-page`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				topic,
				review: options.review === true,
			}),
		});
	} catch (e) {
		console.error(e);
		throw new PageGenerationClientError(
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
		const obj = (body ?? {}) as Record<string, unknown>;
		const message =
			typeof obj.message === 'string' && obj.message
				? obj.message
				: 'El servidor no pudo generar la página. Intenta de nuevo.';
		const issues = Array.isArray(obj.issues)
			? obj.issues.filter((i): i is string => typeof i === 'string')
			: undefined;
		throw new PageGenerationClientError(
			(response.status === 422 ? 'MAX_REPAIR' : 'ERROR') as GenerateErrorCode,
			message,
			issues
		);
	}

	const result = body as Record<string, unknown>;
	if (result.ok !== true || !result.page || typeof result.page !== 'object') {
		throw new PageGenerationClientError('ERROR', 'El servidor devolvió una respuesta inválida.');
	}

	return {
		page: result.page as DynamicPage,
		meta: (result.meta ?? { attempts: 1, repairs: 0, reviewed: false }) as DynamicPageMeta,
	};
}

export async function requestPageEdit(
	page: DynamicPage,
	instruction: string
): Promise<PageGenerationResult> {
	let response: Response;
	try {
		response = await fetch(`${WORKER_URL}/edit-page`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				page,
				instruction,
			}),
		});
	} catch (e) {
		console.error(e);
		throw new PageGenerationClientError(
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
		const obj = (body ?? {}) as Record<string, unknown>;
		const message =
			typeof obj.message === 'string' && obj.message
				? obj.message
				: 'El servidor no pudo editar la página. Intenta de nuevo.';
		const issues = Array.isArray(obj.issues)
			? obj.issues.filter((i): i is string => typeof i === 'string')
			: undefined;

		let code: GenerateErrorCode = 'ERROR';
		if (typeof obj.code === 'string') {
			switch (obj.code) {
				case 'MAX_REPAIR':
					code = 'MAX_REPAIR';
					break;
				case 'INSTRUCTION_REQUIRED':
					code = 'INSTRUCTION_REQUIRED';
					break;
				case 'INVALID_PAGE':
					code = 'INVALID_PAGE';
					break;
				default:
					code = 'ERROR';
			}
		}
		throw new PageGenerationClientError(code, message, issues);
	}

	const result = body as Record<string, unknown>;
	if (result.ok !== true || !result.page || typeof result.page !== 'object') {
		throw new PageGenerationClientError('ERROR', 'El servidor devolvió una respuesta inválida.');
	}

	return {
		page: result.page as DynamicPage,
		meta: (result.meta ?? { attempts: 1, repairs: 0, reviewed: false }) as DynamicPageMeta,
	};
}
