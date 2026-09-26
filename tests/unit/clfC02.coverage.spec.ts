import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import {
	dominiosClfC02,
	objetivosClfC02,
	serviciosEnAlcanceClfC02,
	serviciosFueraDeAlcanceClfC02,
	taskStatementsClfC02,
} from '@/data/clfC02';
import { TASK_POR_ID, existeServicioClfC02 } from '@/data/clfC02/blueprint-ext';
import { coberturaClfC02, objetivosHuerfanos } from '@/data/clfC02/cobertura';
import {
	OBJETIVOS_SIN_PREGUNTA,
	OBJETIVOS_SIN_TARJETA,
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
} from '@/data/clfC02/registroContenido';
import {
	CUOTAS_EXAMEN_FINAL,
	MINIMOS_BANCO_DOMINIO,
	TOTAL_CUOTA_EXAMEN,
	validarClfC02,
} from '@/data/clfC02/validacion';
import { construirExamenFinal, cuotasExamenFinal } from '@/lib/clfC02Practice';

const OBJETIVOS_POR_TASK: Record<string, number> = {
	'1.1': 3,
	'1.2': 3,
	'1.3': 4,
	'1.4': 8,
	'2.1': 6,
	'2.2': 9,
	'2.3': 10,
	'2.4': 6,
	'3.1': 6,
	'3.2': 8,
	'3.3': 6,
	'3.4': 7,
	'3.5': 5,
	'3.6': 8,
	'3.7': 4,
	'3.8': 14,
	'4.1': 7,
	'4.2': 8,
	'4.3': 13,
};

describe('clfC02 · blueprint', () => {
	it('tiene 4 dominios con los pesos y tasks oficiales', () => {
		expect(dominiosClfC02.map((dominio) => dominio.peso)).toEqual([24, 30, 34, 12]);
		expect(dominiosClfC02.map((dominio) => dominio.taskStatements.length)).toEqual([4, 4, 8, 3]);
		expect(dominiosClfC02.reduce((total, dominio) => total + dominio.peso, 0)).toBe(100);
	});

	it('tiene 19 task statements con ids únicos con formato N.N', () => {
		const ids = taskStatementsClfC02.map((task) => task.id);
		expect(ids).toHaveLength(19);
		expect(new Set(ids).size).toBe(19);
		for (const id of ids) expect(id).toMatch(/^\d\.\d$/);
	});

	it('deriva 135 objectives respetando el conteo oficial por task', () => {
		expect(objetivosClfC02).toHaveLength(135);
		for (const task of taskStatementsClfC02) {
			expect(task.objectives.length).toBe(OBJETIVOS_POR_TASK[task.id]);
		}

		const esperados: Array<{ id: string; titulo: string }> = [];
		for (const dominio of dominiosClfC02) {
			for (const task of dominio.taskStatements) {
				task.objectives.forEach((titulo, indice) => {
					esperados.push({ id: `${task.id}#${indice + 1}`, titulo });
				});
			}
		}
		expect(esperados).toHaveLength(135);

		const derivados = new Map(
			objetivosClfC02.map((objetivo) => [
				`${objetivo.taskId}#${objetivo.index}`,
				objetivo.titulo,
			])
		);
		for (const esperado of esperados) {
			expect(derivados.get(esperado.id)).toBe(esperado.titulo);
		}
	});

	it('marca objetivos críticos y deriva conceptos del texto oficial', () => {
		const criticos = objetivosClfC02.filter((objetivo) => objetivo.profundidad === 'critico');
		expect(criticos.length).toBeGreaterThan(0);

		const objetivoS3 = objetivosClfC02.find(
			(objetivo) => objetivo.taskId === '3.6' && objetivo.index === 3
		);
		expect(objetivoS3?.profundidad).toBe('critico');

		const objetivoAleatorio = objetivosClfC02.find(
			(objetivo) => objetivo.taskId === '3.2' && objetivo.index === 8
		);
		expect(objetivoAleatorio?.conceptos).toEqual(
			expect.arrayContaining(['disaster recovery', 'business continuity'])
		);
	});
});

describe('clfC02 · cobertura del contenido registrado', () => {
	it('cada grupo temático declara objectives existentes y no vacíos', () => {
		for (const grupo of TODOS_LOS_GRUPOS) {
			expect(grupo.objetivos.length).toBeGreaterThan(0);
			for (const objetivoId of grupo.objetivos) {
				expect(TASK_POR_ID[objetivoId.split('#')[0]]).toBeDefined();
			}
		}
	});

	it('cubre con contenido todos los objectives de las tasks no pendientes', () => {
		const cubiertos = new Set(TODOS_LOS_GRUPOS.flatMap((grupo) => grupo.objetivos));
		for (const objetivo of objetivosClfC02) {
			const id = `${objetivo.taskId}#${objetivo.index}`;
			if (TAREAS_PENDIENTES.includes(objetivo.taskId)) continue;
			expect(cubiertos.has(id)).toBe(true);
		}
	});

	it('da al menos una pregunta a cada objective no pendiente y profundidad a los críticos', () => {
		for (const objetivo of objetivosClfC02) {
			const id = `${objetivo.taskId}#${objetivo.index}`;
			if (TAREAS_PENDIENTES.includes(objetivo.taskId)) continue;
			const preguntas = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.objetivos.includes(id));
			if (OBJETIVOS_SIN_PREGUNTA.includes(id)) continue;
			expect(preguntas.length).toBeGreaterThan(0);
			if (objetivo.profundidad === 'critico') {
				expect(
					preguntas.some((pregunta) => pregunta.tipo === 'escenario' || pregunta.tipo === 'tradeoff')
				).toBe(true);
			}
		}
	});

	it('da tarjeta a cada objective crítico no exento', () => {
		for (const objetivo of objetivosClfC02) {
			const id = `${objetivo.taskId}#${objetivo.index}`;
			if (TAREAS_PENDIENTES.includes(objetivo.taskId)) continue;
			if (objetivo.profundidad !== 'critico') continue;
			if (OBJETIVOS_SIN_TARJETA.includes(id)) continue;
			const tieneTarjeta = TODAS_LAS_TARJETAS.some((tarjeta) => tarjeta.objetivos.includes(id));
			expect(tieneTarjeta).toBe(true);
		}
	});

	it('mantiene preguntas y tarjetas bien formadas', () => {
		const ids = new Set<string>();
		for (const pregunta of TODAS_LAS_PREGUNTAS) {
			expect(ids.has(pregunta.id)).toBe(false);
			ids.add(pregunta.id);
			expect(TASK_POR_ID[pregunta.taskId]).toBeDefined();
			const multiple = pregunta.formato === 'multiple';
			expect(pregunta.options).toHaveLength(multiple ? 5 : 4);
			if (multiple) {
				expect(pregunta.correctAnswers?.length ?? 0).toBeGreaterThanOrEqual(2);
				for (const indice of pregunta.correctAnswers ?? []) {
					expect(indice).toBeGreaterThanOrEqual(0);
					expect(indice).toBeLessThan(5);
				}
			} else {
				expect(pregunta.correctAnswer).toBeGreaterThanOrEqual(0);
				expect(pregunta.correctAnswer).toBeLessThanOrEqual(3);
			}
			expect(pregunta.explanation.trim().length).toBeGreaterThan(0);
			expect(pregunta.objetivos.length).toBeGreaterThan(0);
		}

		const idsTarjetas = new Set<string>();
		for (const tarjeta of TODAS_LAS_TARJETAS) {
			expect(idsTarjetas.has(tarjeta.id)).toBe(false);
			idsTarjetas.add(tarjeta.id);
			expect(tarjeta.frente.trim().length).toBeGreaterThan(0);
			expect(tarjeta.reverso.trim().length).toBeGreaterThan(0);
		}
	});

	it('resuelve las preguntas de comparación de cada par', () => {
		for (const par of TODOS_LOS_PARES) {
			expect(par.preguntaIds.length).toBeGreaterThan(0);
			for (const preguntaId of par.preguntaIds) {
				const pregunta = TODAS_LAS_PREGUNTAS.find((candidata) => candidata.id === preguntaId);
				expect(pregunta).toBeDefined();
				expect(pregunta?.tipo).toBe('comparacion');
			}
		}
	});

	it('no tiene referencias huérfanas', () => {
		expect(objetivosHuerfanos()).toEqual([]);
		expect(validarClfC02()).toEqual([]);
	});

	it('declara excepciones vacías y la cobertura total del blueprint', () => {
		expect(OBJETIVOS_SIN_TARJETA).toEqual([]);
		expect(OBJETIVOS_SIN_PREGUNTA).toEqual([]);
		// Criterio de cierre: las 19 tasks tienen contenido.
		expect(TAREAS_PENDIENTES).toEqual([]);

		const cobertura = coberturaClfC02();
		expect(cobertura.totales.dominios).toBe(4);
		expect(cobertura.totales.tasks).toBe(19);
		expect(cobertura.totales.objetivos).toBe(135);
		expect(cobertura.totales.huerfanos).toEqual([]);
		expect(cobertura.tareasPendientes).toEqual(TAREAS_PENDIENTES);
	});
});

describe('clfC02 · cuotas y servicios', () => {
	it('reparte 65 preguntas con las cuotas oficiales declaradas', () => {
		const cuotas = cuotasExamenFinal();
		expect(cuotas).toEqual(CUOTAS_EXAMEN_FINAL);
		expect(cuotas).toEqual({
			'dominio-1': 16,
			'dominio-2': 19,
			'dominio-3': 22,
			'dominio-4': 8,
		});
		expect(TOTAL_CUOTA_EXAMEN).toBe(65);
		expect(Object.values(cuotas).reduce((total, cuota) => total + cuota, 0)).toBe(65);

		for (const dominio of dominiosClfC02) {
			const exacto = (dominio.peso / 100) * 65;
			expect(Math.abs((cuotas[dominio.id] ?? 0) - exacto)).toBeLessThanOrEqual(1);
			expect(MINIMOS_BANCO_DOMINIO[dominio.id]).toBe((cuotas[dominio.id] ?? 0) + 2);
		}
	});

	it('construye el examen final solo cuando el banco cubre las cuotas', () => {
		const resultado = construirExamenFinal();
		if (resultado.ok) {
			expect(resultado.preguntas).toHaveLength(65);
			expect(new Set(resultado.preguntas.map((pregunta) => pregunta.id)).size).toBe(65);
			const porDominio: Record<string, number> = {};
			for (const pregunta of resultado.preguntas) {
				const dominioId = TASK_POR_ID[pregunta.taskId]?.dominioId ?? '';
				porDominio[dominioId] = (porDominio[dominioId] ?? 0) + 1;
			}
			expect(porDominio).toEqual(CUOTAS_EXAMEN_FINAL);
		} else {
			expect(resultado.motivo).toContain('banco completo');
		}
	});

	it('solo cita servicios presentes en el alcance oficial', () => {
		const nombres = Object.values(serviciosEnAlcanceClfC02).flat();
		expect(nombres.length).toBeGreaterThan(0);
		expect(existeServicioClfC02('Amazon S3')).toBe(true);
		expect(existeServicioClfC02('Amazon Quick Sight')).toBe(true);
		expect(existeServicioClfC02('Amazon SageMaker AI')).toBe(true);
		expect(existeServicioClfC02('Amazon Bedrock')).toBe(false);
		expect(existeServicioClfC02('Amazon Personalize')).toBe(false);
		expect(serviciosFueraDeAlcanceClfC02).toContain('Amazon Personalize');

		for (const grupo of TODOS_LOS_GRUPOS) {
			for (const bloque of grupo.bloques) {
				if (bloque.tipo === 'servicio') expect(existeServicioClfC02(bloque.nombre)).toBe(true);
				if (bloque.tipo === 'escenario' && bloque.servicio) {
					expect(existeServicioClfC02(bloque.servicio)).toBe(true);
				}
			}
		}
	});
});

describe('clfC02 · offline', () => {
	const raicesDelModulo = [
		'src/data/clfC02',
		'src/data/clfC02.ts',
		'src/components/clfC02',
		'src/views/clfC02',
	];
	const archivosLib = [
		'src/lib/clfC02Progress.ts',
		'src/lib/clfC02Practice.ts',
		'src/lib/clfC02Index.ts',
	];

	function listarArchivos(objetivo: string): string[] {
		const absoluto = path.resolve(process.cwd(), objetivo);
		if (statSync(absoluto).isFile()) return [absoluto];
		return readdirSync(absoluto).flatMap((entrada) => {
			const hijo = path.join(absoluto, entrada);
			return statSync(hijo).isDirectory() ? listarArchivos(hijo) : [hijo];
		});
	}

	it('no importa firebase, servicios ni el Worker en ningún archivo del módulo', () => {
		const archivos = [
			...raicesDelModulo.flatMap(listarArchivos),
			...archivosLib.map((ruta) => path.resolve(process.cwd(), ruta)),
		];
		expect(archivos.length).toBeGreaterThan(10);

		for (const archivo of archivos) {
			const contenido = readFileSync(archivo, 'utf8');
			expect(contenido).not.toMatch(/from\s+['"]firebase/);
			expect(contenido).not.toMatch(/from\s+['"].*\/services\//);
			expect(contenido).not.toMatch(/config\/worker/);
			expect(contenido).not.toMatch(/import\s+.*firebase\//);
		}
	});
});
