import { z } from 'zod';

export const SCHEMA_VERSION = 1 as const;

export const EXAM_DIFFICULTY_COUNTS = {
	facil: 8,
	media: 12,
	dificil: 16,
} as const;

export type DifficultyId = keyof typeof EXAM_DIFFICULTY_COUNTS;

export const EXAM_DIFFICULTIES: ReadonlyArray<{
	id: DifficultyId;
	label: string;
	questionCount: number;
	description: string;
}> = [
	{
		id: 'facil',
		label: 'Fácil',
		questionCount: EXAM_DIFFICULTY_COUNTS.facil,
		description: '8 preguntas',
	},
	{
		id: 'media',
		label: 'Media',
		questionCount: EXAM_DIFFICULTY_COUNTS.media,
		description: '12 preguntas',
	},
	{
		id: 'dificil',
		label: 'Difícil',
		questionCount: EXAM_DIFFICULTY_COUNTS.dificil,
		description: '16 preguntas',
	},
];

export const examQuestionSchema = z
	.object({
		question: z.string().trim().min(5).max(1000),
		options: z.array(z.string().trim().min(1).max(500)).length(4),
		correctAnswer: z.number().int().min(0).max(3),
		explanation: z.string().trim().min(1).max(5000).optional(),
	})
	.strict();

export const examObjectSchema = z
	.object({
		schemaVersion: z.literal(SCHEMA_VERSION),
		title: z.string().trim().min(3).max(120),
		topic: z.string().trim().min(3).max(200),
		difficulty: z.enum(['facil', 'media', 'dificil']),
		questions: z.array(examQuestionSchema),
	})
	.strict();

export const ExamenSchema = examObjectSchema.superRefine((exam, ctx) => {
		const expected = EXAM_DIFFICULTY_COUNTS[exam.difficulty];
		if (exam.questions.length !== expected) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['questions'],
				message: `"questions" debe tener exactamente ${expected} preguntas para dificultad "${exam.difficulty}"`,
			});
		}
	});

export type Examen = z.infer<typeof ExamenSchema>;
export type ExamenQuestion = z.infer<typeof examQuestionSchema>;

export type ExamenParseResult =
	| { success: true; data: Examen }
	| { success: false; error: z.ZodError };

export function parseExamen(data: unknown): ExamenParseResult {
	return ExamenSchema.safeParse(data);
}

export function isExamen(data: unknown): data is Examen {
	return ExamenSchema.safeParse(data).success;
}
