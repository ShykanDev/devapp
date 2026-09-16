import { describe, it, expect } from 'vitest';
import { DynamicPageSchema } from '../src/schema/dynamicPage';

const validPage = {
	schemaVersion: 1,
	title: 'Complejidad algorítmica',
	description:
		'Aprende qué es la notación Big-O, por qué importa al optimizar y cómo analizar el costo de tus algoritmos.',
	sections: [
		{
			title: '¿Qué es la complejidad?',
			content:
				'La complejidad describe cómo crece el tiempo o la memoria de un algoritmo a medida que crece la entrada.',
			subsections: [
				{
					title: 'Crecimiento asintótico',
					content: 'Nos interesa el comportamiento cuando el tamaño de la entrada tiende a infinito.',
				},
			],
		},
	],
	informativeSection: {
		title: 'Dato importante',
		content:
			'Dos algoritmos con la misma tarea pueden diferir muchísimo en rendimiento; la notación Big-O te ayuda a compararlos.',
	},
	moreInformation: {
		title: 'Errores comunes y buenas prácticas',
		content:
			'No optimices antes de medir. Identifica primero el cuello de botella real y elige la estructura de datos adecuada.',
	},
	flashcards: [
		{
			question: '¿Qué mide la notación O(n)?',
			answer: 'Que el tiempo de ejecución crece de forma lineal con el tamaño de la entrada.',
		},
		{
			question: '¿Cuál es la complejidad de una búsqueda binaria?',
			answer: 'O(log n), porque divide el espacio de búsqueda a la mitad en cada paso.',
		},
		{
			question: '¿Por qué importa la complejidad espacial?',
			answer: 'Porque un algoritmo puede ser rápido pero consumir demasiada memoria.',
		},
	],
	exam: {
		questions: [
			{
				question: '¿Cuál de estas complejidades crece más rápido?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
				correctAnswer: 3,
				explanation: 'O(n^2) escala peor que las demás al aumentar la entrada.',
			},
			{
				question: '¿Qué estructura es ideal para búsquedas promedio O(1)?',
				options: ['Tabla hash', 'Lista enlazada', 'Arreglo', 'Árbol binario'],
				correctAnswer: 0,
			},
			{
				question: '¿Qué complejidad tiene acceder a un elemento por índice en un arreglo?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 0,
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
	title: '   Recursividad   ',
	sections: [
		...validPage.sections,
		{
			title: 'Casos base',
			content: 'Toda función recursiva necesita un caso base y un paso que se acerque a él.',
			subsections: [
				{
					title: 'Caso base',
					content: 'Es la condición que detiene la recursión.',
				},
				{
					title: 'Paso recursivo',
					content: 'La función se llama a sí misma con una entrada más pequeña.',
				},
			],
		},
	],
};

describe('worker dynamicPage schema conformance', () => {
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

	it('defaults missing suggestions to an empty array', () => {
		const result = DynamicPageSchema.safeParse(validPage);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.sections[0].suggestions).toEqual([]);
		}
	});

	it('accepts a section with exactly 5 suggestions', () => {
		const withSuggestions = {
			...validPage,
			sections: [
				{
					...validPage.sections[0],
					suggestions: ['Notación Big-O', 'Complejidad temporal', 'Complejidad espacial', 'Análisis amortizado', 'Peor caso'],
				},
			],
		};
		const result = DynamicPageSchema.safeParse(withSuggestions);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.sections[0].suggestions).toHaveLength(5);
		}
	});

	it('rejects more than 5 suggestions in a section', () => {
		const broken = {
			...validPage,
			sections: [
				{
					...validPage.sections[0],
					suggestions: ['Sub 01', 'Sub 02', 'Sub 03', 'Sub 04', 'Sub 05', 'Sub 06'],
				},
			],
		};
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects non-array suggestions', () => {
		const broken = {
			...validPage,
			sections: [
				{
					...validPage.sections[0],
					suggestions: 'no soy un arreglo',
				},
			],
		};
		expect(DynamicPageSchema.safeParse(broken).success).toBe(false);
	});

	it('trims strings and accepts extra valid subsections', () => {
		const result = DynamicPageSchema.safeParse(validWithReviewSubsections);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.title).toBe('Recursividad');
			expect(result.data.sections).toHaveLength(2);
		}
	});

	it('rejects missing required fields', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { flashcards, ...rest } = validPage;
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
