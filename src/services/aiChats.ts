import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	limit,
	onSnapshot,
	orderBy,
	query,
	Timestamp,
	type Unsubscribe,
	writeBatch,
} from 'firebase/firestore';
import type { ChatMessageParam } from './streamChat';

export interface ChatMessage {
	role: 'user' | 'assistant';
	content: string;
	createdAt?: Timestamp;
}

export interface StoredChat {
	id: string;
	uid: string;
	title: string;
	messages: ChatMessage[];
	createdAt: Timestamp;
	updatedAt: Timestamp;
	messageCount: number;
}

const db = getFirestore();

function chatsCollection(uid: string) {
	return collection(db, 'users', uid, 'aiChats');
}

export function chatDoc(uid: string, chatId: string) {
	return doc(db, 'users', uid, 'aiChats', chatId);
}

export function deriveTitle(messages: ChatMessageParam[]): string {
	const firstUser = messages.find((m) => m.role === 'user');
	const raw = (firstUser?.content ?? '').trim();
	const clean = raw.replace(/[#*_`>]/g, '').replace(/\s+/g, ' ').trim();
	return clean.length > 42 ? `${clean.slice(0, 42).trimEnd()}…` : clean || 'Chat';
}

export async function listChats(uid: string): Promise<StoredChat[]> {
	const snap = await getDocs(query(chatsCollection(uid), orderBy('updatedAt', 'desc'), limit(100)));
	return snap.docs.map((d) => {
		const data = d.data();
		const messages = Array.isArray(data.messages) ? (data.messages as ChatMessage[]) : [];
		return {
			id: d.id,
			uid,
			title: (data.title as string) || 'Chat',
			messages,
			createdAt: data.createdAt as Timestamp,
			updatedAt: data.updatedAt as Timestamp,
			messageCount: messages.length,
		};
	});
}

export function subscribeChats(uid: string, onData: (chats: StoredChat[]) => void, onError: (message: string) => void): Unsubscribe {
	const q = query(chatsCollection(uid), orderBy('updatedAt', 'desc'), limit(100));
	return onSnapshot(
		q,
		(snap) => {
			const items = snap.docs.map((d) => {
				const data = d.data();
				const messages = Array.isArray(data.messages) ? (data.messages as ChatMessage[]) : [];
				return {
					id: d.id,
					uid,
					title: (data.title as string) || 'Chat',
					messages,
					createdAt: data.createdAt as Timestamp,
					updatedAt: data.updatedAt as Timestamp,
					messageCount: messages.length,
				};
			});
			onData(items);
		},
		(error) => {
			console.error('subscribeChats error', error);
			onError('No se pudieron cargar tus chats. Intenta de nuevo.');
		}
	);
}

export async function getChat(uid: string, chatId: string): Promise<StoredChat | null> {
	const snap = await getDoc(chatDoc(uid, chatId));
	if (!snap.exists()) return null;
	const data = snap.data();
	const messages = Array.isArray(data.messages) ? (data.messages as ChatMessage[]) : [];
	return {
		id: snap.id,
		uid,
		title: (data.title as string) || 'Chat',
		messages,
		createdAt: data.createdAt as Timestamp,
		updatedAt: data.updatedAt as Timestamp,
		messageCount: messages.length,
	};
}

function sanitizeMessages(messages: ChatMessageParam[]): ChatMessage[] {
	return messages
		.filter((m) => (m.content ?? '').trim().length > 0 && (m.role === 'user' || m.role === 'assistant'))
		.map((m) => ({
			role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
			content: m.content,
		}));
}

export async function createChat(uid: string, messages: ChatMessageParam[]): Promise<string> {
	const sanitized = sanitizeMessages(messages);
	const now = Timestamp.now();
	const ref = doc(chatsCollection(uid));

	const batch = writeBatch(db);
	batch.set(ref, {
		title: deriveTitle(sanitized),
		messages: sanitized,
		createdAt: now,
		updatedAt: now,
	});
	await batch.commit();

	return ref.id;
}

export async function saveChat(uid: string, chatId: string, messages: ChatMessageParam[]): Promise<void> {
	const sanitized = sanitizeMessages(messages);
	if (sanitized.length === 0) return;

	const now = Timestamp.now();
	const batch = writeBatch(db);
	batch.set(
		chatDoc(uid, chatId),
		{
			title: deriveTitle(sanitized),
			messages: sanitized,
			updatedAt: now,
		},
		{ merge: true }
	);
	await batch.commit();
}

export async function deleteChat(uid: string, chatId: string): Promise<void> {
	await deleteDoc(chatDoc(uid, chatId));
}

export function messageListToParams(messages: ChatMessage[]): ChatMessageParam[] {
	return messages.map((m) => ({ role: m.role, content: m.content }));
}
