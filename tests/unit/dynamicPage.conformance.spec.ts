import { describe, it, expect } from 'vitest';
import { DynamicPageSchema } from '@/schemas/dynamicPage';

const validPage = {
	schemaVersion: 1,
	title: 'Hipertensión arterial',
	description:
		'Aprende qué es la presión arterial alta, por qué importa controlarla y cómo convivir con ella de forma segura.',
	sections: [
		{
			title: '¿Qué es la hipertensión?',
			content:
				'La hipertensión arterial es la elevación sostenida de la presión que ejerce la sangre contra las paredes de las arterias.',
			subsections: [
				{
					title: 'Los dos números',
					content: 'El sistólico es la presión al latir y el diastólico es la presión entre latidos.',
				},
			],
		},
	],
	informativeSection: {
		title: 'Dato importante',
		content:
			'La hipertensión suele ser asintomática, por eso se le llama el asesino silencioso: revisa tu presión al menos una vez al año.',
	},
	moreInformation: {
		title: 'Cuándo acudir al médico',
		content:
			'Si tu presión está por encima de 180/120 o tienes dolor de pecho, dificultad para respirar o visión borrosa, acude a urgencias.',
	},
	flashcards: [
		{
			question: '¿Qué significa 120/80?',
			answer: '120 es la presión sistólica y 80 la diastólica, ambos en mmHg.',
		},
		{
			question: '¿Cuándo se considera hipertensión?',
			answer: 'Cuando la presión se mantiene en 130/80 o más en varias mediciones.',
		},
		{
			question: '¿La hipertensión siempre da síntomas?',
			answer: 'No, casi nunca da síntomas; por eso hay que medirla seguido.',
		},
	],
	exam: {
		questions: [
			{
				question: '¿Cuál de estos valores se considera una crisis hipertensiva?',
				options: ['120/80', '130/80', '160/100', '180/120'],
				correctAnswer: 3,
				explanation: 'Presiones de 180/120 o mayores requieren atención de urgencia.',
			},
			{
				question: '¿Cuál es una medida clave para controlar la presión?',
				options: ['Reducir el sodio', 'Fumar más', 'Evitar el ejercicio', 'Saltarse los medicamentos'],
				correctAnswer: 0,
			},
			{
				question: '¿Cómo se llama la presión cuando el corazón se relaja?',
				options: ['Sistólica', 'Diastólica', 'Media', 'Pulso'],
				correctAnswer: 1,
			},
		],
	},
};

const validWithoutSubsections = {
	...validPage,
	sections: [
		{
			title: 'Solo una sección simple',
			content: 'Contenido mínimo sin subsections.',
		},
	],
};

const validWithReviewSubsections = {
	...validPage,
	title: '   Diabetes tipo 2   ',
	sections: [
		...validPage.sections,
		{
			title: 'Tratamiento',
			content: 'El tratamiento combina alimentación, ejercicio y, si se requiere, medicamentos.',
			subsections: [
				{
					title: 'Alimentación',
					content: 'Prefiere alimentos con bajo índice glucémico.',
				},
				{
					title: 'Ejercicio',
					content: 'Al menos 150 minutos de actividad moderada a la semana.',
				},
			],
		},
	],
};

describe('frontend dynamicPage schema conformance', () => {
	it('accepts a fully valid page', () => {
		const result = DynamicPageSchema.safeParse(validPage);
		expect(result.success).toBe(true);
	});

	it('defaults missing subsections to empty arrays', () => {
		const result = DynamicPageSchema.safeParse(validWithoutSubsections);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.sections[0].subsections).toEqual([]);
		}
	});

	it('trims strings and accepts extra valid subsections', () => {
		const result = DynamicPageSchema.safeParse(validWithReviewSubsections);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.title).toBe('Diabetes tipo 2');
			expect(result.data.sections).toHaveLength(2);
		}
	});

	it('rejects missing required fields', () => {
		const rest = { ...validPage };
		Reflect.deleteProperty(rest, 'flashcards');
		expect(DynamicPageSchema.safeParse(rest).success).toBe(false);
	});

	it('rejects empty sections array', () => {
		const broken = { ...validPage, sections: [] };
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects fewer than 3 flashcards', () => {
		const broken = { ...validPage, flashcards: validPage.flashcards.slice(0, 2) };
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects fewer than 3 exam questions', () => {
		const broken = { ...validPage, exam: { questions: validPage.exam.questions.slice(0, 2) } };
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects wrong schemaVersion', () => {
		const broken = { ...validPage, schemaVersion: 2 };
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects extra properties on the root object', () => {
		const broken = { ...validPage, extraField: 'x' };
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects extra properties on nested objects', () => {
		const broken = {
			...validPage,
			sections: [{ ...validPage.sections[0], otraPropiedad: true }],
		};
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects options without exactly 4 entries', () => {
		const broken = {
			...validPage,
			exam: {
				questions: [
					{ ...validPage.exam.questions[0], options: ['a', 'b', 'c'] },
					validPage.exam.questions[1],
					validPage.exam.questions[2],
				],
			},
		};
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects out-of-range correctAnswer', () => {
		const broken = {
			...validPage,
			exam: {
				questions: [
					{ ...validPage.exam.questions[0], correctAnswer: 4 },
					validPage.exam.questions[1],
					validPage.exam.questions[2],
				],
			},
		};
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects short titles and descriptions', () => {
		expect(DynamicPageSchema.safeParse({ ...validPage, title: 'Hi' }).success).toBe(false);
		expect(DynamicPageSchema.safeParse({ ...validPage, description: 'muy corta' }).success).toBe(false);
	});
});
