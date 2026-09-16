import { describe, it, expect } from 'vitest';
import { ExamSchema, EXAM_DIFFICULTY_COUNTS } from '../src/schema/examen';
import type { DifficultyId, ExamQuestion } from '../src/schema/examen';

function makeQuestions(n: number): ExamQuestion[] {
	return Array.from({ length: n }, (_, i) => ({
		question: `Pregunta de opción múltiple número ${i + 1} sobre el tema de programación.`,
		options: ['Primera opción', 'Segunda opción', 'Tercera opción', 'Cuarta opción'],
		correctAnswer: (i + 1) % 4,
		explanation: 'La opción señalada es la correcta.',
	}));
}

function makeExam(difficulty: DifficultyId, questions: ExamQuestion[] = makeQuestions(EXAM_DIFFICULTY_COUNTS[difficulty])): Record<string, unknown> {
	return {
		schemaVersion: 1,
		title: `Examen: Recursividad`,
		topic: 'Recursividad',
		difficulty,
		questions,
	};
}

describe('worker examen schema conformance', () => {
	it('accepts a valid facil exam with exactly 8 questions', () => {
		const result = ExamSchema.safeParse(makeExam('facil'));
		expect(result.success).toBe(true);
	});

	it('accepts a valid media exam with exactly 12 questions', () => {
		const result = ExamSchema.safeParse(makeExam('media'));
		expect(result.success).toBe(true);
	});

	it('accepts a valid dificil exam with exactly 16 questions', () => {
		const result = ExamSchema.safeParse(makeExam('dificil'));
		expect(result.success).toBe(true);
	});

	it('rejects facil exam without exactly 8 questions', () => {
		expect(ExamSchema.safeParse(makeExam('facil', makeQuestions(7))).success).toBe(false);
		expect(ExamSchema.safeParse(makeExam('facil', makeQuestions(9))).success).toBe(false);
	});

	it('rejects media exam without exactly 12 questions', () => {
		expect(ExamSchema.safeParse(makeExam('media', makeQuestions(11))).success).toBe(false);
		expect(ExamSchema.safeParse(makeExam('media', makeQuestions(13))).success).toBe(false);
	});

	it('rejects dificil exam without exactly 16 questions', () => {
		expect(ExamSchema.safeParse(makeExam('dificil', makeQuestions(15))).success).toBe(false);
		expect(ExamSchema.safeParse(makeExam('dificil', makeQuestions(17))).success).toBe(false);
	});

	it('rejects questions with options different from 4', () => {
		const questions = makeQuestions(8);
		questions[0] = { ...questions[0], options: ['a', 'b', 'c'] };
		expect(ExamSchema.safeParse(makeExam('facil', questions)).success).toBe(false);
	});

	it('rejects out-of-range correctAnswer', () => {
		const questions = makeQuestions(8);
		questions[0] = { ...questions[0], correctAnswer: 4 };
		expect(ExamSchema.safeParse(makeExam('facil', questions)).success).toBe(false);
	});

	it('rejects invalid difficulty', () => {
		const exam = makeExam('facil');
		expect(ExamSchema.safeParse({ ...exam, difficulty: 'experto' }).success).toBe(false);
	});

	it('rejects extra properties on the root object', () => {
		expect(ExamSchema.safeParse({ ...makeExam('facil'), extraField: 'x' }).success).toBe(false);
	});

	it('rejects extra properties on question objects', () => {
		const questions = makeQuestions(8);
		questions[0] = { ...questions[0], extraField: true } as ExamQuestion;
		expect(ExamSchema.safeParse(makeExam('facil', questions)).success).toBe(false);
	});

	it('rejects wrong schemaVersion', () => {
		expect(ExamSchema.safeParse({ ...makeExam('facil'), schemaVersion: 2 }).success).toBe(false);
	});
});
