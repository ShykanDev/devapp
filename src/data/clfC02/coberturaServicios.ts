/**
 * Matriz de entrenamiento por servicio in-scope (D-SERVICE).
 *
 * Un servicio cumple cuando aparece al menos una vez como respuesta correcta, al
 * menos una vez como distractor y en al menos un contexto de escenario,
 * reconocimiento o transferencia. La usan el guardrail
 * `clfC02.serviceTrainingGuard.spec.ts` y los diagnósticos de contenido.
 */
import { serviciosEnAlcanceClfC02 } from '@/data/clfC02';
import { TASK_POR_ID } from '@/data/clfC02/blueprint-ext';
import { TODAS_LAS_PREGUNTAS, TODOS_LOS_PARES } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { transferenciaClfC02 } from '@/data/clfC02/transferencia';
import { respuestasCorrectas } from '@/data/clfC02/types';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';
import { serviciosCitadosConAlias } from '@/data/clfC02/citas';
import { SERVICIOS_EXENTOS_TRAINING } from '@/data/clfC02/exencionesServicio';

export interface CoberturaServicio {
	nombre: string;
	correcta: number;
	distractor: number;
	escenario: number;
	cumple: boolean;
}

const TIPOS_APLICACION = new Set(['escenario', 'casoDeUso', 'tradeoff']);

type PreguntaConTipo = PreguntaBaseClfC02 & { tipo?: string };

function textoPregunta(pregunta: PreguntaConTipo): string {
	return [
		pregunta.question,
		...pregunta.options,
		...(pregunta.porQueOpcion ?? []),
		pregunta.explanation ?? '',
	].join(' ');
}

export function matrizCoberturaServicios(): CoberturaServicio[] {
	const bancos: PreguntaConTipo[] = [...TODAS_LAS_PREGUNTAS, ...TODAS_LAS_PREGUNTAS_PROFESIONAL];
	const casos = reconocimientoClfC02.flatMap((familia) => familia.casos);
	const servicios = Object.values(serviciosEnAlcanceClfC02).flat();

	return servicios.map((nombre) => {
		let correcta = 0;
		let distractor = 0;
		let escenario = 0;

		for (const pregunta of bancos) {
			if (!serviciosCitadosConAlias(textoPregunta(pregunta)).includes(nombre)) continue;
			const correctas = new Set(respuestasCorrectas(pregunta));
			const enCorrecta = pregunta.options.some(
				(opcion, indice) =>
					correctas.has(indice) && serviciosCitadosConAlias(opcion).includes(nombre),
			);
			const enDistractor = pregunta.options.some(
				(opcion, indice) =>
					!correctas.has(indice) && serviciosCitadosConAlias(opcion).includes(nombre),
			);
			if (enCorrecta) correcta += 1;
			if (enDistractor) distractor += 1;
			if (pregunta.tipo && TIPOS_APLICACION.has(pregunta.tipo)) escenario += 1;
		}

		for (const caso of casos) {
			if (caso.servicio === nombre) {
				correcta += 1;
				escenario += 1;
			}
			if (caso.descartar.some((item) => item.servicio === nombre)) distractor += 1;
		}

		for (const transferencia of transferenciaClfC02) {
			if (JSON.stringify(transferencia).includes(nombre)) escenario += 1;
		}

		for (const par of TODOS_LOS_PARES) {
			if (
				par.a.titulo.includes(nombre) ||
				par.b.titulo.includes(nombre) ||
				par.etiqueta.includes(nombre)
			) {
				escenario += 1;
			}
		}

		return {
			nombre,
			correcta,
			distractor,
			escenario,
			cumple: correcta > 0 && distractor > 0 && escenario > 0,
		};
	});
}

export function serviciosSinCumplir(): CoberturaServicio[] {
	const exentos = new Set(SERVICIOS_EXENTOS_TRAINING);
	return matrizCoberturaServicios().filter((fila) => !fila.cumple && !exentos.has(fila.nombre));
}

export function dominioDePregunta(taskId: string): string {
	return TASK_POR_ID[taskId]?.dominioId ?? 'desconocido';
}
