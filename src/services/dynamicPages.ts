import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	Timestamp,
	where,
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
	parentId: string | null;
	parentTitle: string;
	originSectionTitle: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}

export interface DynamicPageSaveMeta {
	parentId?: string | null;
	parentTitle?: string;
	originSectionTitle?: string;
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

function mapStoredPage(id: string, uid: string, data: Record<string, unknown>): StoredDynamicPage {
	return {
		id,
		uid,
		schemaVersion: data.schemaVersion as number,
		data: data.data as DynamicPage,
		status: data.status as 'valid',
		topic: data.topic as string,
		parentId: typeof data.parentId === 'string' ? data.parentId : null,
		parentTitle: typeof data.parentTitle === 'string' ? data.parentTitle : '',
		originSectionTitle: typeof data.originSectionTitle === 'string' ? data.originSectionTitle : '',
		createdAt: data.createdAt as Timestamp,
		updatedAt: data.updatedAt as Timestamp,
	};
}

export async function listDynamicPages(uid: string): Promise<StoredDynamicPage[]> {
	const snap = await getDocs(query(dynamicPagesCollection(uid), orderBy('updatedAt', 'desc')));
	return snap.docs.map((d) => mapStoredPage(d.id, uid, d.data() as Record<string, unknown>));
}

export async function listChildPages(uid: string, parentId: string): Promise<StoredDynamicPage[]> {
	const snap = await getDocs(query(dynamicPagesCollection(uid), where('parentId', '==', parentId)));
	return snap.docs.map((d) => mapStoredPage(d.id, uid, d.data() as Record<string, unknown>));
}

export async function getDynamicPage(uid: string, pageId: string): Promise<StoredDynamicPage | null> {
	const snap = await getDoc(dynamicPageDoc(uid, pageId));
	if (!snap.exists()) {
		return null;
	}
	return mapStoredPage(snap.id, uid, snap.data() as Record<string, unknown>);
}

export async function saveDynamicPage(
	uid: string,
	page: unknown,
	topic: string,
	meta: DynamicPageSaveMeta = {}
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
		parentId: meta.parentId ?? null,
		parentTitle: meta.parentTitle ?? '',
		originSectionTitle: meta.originSectionTitle ?? '',
		createdAt: now,
		updatedAt: now,
	});
	await batch.commit();

	return ref.id;
}

export async function deleteDynamicPage(uid: string, pageId: string): Promise<void> {
	await deleteDoc(dynamicPageDoc(uid, pageId));
}

export async function deleteDynamicPageTree(uid: string, pageId: string): Promise<void> {
	const children = await listChildPages(uid, pageId);
	for (const child of children) {
		await deleteDynamicPageTree(uid, child.id);
	}
	await deleteDynamicPage(uid, pageId);
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
