import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import {
	dominiosAifC01,
	objetivosAifC01,
	serviciosEnAlcanceAifC01,
	taskStatementsAifC01,
} from '@/data/aifC01';
import { TASK_POR_ID, existeServicioAifC01 } from '@/data/aifC01/blueprint-ext';
import { coberturaAifC01, objetivosHuerfanos } from '@/data/aifC01/cobertura';
import {
	OBJETIVOS_SIN_PREGUNTA,
	OBJETIVOS_SIN_TARJETA,
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
} from '@/data/aifC01/registroContenido';
import {
	CUOTAS_EXAMEN_FINAL,
	MINIMOS_BANCO_DOMINIO,
	validarAifC01,
} from '@/data/aifC01/validacion';
import { construirExamenFinal, cuotaExamenFinal, cuotasExamenFinal } from '@/lib/aifC01Practice';

const TAREAS_PENDIENTES_ESPERADAS: string[] = [];

describe('aifC01 · blueprint', () => {
	it('tiene 5 dominios con los pesos y tasks oficiales', () => {
		expect(dominiosAifC01.map((dominio) => dominio.peso)).toEqual([20, 24, 28, 14, 14]);
		expect(dominiosAifC01.map((dominio) => dominio.taskStatements.length)).toEqual([3, 3, 4, 2, 2]);
		expect(dominiosAifC01.reduce((total, dominio) => total + dominio.peso, 0)).toBe(100);
	});

	it('tiene 14 task statements con ids únicos con formato N.N', () => {
		const ids = taskStatementsAifC01.map((task) => task.id);
		expect(ids).toHaveLength(14);
		expect(new Set(ids).size).toBe(14);
		for (const id of ids) expect(id).toMatch(/^\d\.\d$/);
	});

	it('deriva 69 objectives, uno por objective del blueprint y sin huecos', () => {
		expect(objetivosAifC01).toHaveLength(69);

		const esperados: Array<{ id: string; titulo: string }> = [];
		for (const dominio of dominiosAifC01) {
			for (const task of dominio.taskStatements) {
				task.objectives.forEach((titulo, indice) => {
					esperados.push({ id: `${task.id}#${indice + 1}`, titulo });
				});
			}
		}
		expect(esperados).toHaveLength(69);

		const derivados = new Map(
			objetivosAifC01.map((objetivo) => [
				`${objetivo.taskId}#${objetivo.index}`,
				objetivo.titulo,
			])
		);
		for (const esperado of esperados) {
			expect(derivados.get(esperado.id)).toBe(esperado.titulo);
		}
	});

	it('marca con profundidad objetivos y deriva conceptos del texto oficial', () => {
		const objetivos = objetivosAifC01.filter((objetivo) => objetivo.profundidad === 'critico');
		expect(objetivos.length).toBeGreaterThan(0);
		const task32 = objetivosAifC01.filter((objetivo) => objetivo.taskId === '3.2');
		expect(task32.filter((objetivo) => objetivo.profundidad === 'critico').map((objetivo) => objetivo.index)).toEqual([2, 4, 5]);

		const objetivoRiesgos = objetivosAifC01.find(
			(objetivo) => objetivo.taskId === '3.2' && objetivo.index === 4
		);
		expect(objetivoRiesgos?.conceptos).toEqual(
			expect.arrayContaining(['exposure', 'poisoning', 'hijacking', 'jailbreaking'])
		);
	});
});

describe('aifC01 · cobertura del prototipo (D3 → Task 3.2)', () => {
	it('declara exactamente los tasks pendientes y deja los 14 tasks con contenido', () => {
		expect([...TAREAS_PENDIENTES].sort()).toEqual([...TAREAS_PENDIENTES_ESPERADAS].sort());
		for (const taskId of [
			'1.1',
			'1.2',
			'1.3',
			'2.1',
			'2.2',
			'2.3',
			'3.1',
			'3.2',
			'3.3',
			'3.4',
			'4.1',
			'4.2',
			'5.1',
			'5.2',
		]) {
			expect(TAREAS_PENDIENTES).not.toContain(taskId);
		}
	});

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
		for (const objetivo of objetivosAifC01) {
			const id = `${objetivo.taskId}#${objetivo.index}`;
			if (TAREAS_PENDIENTES.includes(objetivo.taskId)) continue;
			expect(cubiertos.has(id)).toBe(true);
		}
	});

	it('da al menos una pregunta a cada objective no pendiente y profundidad a los críticos', () => {
		for (const objetivo of objetivosAifC01) {
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
		for (const objetivo of objetivosAifC01) {
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
			expect(pregunta.options).toHaveLength(4);
			expect(pregunta.correctAnswer).toBeGreaterThanOrEqual(0);
			expect(pregunta.correctAnswer).toBeLessThanOrEqual(3);
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
		expect(validarAifC01()).toEqual([]);
	});

	it('declara excepciones vacías y banco insuficiente solo por tasks pendientes', () => {
		expect(OBJETIVOS_SIN_TARJETA).toEqual([]);
		expect(OBJETIVOS_SIN_PREGUNTA).toEqual([]);

		const cobertura = coberturaAifC01();
		expect(cobertura.totales.dominios).toBe(5);
		expect(cobertura.totales.tasks).toBe(14);
		expect(cobertura.totales.objetivos).toBe(69);
		expect(cobertura.totales.huerfanos).toEqual([]);
		expect(cobertura.tareasPendientes).toEqual(TAREAS_PENDIENTES);
		expect(cobertura.avisosBanco.every((aviso) => aviso.codigo === 'banco.dominioPendiente')).toBe(
			true
		);

		// Un dominio solo se mide cuando todos sus tasks tienen contenido.
		const preguntasDominio3 = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => TASK_POR_ID[pregunta.taskId]?.dominioId === 'dominio-3'
		);
		expect(preguntasDominio3.length).toBeGreaterThanOrEqual(MINIMOS_BANCO_DOMINIO['dominio-3']);
		expect(cobertura.dominios[2].completos).toBe(19);
		expect(cobertura.dominios[2].porcentaje).toBe(100);
	});

	it('marca los objetivos de 3.2 como completos en la cobertura', () => {
		const cobertura = coberturaAifC01();
		const dominio3 = cobertura.dominios.find((dominio) => dominio.id === 'dominio-3');
		const task32 = dominio3?.tasks.find((task) => task.taskId === '3.2');
		expect(task32?.objetivos).toHaveLength(5);
		for (const objetivo of task32?.objetivos ?? []) {
			expect(objetivo.estado).toBe('completo');
		}
	});
});

describe('aifC01 · cuotas y servicios', () => {
	it('reparte 65 preguntas con cuotas dentro de ±1 del peso oficial', () => {
		const total = 65;
		const cuotas = cuotasExamenFinal();
		const suma = Object.values(cuotas).reduce((totalCuotas, cuota) => totalCuotas + cuota, 0);
		expect(suma).toBe(total);
		expect(cuotas).toEqual(CUOTAS_EXAMEN_FINAL);

		for (const dominio of dominiosAifC01) {
			const exacto = (dominio.peso / 100) * total;
			expect(Math.abs((cuotas[dominio.id] ?? 0) - exacto)).toBeLessThanOrEqual(1);
			expect(cuotaExamenFinal(dominio.peso)).toBe(cuotas[dominio.id]);
		}
	});

	it('construye el examen final completo de 65 preguntas con las cuotas ponderadas', () => {
		const resultado = construirExamenFinal();
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas).toHaveLength(65);
		expect(new Set(resultado.preguntas.map((pregunta) => pregunta.id)).size).toBe(65);

		const porDominio: Record<string, number> = {};
		for (const pregunta of resultado.preguntas) {
			const dominioId = TASK_POR_ID[pregunta.taskId]?.dominioId ?? '';
			porDominio[dominioId] = (porDominio[dominioId] ?? 0) + 1;
		}
		expect(porDominio).toEqual({
			'dominio-1': 13,
			'dominio-2': 16,
			'dominio-3': 18,
			'dominio-4': 9,
			'dominio-5': 9,
		});
		expect(Object.values(porDominio).reduce((total, cuota) => total + cuota, 0)).toBe(65);
	});

	it('solo cita servicios presentes en el alcance oficial', () => {
		const nombres = Object.values(serviciosEnAlcanceAifC01).flat();
		expect(nombres.length).toBeGreaterThan(0);
		expect(existeServicioAifC01('Amazon Bedrock')).toBe(true);
		expect(existeServicioAifC01('Amazon Q Developer Inventado')).toBe(false);
		for (const grupo of TODOS_LOS_GRUPOS) {
			for (const bloque of grupo.bloques) {
				if (bloque.tipo === 'servicio') expect(existeServicioAifC01(bloque.nombre)).toBe(true);
				if (bloque.tipo === 'escenario' && bloque.servicio) {
					expect(existeServicioAifC01(bloque.servicio)).toBe(true);
				}
			}
		}
	});
});

describe('aifC01 · offline', () => {
	const raicesDelModulo = [
		'src/data/aifC01',
		'src/data/aifC01.ts',
		'src/components/aifC01',
		'src/views/aifC01',
	];
	const archivosLib = [
		'src/lib/aifC01Progress.ts',
		'src/lib/aifC01Practice.ts',
		'src/lib/aifC01Index.ts',
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
		const archivos = [...raicesDelModulo.flatMap(listarArchivos), ...archivosLib.map((ruta) => path.resolve(process.cwd(), ruta))];
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
