export class JsonExtractError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'JsonExtractError';
	}
}

function stripCodeFences(text: string): string {
	const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
	if (fenced) {
		return fenced[1].trim();
	}

	const trimmed = text.trim();
	if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
		return trimmed.slice(3, -3).trim();
	}

	return trimmed;
}

export function extractJson(text: string): unknown {
	const stripped = stripCodeFences(text);

	if (stripped) {
		try {
			return JSON.parse(stripped);
		} catch {
			// continue to fallback extraction
		}
	}

	const firstBrace = stripped.indexOf('{');
	const lastBrace = stripped.lastIndexOf('}');
	if (firstBrace !== -1 && lastBrace > firstBrace) {
		const candidate = stripped.slice(firstBrace, lastBrace + 1);
		try {
			return JSON.parse(candidate);
		} catch {
			// continue to error
		}
	}

	throw new JsonExtractError('No se pudo extraer JSON válido de la respuesta del modelo');
}

export async function tryParseJson<T>(raw: string): Promise<T> {
	return extractJson(raw) as T;
}
