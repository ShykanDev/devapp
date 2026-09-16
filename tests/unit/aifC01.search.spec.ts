import { describe, it, expect } from 'vitest';
import {
	agruparResultados,
	buscarEnIndice,
	construirIndice,
	normalizar,
	type TipoEntradaIndice,
} from '@/data/aifC01/busqueda';

const indice = construirIndice();

describe('aifC01 · índice de búsqueda', () => {
	it('indexa todas las familias de contenido autorizado', () => {
		const tipos = new Set(indice.map((entrada) => entrada.tipo));
		const esperados: TipoEntradaIndice[] = [
			'objetivo',
			'grupo',
			'tarjeta',
			'pregunta',
			'comparacion',
			'glosario',
			'servicio',
		];
		for (const tipo of esperados) expect(tipos.has(tipo)).toBe(true);
		expect(indice.length).toBeGreaterThan(60);
	});

	it('todas las entradas apuntan a una ruta del módulo y tienen título', () => {
		for (const entrada of indice) {
			expect(entrada.titulo.trim().length).toBeGreaterThan(0);
			expect(entrada.ruta.startsWith('/ai-practitioner')).toBe(true);
			expect(entrada.id.trim().length).toBeGreaterThan(0);
		}
	});

	it('normaliza mayúsculas y acentos', () => {
		expect(normalizar('Instrucción')).toBe('instruccion');
		expect(normalizar('INSTRUCCIÓN')).toBe(normalizar('instruccion'));
	});

	it('encuentra por término de título y de cuerpo', () => {
		const resultados = buscarEnIndice('few-shot', indice);
		expect(resultados.length).toBeGreaterThan(0);
		expect(resultados.some((resultado) => resultado.titulo.toLowerCase().includes('few-shot') || resultado.texto.toLowerCase().includes('few-shot'))).toBe(true);
	});

	it('ignora el orden y exige todos los términos', () => {
		const directos = buscarEnIndice('prompt management', indice);
		const invertidos = buscarEnIndice('management prompt', indice);
		expect(directos.length).toBeGreaterThan(0);
		expect(invertidos.map((resultado) => resultado.id)).toEqual(
			directos.map((resultado) => resultado.id)
		);
	});

	it('devuelve vacío con consultas demasiado cortas o inexistentes', () => {
		expect(buscarEnIndice('a', indice)).toEqual([]);
		expect(buscarEnIndice('', indice)).toEqual([]);
		expect(buscarEnIndice('zeppelin', indice)).toEqual([]);
		expect(buscarEnIndice('metricas de clasificacion ternaria', indice)).toEqual([]);
	});

	it('ordena primero las coincidencias en el título', () => {
		const resultados = buscarEnIndice('prompt negative', indice);
		expect(resultados.length).toBeGreaterThan(0);
		for (let i = 1; i < resultados.length; i += 1) {
			expect(resultados[i - 1].peso).toBeGreaterThanOrEqual(resultados[i].peso);
		}
	});

	it('agrupa los resultados por familia en orden estable', () => {
		const resultados = buscarEnIndice('prompt', indice);
		const grupos = agruparResultados(resultados);
		expect(grupos.length).toBeGreaterThan(0);
		expect(grupos.flatMap((grupo) => grupo.resultados)).toHaveLength(resultados.length);
		const orden = grupos.map((grupo) => grupo.tipo);
		const esperado = ['objetivo', 'grupo', 'tarjeta', 'pregunta', 'comparacion', 'glosario', 'servicio'].filter(
			(tipo) => orden.includes(tipo as TipoEntradaIndice)
		);
		expect(orden).toEqual(esperado);
	});

	it('respeta el límite de resultados', () => {
		expect(buscarEnIndice('prompt', indice, 3)).toHaveLength(3);
	});
});
