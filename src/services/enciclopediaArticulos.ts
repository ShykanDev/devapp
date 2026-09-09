import {
	deleteDoc,
	doc,
	getDoc,
	getFirestore,
	Timestamp,
	writeBatch,
} from 'firebase/firestore';

const db = getFirestore();

export function articleDocRef(uid: string, topicId: string) {
	return doc(db, 'users', uid, 'enciclopediaArticulos', topicId);
}

export async function getEnciclopediaArticle(uid: string, topicId: string): Promise<string | null> {
	const snap = await getDoc(articleDocRef(uid, topicId));
	if (!snap.exists()) return null;
	const data = snap.data();
	const content = data.content as string | undefined;
	if (typeof content !== 'string' || !content.trim()) return null;
	return content;
}

export async function saveEnciclopediaArticle(
	uid: string,
	topicId: string,
	content: string
): Promise<void> {
	if (!content.trim()) return;
	const now = Timestamp.now();
	const ref = articleDocRef(uid, topicId);

	const batch = writeBatch(db);
	batch.set(
		ref,
		{
			content,
			updatedAt: now,
		},
		{ merge: true }
	);
	await batch.commit();
}

export async function deleteEnciclopediaArticle(uid: string, topicId: string): Promise<void> {
	await deleteDoc(articleDocRef(uid, topicId));
}
