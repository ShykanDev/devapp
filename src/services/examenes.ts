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
import {
	parseExamen,
	SCHEMA_VERSION,
	type DifficultyId,
	type Examen,
} from '../schemas/examen';

export interface StoredExamen {
	id: string;
	uid: string;
	schemaVersion: number;
	data: Examen;
	difficulty: DifficultyId;
	status: 'valid';
	topic: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}

export class ExamenValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'ExamenValidationError';
	}
}

const db = getFirestore();

function examenesCollection(uid: string) {
	return collection(db, 'users', uid, 'examenes');
}

export function examenDoc(uid: string, examId: string) {
	return doc(db, 'users', uid, 'examenes', examId);
}

function validId(id: string | undefined): id is string {
	return typeof id === 'string' && id.length > 0 && !id.includes('/');
}

function requireValidPath(uid: string, examId?: string) {
	if (!validId(uid)) {
		throw new ExamenValidationError('El identificador de usuario no es válido.');
	}
	if (examId !== undefined && !validId(examId)) {
		throw new ExamenValidationError('El identificador del examen no es válido.');
	}
}

export async function listExamenes(uid: string): Promise<StoredExamen[]> {
	requireValidPath(uid);
	const snap = await getDocs(query(examenesCollection(uid), orderBy('updatedAt', 'desc')));
	return snap.docs.map((d) => {
		const data = d.data();
		return {
			id: d.id,
			uid,
			schemaVersion: data.schemaVersion as number,
			data: data.data as Examen,
			difficulty: data.difficulty as DifficultyId,
			status: data.status as 'valid',
			topic: data.topic as string,
			createdAt: data.createdAt as Timestamp,
			updatedAt: data.updatedAt as Timestamp,
		};
	});
}

export async function getExamen(uid: string, examId: string): Promise<StoredExamen | null> {
	requireValidPath(uid, examId);
	const snap = await getDoc(examenDoc(uid, examId));
	if (!snap.exists()) {
		return null;
	}
	const data = snap.data();
	return {
		id: snap.id,
		uid,
		schemaVersion: data.schemaVersion as number,
		data: data.data as Examen,
		difficulty: data.difficulty as DifficultyId,
		status: data.status as 'valid',
		topic: data.topic as string,
		createdAt: data.createdAt as Timestamp,
		updatedAt: data.updatedAt as Timestamp,
	};
}

export async function saveExamen(uid: string, exam: Examen, topic: string): Promise<string> {
	requireValidPath(uid);
	const parsed = parseExamen(exam);
	if (!parsed.success) {
		throw new ExamenValidationError('El examen no pasó la validación local y no fue guardado.');
	}

	const now = Timestamp.now();
	const ref = doc(examenesCollection(uid));

	const batch = writeBatch(db);
	batch.set(ref, {
		data: parsed.data,
		schemaVersion: SCHEMA_VERSION,
		topic,
		difficulty: parsed.data.difficulty,
		status: 'valid',
		createdAt: now,
		updatedAt: now,
	});
	await batch.commit();

	return ref.id;
}

export async function deleteExamen(uid: string, examId: string): Promise<void> {
	requireValidPath(uid, examId);
	await deleteDoc(examenDoc(uid, examId));
}

export async function updateExamen(uid: string, examId: string, exam: Examen): Promise<void> {
	requireValidPath(uid, examId);
	const parsed = parseExamen(exam);
	if (!parsed.success) {
		throw new ExamenValidationError('El examen regenerado no pasó la validación local y no fue guardado.');
	}

	const now = Timestamp.now();
	const ref = examenDoc(uid, examId);

	const batch = writeBatch(db);
	batch.update(ref, {
		data: parsed.data,
		updatedAt: now,
	});
	await batch.commit();
}
