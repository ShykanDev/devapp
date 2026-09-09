import { z } from 'zod';

export const SCHEMA_VERSION = 1 as const;

const subsectionSchema = z
	.object({
		title: z.string().trim().min(1).max(200),
		content: z.string().trim().min(1).max(20000),
	})
	.strict();

const sectionSchema = z
	.object({
		title: z.string().trim().min(3).max(120),
		content: z.string().trim().min(1).max(20000),
		subsections: z.array(subsectionSchema).optional().default([]),
	})
	.strict();

const informativeSectionSchema = z
	.object({
		title: z.string().trim().min(3).max(200),
		content: z.string().trim().min(10).max(20000),
	})
	.strict();

const moreInformationSchema = z
	.object({
		title: z.string().trim().min(3).max(200),
		content: z.string().trim().min(10).max(20000),
	})
	.strict();

const flashcardSchema = z
	.object({
		question: z.string().trim().min(3).max(500),
		answer: z.string().trim().min(3).max(20000),
	})
	.strict();

const examQuestionSchema = z
	.object({
		question: z.string().trim().min(5).max(1000),
		options: z.array(z.string().trim().min(1).max(500)).length(4),
		correctAnswer: z.number().int().min(0).max(3),
		explanation: z.string().trim().min(1).max(5000).optional(),
	})
	.strict();

export const DynamicPageSchema = z
	.object({
		schemaVersion: z.literal(SCHEMA_VERSION),
		title: z.string().trim().min(3).max(120),
		description: z.string().trim().min(10).max(500),
		sections: z.array(sectionSchema).min(1).max(50),
		informativeSection: informativeSectionSchema,
		moreInformation: moreInformationSchema,
		flashcards: z.array(flashcardSchema).min(3).max(50),
		exam: z
			.object({
				questions: z.array(examQuestionSchema).min(3).max(30),
			})
			.strict(),
	})
	.strict();

export type DynamicPage = z.infer<typeof DynamicPageSchema>;
export type DynamicPageSection = z.infer<typeof sectionSchema>;
export type DynamicPageSubsection = z.infer<typeof subsectionSchema>;
export type DynamicPageFlashcard = z.infer<typeof flashcardSchema>;
export type DynamicPageExamQuestion = z.infer<typeof examQuestionSchema>;

export interface DynamicPageIssue {
	path: string;
	message: string;
}

export function formatZodIssues(error: z.ZodError): DynamicPageIssue[] {
	return error.issues.map((issue) => ({
		path: issue.path.length > 0 ? issue.path.join('.') : '(root)',
		message: issue.message,
	}));
}
