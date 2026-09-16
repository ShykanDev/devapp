import { WORKER_URL } from '../config/worker';

export class ArticleEditClientError extends Error {
	readonly code: string;

	constructor(code: string, message: string) {
		super(message);
		this.name = 'ArticleEditClientError';
		this.code = code;
	}
}

export async function requestArticleEdit(input: {
	tema: { nombre: string; descripcion: string; categoria: string; pregunta: string };
	content: string;
	instruction: string;
}): Promise<{ content: string }> {
	let response: Response;
	try {
		response = await fetch(`${WORKER_URL}/edit-article`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				tema: input.tema,
				content: input.content,
				instruction: input.instruction,
			}),
		});
	} catch (e) {
		console.error(e);
		throw new ArticleEditClientError(
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
				: 'El servidor no pudo editar el artículo. Intenta de nuevo.';
		throw new ArticleEditClientError(
			typeof obj.code === 'string' ? obj.code : 'ERROR',
			message
		);
	}

	const result = body as Record<string, unknown>;
	if (
		result.ok !== true ||
		typeof result.content !== 'string' ||
		!result.content.trim()
	) {
		throw new ArticleEditClientError('ERROR', 'El servidor devolvió una respuesta inválida.');
	}

	return { content: result.content };
}
