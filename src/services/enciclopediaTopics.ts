import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	Timestamp,
	writeBatch,
} from 'firebase/firestore';
import type { TemaEnciclopedia } from '../data/enciclopedia';

export type EnciclopediaTopicSource = 'preset' | 'custom';

export interface StoredEnciclopediaTema extends TemaEnciclopedia {
	id: string;
	nombre: string;
	descripcion: string;
	categoriaId: string;
	pregunta: string;
	source: EnciclopediaTopicSource;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}

const db = getFirestore();

function collectionRef(uid: string) {
	return collection(db, 'users', uid, 'enciclopediaTemas');
}

export function docRef(uid: string, topicId: string) {
	return doc(db, 'users', uid, 'enciclopediaTemas', topicId);
}

export async function listEnciclopediaTemas(uid: string): Promise<StoredEnciclopediaTema[]> {
	const snap = await getDocs(collectionRef(uid));
	const items = snap.docs.map((d) => {
		const data = d.data();
		return {
			id: d.id,
			nombre: (data.nombre as string) ?? '',
			descripcion: (data.descripcion as string) ?? '',
			categoriaId: (data.categoriaId as string) ?? '',
			pregunta: (data.pregunta as string) ?? '',
			source: ((data.source as string) ?? 'custom') as EnciclopediaTopicSource,
			createdAt: data.createdAt as Timestamp,
			updatedAt: data.updatedAt as Timestamp,
		};
	});
	return items.filter(
		(t) => t.nombre.trim() && t.categoriaId.trim() && t.pregunta.trim()
	);
}

export async function getEnciclopediaTema(uid: string, topicId: string): Promise<StoredEnciclopediaTema | null> {
	const snap = await getDoc(docRef(uid, topicId));
	if (!snap.exists()) return null;
	const data = snap.data();
	return {
		id: snap.id,
		nombre: (data.nombre as string) ?? '',
		descripcion: (data.descripcion as string) ?? '',
		categoriaId: (data.categoriaId as string) ?? '',
		pregunta: (data.pregunta as string) ?? '',
		source: ((data.source as string) ?? 'custom') as EnciclopediaTopicSource,
		createdAt: data.createdAt as Timestamp,
		updatedAt: data.updatedAt as Timestamp,
	};
}

export async function saveEnciclopediaTema(
	uid: string,
	input: { nombre: string; descripcion: string; categoriaId: string; pregunta: string }
): Promise<string> {
	const now = Timestamp.now();
	const ref = doc(collectionRef(uid));

	const batch = writeBatch(db);
	batch.set(ref, {
		nombre: input.nombre,
		descripcion: input.descripcion,
		categoriaId: input.categoriaId,
		pregunta: input.pregunta,
		source: 'custom',
		createdAt: now,
		updatedAt: now,
	});
	await batch.commit();

	return ref.id;
}

export async function deleteEnciclopediaTema(uid: string, topicId: string): Promise<void> {
	await deleteDoc(docRef(uid, topicId));
}
