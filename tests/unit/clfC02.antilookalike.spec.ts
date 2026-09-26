import { describe, it, expect } from 'vitest';
import { objetivosClfC02 } from '@/data/clfC02';
import { esServicioReconocible } from '@/data/clfC02/alcance';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { TODOS_LOS_GRUPOS, TODOS_LOS_PARES } from '@/data/clfC02/registroContenido';
import { validarClfC02 } from '@/data/clfC02/validacion';

const PARES_POR_ID = new Map(TODOS_LOS_PARES.map((par) => [par.id, par]));

/**
 * Regresión antilookalike (G4/G5).
 *
 * El fallo original: el validador marcaba un objective como "diferenciado" por
 * el mero hecho de que su grupo contuviera un bloque `comparacion`, aunque el
 * par referenciado no lo declarara. `2.3#3` pasaba así con un par de `2.3#1`.
 * Estas pruebas fallan si se reintroduce esa laxitud.
 */
describe('clfC02 · regresión antilookalike (G4/G5)', () => {
	it('ningún grupo muestra un par de comparación ajeno a sus objectives', () => {
		const fallos: string[] = [];
		for (const grupo of TODOS_LOS_GRUPOS) {
			for (const bloque of grupo.bloques) {
				if (bloque.tipo !== 'comparacion') continue;
				const par = PARES_POR_ID.get(bloque.parId);
				const interseccion = (par?.objetivos ?? []).filter((objetivoId) =>
					grupo.objetivos.includes(objetivoId),
				);
				if (interseccion.length === 0) {
					fallos.push(`${grupo.id} -> ${bloque.parId}`);
				}
			}
		}
		expect(fallos, `grupos con par desalineado:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('reproduce 2.3#3: el par mostrado por 2.3-g2 lo declara', () => {
		const paresQueLoDeclaran = TODOS_LOS_PARES.filter((par) =>
			par.objetivos.includes('2.3#3'),
		);
		expect(paresQueLoDeclaran.length).toBeGreaterThan(0);

		const grupo = TODOS_LOS_GRUPOS.find((candidato) => candidato.id === '2.3-g2');
		expect(grupo, 'el grupo 2.3-g2 debe existir').toBeDefined();
		const bloque = grupo?.bloques.find((bloque) => bloque.tipo === 'comparacion');
		expect(bloque, '2.3-g2 debe mostrar un par de comparación').toBeDefined();
		if (!bloque || bloque.tipo !== 'comparacion') return;
		const par = PARES_POR_ID.get(bloque.parId);
		expect(par?.objetivos).toContain('2.3#3');
	});

	it('la validación no reporta comparación desalineada ni crítico sin comparación', () => {
		const codigos = validarClfC02().map((hallazgo) => hallazgo.codigo);
		expect(codigos).not.toContain('bloque.comparacionDesalineada');
		expect(codigos).not.toContain('cobertura.criticoSinComparacion');
	});

	it('todo caso de reconocimiento declara objectives válidos y un servicio en alcance', () => {
		const ids = new Set(objetivosClfC02.map((objetivo) => `${objetivo.taskId}#${objetivo.index}`));
		const fallos: string[] = [];
		for (const familia of reconocimientoClfC02) {
			familia.casos.forEach((caso, indice) => {
				const etiqueta = `${familia.id}[${indice}] ${caso.servicio}`;
				if (!caso.objetivos || caso.objetivos.length === 0) {
					fallos.push(`${etiqueta}: sin objectives`);
				} else {
					for (const objetivoId of caso.objetivos) {
						if (!ids.has(objetivoId)) {
							fallos.push(`${etiqueta}: objective inválido ${objetivoId}`);
						}
					}
				}
				if (!esServicioReconocible(caso.servicio)) {
					fallos.push(`${etiqueta}: servicio fuera de alcance`);
				}
			});
		}
		expect(fallos, `casos de reconocimiento inválidos:\n${fallos.join('\n')}`).toEqual([]);
	});
});
