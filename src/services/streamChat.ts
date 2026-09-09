export interface ChatMessageParam {
	role: string;
	content: string;
}

export interface StreamChatHandlers {
	onDelta: (delta: string) => void;
	onCreatePage?: (topic: string) => void;
	onError?: (message: string) => void;
	onDone?: () => void;
	signal?: AbortSignal;
}

const CHAT_URL = 'https://ai-worker-inference.shykandev.workers.dev/chat';

interface StreamPayload {
	delta?: string;
	done?: boolean;
	error?: string;
	intent?: string;
	topic?: string;
	answer?: string | null;
}

export async function streamChat(
	messages: ChatMessageParam[],
	handlers: StreamChatHandlers
): Promise<void> {
	let res: Response;
	try {
		res = await fetch(CHAT_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ messages, stream: true }),
			signal: handlers.signal,
		});
	} catch (error) {
		handlers.onError?.(error instanceof Error ? error.message : String(error));
		return;
	}

	if (!res.ok) {
		let message = `Error ${res.status}`;
		try {
			const data = (await res.json()) as { error?: string };
			if (typeof data.error === 'string' && data.error.trim()) {
				message = data.error;
			}
		} catch {
			// keep status-based message
		}
		handlers.onError?.(message);
		return;
	}

	const contentType = res.headers.get('content-type') ?? '';
	const isEventStream = contentType.toLowerCase().includes('text/event-stream');

	if (!isEventStream) {
		let data: StreamPayload;
		try {
			data = (await res.json()) as StreamPayload;
		} catch (error) {
			handlers.onError?.(error instanceof Error ? error.message : String(error));
			return;
		}
		if (data.intent === 'create_page' && typeof data.topic === 'string' && data.topic.trim()) {
			handlers.onCreatePage?.(data.topic);
			return;
		}
		if (typeof data.answer === 'string' && data.answer) {
			handlers.onDelta(data.answer);
		} else if (typeof data.error === 'string') {
			handlers.onError?.(data.error);
		}
		handlers.onDone?.();
		return;
	}

	const reader = res.body?.getReader();
	if (!reader) {
		handlers.onError?.('No se pudo leer la respuesta del asistente.');
		return;
	}

	const decoder = new TextDecoder();
	let buffer = '';

	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;

			buffer += decoder.decode(value, { stream: true });

			let boundary = buffer.indexOf('\n\n');
			while (boundary !== -1) {
				const rawEvent = buffer.slice(0, boundary);
				buffer = buffer.slice(boundary + 2);

				const dataLine = rawEvent.split('\n').find((l) => l.startsWith('data: '));
				if (dataLine) {
					let payload: StreamPayload;
					try {
						payload = JSON.parse(dataLine.slice(6)) as StreamPayload;
					} catch {
						boundary = buffer.indexOf('\n\n');
						continue;
					}

					if (typeof payload.delta === 'string' && payload.delta) {
						handlers.onDelta(payload.delta);
					} else if (typeof payload.error === 'string' && payload.error) {
						handlers.onError?.(payload.error);
					}
				}

				boundary = buffer.indexOf('\n\n');
			}
		}

		handlers.onDone?.();
	} catch (error) {
		if (error instanceof DOMException && error.name === 'AbortError') {
			return;
		}
		handlers.onError?.(error instanceof Error ? error.message : String(error));
	}
}
