import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	Timestamp,
	writeBatch,
	orderBy,
} from 'firebase/firestore';
import { parseDynamicPage, SCHEMA_VERSION, type DynamicPage } from '../schemas/dynamicPage';

export interface StoredDynamicPage {
	id: string;
	uid: string;
	schemaVersion: number;
	data: DynamicPage;
	status: 'valid';
	topic: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}

export class DynamicPageValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'DynamicPageValidationError';
	}
}

const db = getFirestore();

function dynamicPagesCollection(uid: string) {
	return collection(db, 'users', uid, 'dynamicPages');
}

export function dynamicPageDoc(uid: string, pageId: string) {
	return doc(db, 'users', uid, 'dynamicPages', pageId);
}

export async function listDynamicPages(uid: string): Promise<StoredDynamicPage[]> {
	const snap = await getDocs(query(dynamicPagesCollection(uid), orderBy('updatedAt', 'desc')));
	return snap.docs.map((d) => {
		const data = d.data();
		return {
			id: d.id,
			uid,
			schemaVersion: data.schemaVersion as number,
			data: data.data as DynamicPage,
			status: data.status as 'valid',
			topic: data.topic as string,
			createdAt: data.createdAt as Timestamp,
			updatedAt: data.updatedAt as Timestamp,
		};
	});
}

export async function getDynamicPage(uid: string, pageId: string): Promise<StoredDynamicPage | null> {
	const snap = await getDoc(dynamicPageDoc(uid, pageId));
	if (!snap.exists()) {
		return null;
	}
	const data = snap.data();
	return {
		id: snap.id,
		uid,
		schemaVersion: data.schemaVersion as number,
		data: data.data as DynamicPage,
		status: data.status as 'valid',
		topic: data.topic as string,
		createdAt: data.createdAt as Timestamp,
		updatedAt: data.updatedAt as Timestamp,
	};
}

export async function saveDynamicPage(
	uid: string,
	page: unknown,
	topic: string
): Promise<string> {
	const parsed = parseDynamicPage(page);
	if (!parsed.success) {
		throw new DynamicPageValidationError('La página no pasó la validación local y no fue guardada.');
	}

	const now = Timestamp.now();
	const ref = doc(dynamicPagesCollection(uid));

	const batch = writeBatch(db);
	batch.set(ref, {
		data: parsed.data,
		schemaVersion: SCHEMA_VERSION,
		topic,
		status: 'valid',
		createdAt: now,
		updatedAt: now,
	});
	await batch.commit();

	return ref.id;
}

export async function deleteDynamicPage(uid: string, pageId: string): Promise<void> {
	await deleteDoc(dynamicPageDoc(uid, pageId));
}

export async function updateDynamicPage(uid: string, pageId: string, page: DynamicPage): Promise<void> {
	const parsed = parseDynamicPage(page);
	if (!parsed.success) {
		throw new DynamicPageValidationError('La página editada no pasó la validación local y no fue guardada.');
	}

	const now = Timestamp.now();
	const ref = dynamicPageDoc(uid, pageId);

	const batch = writeBatch(db);
	batch.update(ref, {
		data: parsed.data,
		updatedAt: now,
	});
	await batch.commit();
}
