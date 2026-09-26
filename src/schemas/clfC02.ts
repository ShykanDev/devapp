import { z } from 'zod';

/**
 * Esquema propio de CLF-C02. No se reutiliza `@/schemas/examen` porque es
 * compartido con AIF-C01 y su modelo es de 4 opciones / 1 correcta. Aquí se
 * admite el formato oficial de respuesta múltiple (5 opciones / 2+ correctas)
 * y el razonamiento por opción.
 */
export const clfC02QuestionSchema = z
	.object({
		id: z.string().min(1),
		taskId: z.string().regex(/^\d\.\d$/),
		objetivos: z.array(z.string().regex(/^\d\.\d#\d+$/)).min(1),
		question: z.string().trim().min(5).max(1000),
		options: z.array(z.string().trim().min(1).max(500)).min(4),
		explanation: z.string().trim().min(1).max(5000),
		formato: z.enum(['single', 'multiple']).optional(),
		correctAnswer: z.number().int().min(0),
		correctAnswers: z.array(z.number().int().min(0)).optional(),
		porQueOpcion: z.array(z.string().trim().min(1).max(1000)).optional(),
		fuentes: z.array(z.string().url()).min(1),
	})
	.superRefine((pregunta, ctx) => {
		const multiple = pregunta.formato === 'multiple';
		const opcionesEsperadas = multiple ? 5 : 4;
		if (pregunta.options.length !== opcionesEsperadas) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['options'],
				message: `formato ${pregunta.formato ?? 'single'} exige ${opcionesEsperadas} opciones; hay ${pregunta.options.length}.`,
			});
		}
		if (multiple) {
			const correctas = pregunta.correctAnswers ?? [];
			if (correctas.length < 2) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: ['correctAnswers'],
					message: 'La respuesta múltiple necesita al menos 2 índices correctos.',
				});
			}
			for (const indice of correctas) {
				if (indice >= pregunta.options.length) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						path: ['correctAnswers'],
						message: `Índice correcto fuera de rango: ${indice}.`,
					});
				}
			}
			if (!correctas.includes(pregunta.correctAnswer)) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: ['correctAnswer'],
					message: 'correctAnswer debe ser uno de los índices de correctAnswers.',
				});
			}
		} else if (pregunta.correctAnswer >= pregunta.options.length) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['correctAnswer'],
				message: `correctAnswer fuera de rango: ${pregunta.correctAnswer}.`,
			});
		}
		if (pregunta.porQueOpcion && pregunta.porQueOpcion.length !== pregunta.options.length) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['porQueOpcion'],
				message: `porQueOpcion debe tener ${pregunta.options.length} entradas.`,
			});
		}
		for (const url of pregunta.fuentes ?? []) {
			if (
				!url.startsWith('https://docs.aws.amazon.com/') &&
				!url.startsWith('https://aws.amazon.com/')
			) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: ['fuentes'],
					message: `Fuente no oficial: ${url}.`,
				});
			}
		}
	});
