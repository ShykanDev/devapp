import { describe, it, expect } from 'vitest';
import {
	agruparResultados,
	buscarEnIndice,
	construirIndice,
	normalizar,
	type EntradaIndice,
	type TipoEntradaIndice,
} from '@/data/clfC02/busqueda';

const indice = construirIndice();

const indiceFalso: EntradaIndice[] = [
	{
		id: 'x',
		tipo: 'objetivo',
		titulo: 'Regiones y Availability Zones',
		texto: 'Infraestructura global de AWS',
		dominios: ['dominio-3'],
		taskId: '3.2',
		ruta: '/cloud-practitioner/task/3.2',
		pesoDominio: 34,
	},
	{
		id: 'y',
		tipo: 'servicio',
		titulo: 'Amazon S3',
		texto: 'Almacenamiento de objetos',
		dominios: ['dominio-3'],
		taskId: '3.6',
		ruta: '/cloud-practitioner/servicios',
		pesoDominio: 34,
	},
];

describe('clfC02 · índice de búsqueda', () => {
	it('todas las entradas apuntan a una ruta del módulo y tienen título', () => {
		for (const entrada of indice) {
			expect(entrada.titulo.trim().length).toBeGreaterThan(0);
			expect(entrada.ruta.startsWith('/cloud-practitioner')).toBe(true);
			expect(entrada.id.trim().length).toBeGreaterThan(0);
		}
	});

	it('indexa todas las familias cuando hay contenido autorizado', () => {
		if (indice.length === 0) {
			expect(indice).toEqual([]);
			return;
		}
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

	it('normaliza mayúsculas y acentos', () => {
		expect(normalizar('Instrucción')).toBe('instruccion');
		expect(normalizar('INSTRUCCIÓN')).toBe(normalizar('instruccion'));
	});

	it('encuentra por término de título y de cuerpo', () => {
		const resultados = buscarEnIndice('regiones', indiceFalso);
		expect(resultados.length).toBeGreaterThan(0);
		expect(resultados[0].id).toBe('x');
	});

	it('ignora el orden y exige todos los términos', () => {
		const directos = buscarEnIndice('amazon s3', indiceFalso);
		const invertidos = buscarEnIndice('s3 amazon', indiceFalso);
		expect(directos.length).toBeGreaterThan(0);
		expect(invertidos.map((resultado) => resultado.id)).toEqual(
			directos.map((resultado) => resultado.id)
		);
	});

	it('devuelve vacío con consultas demasiado cortas o inexistentes', () => {
		expect(buscarEnIndice('a', indiceFalso)).toEqual([]);
		expect(buscarEnIndice('', indiceFalso)).toEqual([]);
		expect(buscarEnIndice('zeppelin', indiceFalso)).toEqual([]);
	});

	it('ordena primero las coincidencias en el título', () => {
		const resultados = buscarEnIndice('de', indiceFalso);
		expect(resultados.length).toBeGreaterThan(0);
		for (let i = 1; i < resultados.length; i += 1) {
			expect(resultados[i - 1].peso).toBeGreaterThanOrEqual(resultados[i].peso);
		}
	});

	it('agrupa los resultados por familia en orden estable', () => {
		const resultados = buscarEnIndice('de', indiceFalso);
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
		expect(buscarEnIndice('de', indiceFalso, 1)).toHaveLength(1);
	});
});
