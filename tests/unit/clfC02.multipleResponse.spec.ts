import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import type { PreguntaClfC02 } from '@/data/clfC02/types';
import {
	crearAleatorioSemilla,
	esRespuestaCorrecta,
	esRespuestaParcial,
	permutarOpciones,
	puntuarIntento,
} from '@/lib/clfC02Practice';
import { clfC02QuestionSchema } from '@/schemas/clfC02';

const multipleSintetica: PreguntaClfC02 = {
	id: 'sintetica-multiple',
	taskId: '3.1',
	objetivos: ['3.1#1'],
	tipo: 'conocimiento',
	question: '¿Qué dos características describen el modelo de responsabilidad compartida? (Elige DOS)',
	options: [
		'AWS protege la infraestructura física subyacente.',
		'El cliente es responsable de la seguridad de todo el hardware.',
		'El cliente protege sus datos y sus accesos.',
		'AWS administra las contraseñas de los usuarios finales.',
		'AWS decide qué datos debe cifrar el cliente.',
	],
	formato: 'multiple',
	correctAnswer: 0,
	correctAnswers: [0, 2],
	explanation:
		'AWS protege la infraestructura; el cliente protege datos y accesos. Si cambia el requisito, otras capas cambian de responsable.',
	porQueOpcion: [
		'Correcta: la seguridad física de la nube es responsabilidad de AWS.',
		'Incorrecta: el hardware lo administra AWS, no el cliente.',
		'Correcta: datos, identidades y permisos son responsabilidad del cliente.',
		'Incorrecta: la gestión de contraseñas de usuarios finales no la asume AWS.',
		'Incorrecta: la clasificación y el cifrado de datos corresponden al cliente.',
	],
	fuentes: [
		'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
	],
};

describe('clfC02 · respuesta múltiple (formato oficial)', () => {
	it('puntúa solo el conjunto exacto', () => {
		expect(esRespuestaCorrecta(multipleSintetica, [0, 2])).toBe(true);
		expect(esRespuestaCorrecta(multipleSintetica, [2, 0])).toBe(true);
		expect(esRespuestaCorrecta(multipleSintetica, [0])).toBe(false);
		expect(esRespuestaCorrecta(multipleSintetica, [0, 1])).toBe(false);
	});

	it('falla al seleccionar todo o dejar vacío', () => {
		expect(esRespuestaCorrecta(multipleSintetica, [0, 1, 2, 3, 4])).toBe(false);
		expect(esRespuestaCorrecta(multipleSintetica, [])).toBe(false);
	});

	it('marca como parcial el subconjunto propio no vacío', () => {
		expect(esRespuestaParcial(multipleSintetica, [0])).toBe(true);
		expect(esRespuestaParcial(multipleSintetica, [0, 2])).toBe(false);
		expect(esRespuestaParcial(multipleSintetica, [0, 1])).toBe(false);
		expect(esRespuestaParcial(multipleSintetica, [])).toBe(false);
	});

	it('registra parciales sin sumar acierto en puntuarIntento', () => {
		const puntaje = puntuarIntento([multipleSintetica], {
			[multipleSintetica.id]: [0],
		});
		expect(puntaje.correctas).toBe(0);
		expect(puntaje.falladas).toEqual([multipleSintetica.id]);
		expect(puntaje.parciales).toEqual([multipleSintetica.id]);
	});

	it('baraja opciones remapeando correctAnswers y porQueOpcion', () => {
		const permutada = permutarOpciones(multipleSintetica, crearAleatorioSemilla(7));
		expect(permutada.options).toHaveLength(5);
		const textoCorrectas = (pregunta: PreguntaClfC02) =>
			(pregunta.correctAnswers ?? []).map((indice) => pregunta.options[indice]).sort();
		expect(textoCorrectas(permutada)).toEqual(textoCorrectas(multipleSintetica));
		const textosJustificados = permutada.porQueOpcion?.filter((_, indice) =>
			(permutada.correctAnswers ?? []).includes(indice),
		);
		expect(textosJustificados).toHaveLength(2);
	});

	it('valida el formato multiple con el esquema propio', () => {
		expect(clfC02QuestionSchema.safeParse(multipleSintetica).success).toBe(true);
		expect(
			clfC02QuestionSchema.safeParse({ ...multipleSintetica, correctAnswers: [0] }).success,
		).toBe(false);
		expect(
			clfC02QuestionSchema.safeParse({ ...multipleSintetica, options: ['A', 'B', 'C', 'D'] })
				.success,
		).toBe(false);
	});

	it('todo el banco estándar cumple el esquema CLF y el formato oficial', () => {
		const invalidas = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => !clfC02QuestionSchema.safeParse(pregunta).success,
		).map((pregunta) => pregunta.id);
		expect(invalidas, `preguntas inválidas:\n${invalidas.join(' ')}`).toEqual([]);

		const opcionesInesperadas = TODAS_LAS_PREGUNTAS.filter((pregunta) =>
			(pregunta.formato ?? 'single') === 'multiple'
				? pregunta.options.length !== 5
				: pregunta.options.length !== 4,
		).map((pregunta) => pregunta.id);
		expect(opcionesInesperadas, `formato de opciones incorrecto:\n${opcionesInesperadas.join(' ')}`).toEqual(
			[],
		);
	});

	it('el banco incluye al menos una pregunta de respuesta múltiple (G1)', () => {
		const multiples = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => pregunta.formato === 'multiple',
		);
		expect(multiples.length).toBeGreaterThan(0);
		for (const pregunta of multiples) {
			expect(pregunta.correctAnswers?.length ?? 0).toBeGreaterThanOrEqual(2);
			expect(pregunta.question).toMatch(/\(Elige (DOS|TRES)\)/);
		}
	});
});
