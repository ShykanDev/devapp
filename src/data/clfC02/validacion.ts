import {
	dominiosClfC02,
	objetivosClfC02,
	serviciosEnAlcanceClfC02,
	taskStatementsClfC02,
} from '@/data/clfC02';
import { esEtiquetaEnAlcance, esServicioReconocible } from '@/data/clfC02/alcance';
import {
	DOMINIO_POR_ID,
	PESO_TOTAL_CLFC02,
	TASK_POR_ID,
	TODOS_LOS_IDS_OBJETIVO,
	TOTAL_OBJETIVOS_CLFC02,
	TOTAL_PREGUNTAS_EXAMEN,
	TOTAL_TASKS_CLFC02,
	existeServicioClfC02,
} from '@/data/clfC02/blueprint-ext';
import {
	OBJETIVOS_SIN_PREGUNTA,
	OBJETIVOS_SIN_TARJETA,
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
} from '@/data/clfC02/registroContenido';
import { glosarioGeneralClfC02 } from '@/data/clfC02/glosario/general';
import { serviciosGeneralClfC02 } from '@/data/clfC02/servicios/general';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { clfC02QuestionSchema } from '@/schemas/clfC02';
import type {
	GrupoTematico,
	TarjetaClfC02,
	TipoPreguntaClfC02,
	TipoTarjetaClfC02,
} from '@/data/clfC02/types';

export interface HallazgoValidacion {
	codigo: string;
	mensaje: string;
	origen?: string;
}

const TIPOS_PREGUNTA: ReadonlySet<string> = new Set<TipoPreguntaClfC02>([
	'conocimiento',
	'comparacion',
	'escenario',
	'servicio',
	'tradeoff',
	'seguridad',
	'metrica',
	'casoDeUso',
]);

const TIPOS_TARJETA: ReadonlySet<string> = new Set<TipoTarjetaClfC02>([
	'definicion',
	'diferencia',
	'servicio',
	'tradeoff',
	'riesgo',
	'metrica',
]);

const TIPOS_BLOQUE: ReadonlySet<string> = new Set([
	'concepto',
	'comparacion',
	'cuandoUsar',
	'escenario',
	'errorComun',
	'clave',
	'ejemplo',
	'servicio',
]);

const PATRON_TASK_ID = /^\d\.\d$/;
const PATRON_OBJETIVO_ID = /^\d\.\d#\d+$/;

export const PESOS_ESPERADOS: number[] = [24, 30, 34, 12];
export const TASKS_POR_DOMINIO_ESPERADOS: number[] = [4, 4, 8, 3];

/**
 * Cuota de preguntas del examen final y del examen profesional por dominio.
 * Se declaran explícitamente porque el redondeo automático por peso daría 66
 * (el dominio 2 redondea al alza); la cuota oficial vigente suma 65.
 */
export const CUOTAS_EXAMEN_FINAL: Record<string, number> = {
	'dominio-1': 16,
	'dominio-2': 19,
	'dominio-3': 22,
	'dominio-4': 8,
};

/** Cuotas del examen profesional (nivel difícil): mismas que el examen oficial. */
export const CUOTAS_PROFESIONAL: Record<string, number> = {
	'dominio-1': 16,
	'dominio-2': 19,
	'dominio-3': 22,
	'dominio-4': 8,
};

export const TOTAL_CUOTA_EXAMEN = Object.values(CUOTAS_EXAMEN_FINAL).reduce(
	(total, cuota) => total + cuota,
	0,
);

/** Mínimo de preguntas del banco por dominio (cuota del final + 2). */
export const MINIMOS_BANCO_DOMINIO: Record<string, number> = Object.fromEntries(
	Object.entries(CUOTAS_EXAMEN_FINAL).map(([dominioId, cuota]) => [dominioId, cuota + 2]),
);

function tareaEstaPendiente(taskId: string): boolean {
	return TAREAS_PENDIENTES.includes(taskId);
}

/** Detecta citas de servicios de AWS en texto libre. */
export function serviciosCitadosEnTexto(texto: string): string[] {
	const coincidencias =
		texto.match(/\b(?:Amazon|AWS)\s+[A-Z][A-Za-z0-9]+(?:\s+[A-Z][A-Za-z0-9]+)*/g) ?? [];
	return Array.from(new Set(coincidencias));
}

/**
 * Una cita de texto es válida si la etiqueta está en alcance: servicio
 * permitido (con tolerancia a prefijos y truncamientos), capacidad del
 * blueprint o concepto de la capa de reconocimiento.
 */
function servicioCitadoValido(cita: string): boolean {
	return esEtiquetaEnAlcance(cita);
}

function textoDeGrupo(grupo: GrupoTematico): string {
	return grupo.bloques
		.map((bloque) => JSON.stringify(bloque))
		.concat(grupo.titulo, grupo.preguntasGuia.join(' '))
		.join(' ');
}

function validarBlueprint(hallazgos: HallazgoValidacion[]): void {
	if (dominiosClfC02.length !== 4) {
		hallazgos.push({
			codigo: 'blueprint.dominios',
			mensaje: `Se esperaban 4 dominios y hay ${dominiosClfC02.length}.`,
		});
	}

	dominiosClfC02.forEach((dominio, posicion) => {
		const pesoEsperado = PESOS_ESPERADOS[posicion];
		if (dominio.peso !== pesoEsperado) {
			hallazgos.push({
				codigo: 'blueprint.peso',
				mensaje: `${dominio.id} tiene peso ${dominio.peso}; se esperaba ${pesoEsperado}.`,
			});
		}
		const tasksEsperados = TASKS_POR_DOMINIO_ESPERADOS[posicion];
		if (dominio.taskStatements.length !== tasksEsperados) {
			hallazgos.push({
				codigo: 'blueprint.tasks',
				mensaje: `${dominio.id} tiene ${dominio.taskStatements.length} tasks; se esperaban ${tasksEsperados}.`,
			});
		}
	});

	if (PESO_TOTAL_CLFC02 !== 100) {
		hallazgos.push({
			codigo: 'blueprint.pesoTotal',
			mensaje: `Los pesos suman ${PESO_TOTAL_CLFC02}; deben sumar 100.`,
		});
	}

	if (TOTAL_TASKS_CLFC02 !== 19) {
		hallazgos.push({
			codigo: 'blueprint.totalTasks',
			mensaje: `Se esperaban 19 Task Statements y hay ${TOTAL_TASKS_CLFC02}.`,
		});
	}

	if (TOTAL_OBJETIVOS_CLFC02 !== 135) {
		hallazgos.push({
			codigo: 'blueprint.totalObjetivos',
			mensaje: `Se esperaban 135 objectives y hay ${TOTAL_OBJETIVOS_CLFC02}.`,
		});
	}

	if (TOTAL_CUOTA_EXAMEN !== TOTAL_PREGUNTAS_EXAMEN) {
		hallazgos.push({
			codigo: 'blueprint.cuotas',
			mensaje: `Las cuotas del examen suman ${TOTAL_CUOTA_EXAMEN}; deben sumar ${TOTAL_PREGUNTAS_EXAMEN}.`,
		});
	}

	const idsTask = taskStatementsClfC02.map((task) => task.id);
	for (const id of idsTask) {
		if (!PATRON_TASK_ID.test(id)) {
			hallazgos.push({ codigo: 'blueprint.taskId', mensaje: `Id de task inválido: ${id}.` });
		}
	}
	if (new Set(idsTask).size !== idsTask.length) {
		hallazgos.push({ codigo: 'blueprint.taskIdUnico', mensaje: 'Hay ids de task repetidos.' });
	}

	for (const dominio of dominiosClfC02) {
		const totalDeclarado = dominio.taskStatements.reduce(
			(total, task) => total + task.objectives.length,
			0,
		);
		const totalDerivado = objetivosClfC02.filter(
			(objetivo) => TASK_POR_ID[objetivo.taskId]?.dominioId === dominio.id,
		).length;
		if (totalDeclarado !== totalDerivado) {
			hallazgos.push({
				codigo: 'blueprint.objetivosDerivados',
				mensaje: `${dominio.id} declara ${totalDeclarado} objectives pero se derivaron ${totalDerivado}.`,
			});
		}
	}

	objetivosClfC02.forEach((objetivo) => {
		const id = `${objetivo.taskId}#${objetivo.index}`;
		if (!PATRON_OBJETIVO_ID.test(id)) {
			hallazgos.push({ codigo: 'blueprint.objetivoId', mensaje: `Id de objective inválido: ${id}.` });
		}
		if (objetivo.titulo.trim().length === 0) {
			hallazgos.push({ codigo: 'blueprint.objetivoVacio', mensaje: `Objective sin texto: ${id}.` });
		}
	});

	if (new Set(TODOS_LOS_IDS_OBJETIVO).size !== TODOS_LOS_IDS_OBJETIVO.length) {
		hallazgos.push({
			codigo: 'blueprint.objetivoIdUnico',
			mensaje: 'Hay ids de objective repetidos.',
		});
	}
}

function validarGrupos(hallazgos: HallazgoValidacion[]): void {
	const gruposPorId = new Set<string>();
	const objetivosCubiertos = new Set<string>();
	const objetivosConEscenario = new Set<string>();
	const objetivosConComparacion = new Set<string>();
	const objetivosConErrorComun = new Set<string>();
	const objetivosConConcepto = new Set<string>();

	for (const grupo of TODOS_LOS_GRUPOS) {
		if (gruposPorId.has(grupo.id)) {
			hallazgos.push({ codigo: 'grupo.idDuplicado', mensaje: `Grupo repetido: ${grupo.id}.` });
		}
		gruposPorId.add(grupo.id);

		if (!PATRON_TASK_ID.test(grupo.id.split('-')[0])) {
			hallazgos.push({ codigo: 'grupo.idFormato', mensaje: `Id de grupo inesperado: ${grupo.id}.` });
		}

		if (grupo.objetivos.length === 0) {
			hallazgos.push({
				codigo: 'grupo.sinObjetivos',
				mensaje: `El grupo ${grupo.id} no declara objectives.`,
			});
		}

		for (const objetivoId of grupo.objetivos) {
			if (!existeObjetivo(objetivoId)) {
				hallazgos.push({
					codigo: 'grupo.objetivoHuerfano',
					mensaje: `El grupo ${grupo.id} referencia el objective inexistente ${objetivoId}.`,
				});
				continue;
			}
			objetivosCubiertos.add(objetivoId);
		}

		for (const bloque of grupo.bloques) {
			if (!TIPOS_BLOQUE.has(bloque.tipo)) {
				hallazgos.push({
					codigo: 'bloque.tipo',
					mensaje: `Tipo de bloque desconocido en ${grupo.id}: ${bloque.tipo}.`,
				});
				continue;
			}

			for (const objetivoId of grupo.objetivos) {
				if (bloque.tipo === 'escenario') objetivosConEscenario.add(objetivoId);
				if (bloque.tipo === 'errorComun') objetivosConErrorComun.add(objetivoId);
				if (bloque.tipo === 'concepto') objetivosConConcepto.add(objetivoId);
			}

			// Un bloque de comparación solo diferencia a los objectives del grupo
			// que el par referenciado declara en sus propios `objetivos`. Antes se
			// marcaban todos los objectives del grupo por el mero hecho de contener
			// un bloque `comparacion`, lo que permitía colar un par "lookalike"
			// (p. ej. `2.3#3` con un par de `2.3#1`).
			if (bloque.tipo === 'comparacion') {
				const par = TODOS_LOS_PARES.find((candidato) => candidato.id === bloque.parId);
				if (par) {
					const interseccion = par.objetivos.filter((objetivoId) =>
						grupo.objetivos.includes(objetivoId),
					);
					if (interseccion.length === 0) {
						hallazgos.push({
							codigo: 'bloque.comparacionDesalineada',
							mensaje: `El grupo ${grupo.id} muestra el par ${bloque.parId}, cuyos objectives no coinciden con los del grupo.`,
						});
					}
					for (const objetivoId of interseccion) {
						objetivosConComparacion.add(objetivoId);
					}
				}
			}

			if (bloque.tipo === 'comparacion' && !paresExisten(bloque.parId)) {
				hallazgos.push({
					codigo: 'bloque.parInexistente',
					mensaje: `El grupo ${grupo.id} referencia el par inexistente ${bloque.parId}.`,
				});
			}
			if (bloque.tipo === 'servicio' && !existeServicioClfC02(bloque.nombre)) {
				hallazgos.push({
					codigo: 'bloque.servicioInexistente',
					mensaje: `El grupo ${grupo.id} cita un servicio fuera de alcance: ${bloque.nombre}.`,
				});
			}
			if (bloque.tipo === 'escenario' && bloque.servicio && !existeServicioClfC02(bloque.servicio)) {
				hallazgos.push({
					codigo: 'bloque.escenarioServicio',
					mensaje: `El grupo ${grupo.id} cita un servicio fuera de alcance: ${bloque.servicio}.`,
				});
			}
			if (bloque.tipo === 'cuandoUsar' && (bloque.usar.length === 0 || bloque.noUsar.length === 0)) {
				hallazgos.push({
					codigo: 'bloque.cuandoUsar',
					mensaje: `El bloque cuandoUsar de ${grupo.id} debe tener usar y noUsar.`,
				});
			}
		}
	}

	for (const objetivo of objetivosClfC02) {
		const objetivoId = `${objetivo.taskId}#${objetivo.index}`;
		if (tareaEstaPendiente(objetivo.taskId)) continue;
		if (!objetivosCubiertos.has(objetivoId)) {
			hallazgos.push({
				codigo: 'cobertura.objetivoSinGrupo',
				mensaje: `El objective ${objetivoId} no aparece en ningún grupo temático.`,
			});
		}
		if (objetivo.profundidad === 'critico') {
			if (!objetivosConConcepto.has(objetivoId)) {
				hallazgos.push({
					codigo: 'cobertura.criticoSinConcepto',
					mensaje: `El objective crítico ${objetivoId} no tiene bloque de concepto.`,
				});
			}
			if (!objetivosConComparacion.has(objetivoId)) {
				hallazgos.push({
					codigo: 'cobertura.criticoSinComparacion',
					mensaje: `El objective crítico ${objetivoId} no tiene comparación.`,
				});
			}
			if (!objetivosConEscenario.has(objetivoId)) {
				hallazgos.push({
					codigo: 'cobertura.criticoSinEscenario',
					mensaje: `El objective crítico ${objetivoId} no tiene escenario.`,
				});
			}
			if (!objetivosConErrorComun.has(objetivoId)) {
				hallazgos.push({
					codigo: 'cobertura.criticoSinErrorComun',
					mensaje: `El objective crítico ${objetivoId} no tiene error común.`,
				});
			}
		}
	}
}

function paresExisten(parId: string): boolean {
	return TODOS_LOS_PARES.some((par) => par.id === parId);
}

function existeObjetivo(objetivoId: string): boolean {
	return TODOS_LOS_IDS_OBJETIVO.includes(objetivoId);
}

function validarPreguntas(hallazgos: HallazgoValidacion[]): void {
	const ids = new Set<string>();
	const preguntasComparacion = new Set<string>();

	for (const pregunta of TODAS_LAS_PREGUNTAS) {
		if (ids.has(pregunta.id)) {
			hallazgos.push({ codigo: 'pregunta.idDuplicado', mensaje: `Pregunta repetida: ${pregunta.id}.` });
		}
		ids.add(pregunta.id);

		if (!TASK_POR_ID[pregunta.taskId]) {
			hallazgos.push({
				codigo: 'pregunta.taskInexistente',
				mensaje: `La pregunta ${pregunta.id} referencia el task inexistente ${pregunta.taskId}.`,
			});
		}
		if (!TIPOS_PREGUNTA.has(pregunta.tipo)) {
			hallazgos.push({
				codigo: 'pregunta.tipo',
				mensaje: `Tipo de pregunta desconocido en ${pregunta.id}: ${pregunta.tipo}.`,
			});
		}
		const resultadoEsquema = clfC02QuestionSchema.safeParse(pregunta);
		if (!resultadoEsquema.success) {
			for (const problema of resultadoEsquema.error.issues) {
				hallazgos.push({
					codigo: 'pregunta.esquema',
					mensaje: `La pregunta ${pregunta.id} no cumple el esquema CLF (${problema.path.join('.')}): ${problema.message}`,
				});
			}
		}
		if (!pregunta.explanation || pregunta.explanation.trim().length === 0) {
			hallazgos.push({
				codigo: 'pregunta.explicacion',
				mensaje: `La pregunta ${pregunta.id} necesita explicación.`,
			});
		}
		if (pregunta.objetivos.length === 0) {
			hallazgos.push({
				codigo: 'pregunta.sinObjetivos',
				mensaje: `La pregunta ${pregunta.id} no declara objectives.`,
			});
		}
		for (const objetivoId of pregunta.objetivos) {
			if (!existeObjetivo(objetivoId)) {
				hallazgos.push({
					codigo: 'pregunta.objetivoHuerfano',
					mensaje: `La pregunta ${pregunta.id} referencia el objective inexistente ${objetivoId}.`,
				});
			}
		}
		if (pregunta.tipo === 'comparacion') preguntasComparacion.add(pregunta.id);
	}

	for (const par of TODOS_LOS_PARES) {
		if (par.preguntaIds.length === 0) {
			hallazgos.push({
				codigo: 'par.sinPregunta',
				mensaje: `El par ${par.id} no declara pregunta de comparación.`,
			});
		}
		for (const preguntaId of par.preguntaIds) {
			const pregunta = TODAS_LAS_PREGUNTAS.find((candidata) => candidata.id === preguntaId);
			if (!pregunta) {
				hallazgos.push({
					codigo: 'par.preguntaInexistente',
					mensaje: `El par ${par.id} referencia la pregunta inexistente ${preguntaId}.`,
				});
				continue;
			}
			if (pregunta.tipo !== 'comparacion') {
				hallazgos.push({
					codigo: 'par.preguntaTipo',
					mensaje: `La pregunta ${preguntaId} del par ${par.id} debe ser de tipo comparacion.`,
				});
			}
		}
		if (par.objetivos.length === 0) {
			hallazgos.push({ codigo: 'par.sinObjetivos', mensaje: `El par ${par.id} no declara objectives.` });
		}
		for (const objetivoId of par.objetivos) {
			if (!existeObjetivo(objetivoId)) {
				hallazgos.push({
					codigo: 'par.objetivoHuerfano',
					mensaje: `El par ${par.id} referencia el objective inexistente ${objetivoId}.`,
				});
			}
		}
	}

	for (const preguntaId of preguntasComparacion) {
		const referenciada = TODOS_LOS_PARES.some((par) => par.preguntaIds.includes(preguntaId));
		if (!referenciada) {
			hallazgos.push({
				codigo: 'pregunta.comparacionSuelta',
				mensaje: `La pregunta de comparación ${preguntaId} no pertenece a ningún par.`,
			});
		}
	}

	for (const objetivo of objetivosClfC02) {
		if (tareaEstaPendiente(objetivo.taskId)) continue;
		const objetivoId = `${objetivo.taskId}#${objetivo.index}`;
		const preguntas = TODAS_LAS_PREGUNTAS.filter((pregunta) =>
			pregunta.objetivos.includes(objetivoId),
		);
		if (preguntas.length === 0 && !OBJETIVOS_SIN_PREGUNTA.includes(objetivoId)) {
			hallazgos.push({
				codigo: 'cobertura.objetivoSinPregunta',
				mensaje: `El objective ${objetivoId} no tiene ninguna pregunta.`,
			});
		}
		if (objetivo.profundidad === 'critico') {
			const tieneProfundidad = preguntas.some(
				(pregunta) => pregunta.tipo === 'escenario' || pregunta.tipo === 'tradeoff',
			);
			if (!tieneProfundidad) {
				hallazgos.push({
					codigo: 'cobertura.criticoSinProfundidad',
					mensaje: `El objective crítico ${objetivoId} necesita una pregunta de escenario o tradeoff.`,
				});
			}
		}
	}
}

function validarTarjetas(hallazgos: HallazgoValidacion[]): void {
	const ids = new Set<string>();
	for (const tarjeta of TODAS_LAS_TARJETAS) {
		validarTarjeta(tarjeta, ids, hallazgos);
	}

	for (const objetivo of objetivosClfC02) {
		if (tareaEstaPendiente(objetivo.taskId)) continue;
		if (objetivo.profundidad !== 'critico') continue;
		const objetivoId = `${objetivo.taskId}#${objetivo.index}`;
		const tieneTarjeta = TODAS_LAS_TARJETAS.some((tarjeta) =>
			tarjeta.objetivos.includes(objetivoId),
		);
		if (!tieneTarjeta && !OBJETIVOS_SIN_TARJETA.includes(objetivoId)) {
			hallazgos.push({
				codigo: 'cobertura.criticoSinTarjeta',
				mensaje: `El objective crítico ${objetivoId} no tiene tarjeta.`,
			});
		}
	}
}

function validarTarjeta(tarjeta: TarjetaClfC02, ids: Set<string>, hallazgos: HallazgoValidacion[]): void {
	if (ids.has(tarjeta.id)) {
		hallazgos.push({ codigo: 'tarjeta.idDuplicado', mensaje: `Tarjeta repetida: ${tarjeta.id}.` });
	}
	ids.add(tarjeta.id);

	if (!TASK_POR_ID[tarjeta.taskId]) {
		hallazgos.push({
			codigo: 'tarjeta.taskInexistente',
			mensaje: `La tarjeta ${tarjeta.id} referencia el task inexistente ${tarjeta.taskId}.`,
		});
	}
	if (!TIPOS_TARJETA.has(tarjeta.tipo)) {
		hallazgos.push({
			codigo: 'tarjeta.tipo',
			mensaje: `Tipo de tarjeta desconocido en ${tarjeta.id}: ${tarjeta.tipo}.`,
		});
	}
	if (tarjeta.frente.trim().length === 0 || tarjeta.reverso.trim().length === 0) {
		hallazgos.push({ codigo: 'tarjeta.vacia', mensaje: `La tarjeta ${tarjeta.id} está vacía.` });
	}
	if (tarjeta.objetivos.length === 0) {
		hallazgos.push({ codigo: 'tarjeta.sinObjetivos', mensaje: `La tarjeta ${tarjeta.id} no declara objectives.` });
	}
	for (const objetivoId of tarjeta.objetivos) {
		if (!existeObjetivo(objetivoId)) {
			hallazgos.push({
				codigo: 'tarjeta.objetivoHuerfano',
				mensaje: `La tarjeta ${tarjeta.id} referencia el objective inexistente ${objetivoId}.`,
			});
		}
	}
}

function validarReconocimiento(hallazgos: HallazgoValidacion[]): void {
	for (const familia of reconocimientoClfC02) {
		if (!TASK_POR_ID[familia.taskId]) {
			hallazgos.push({
				codigo: 'reconocimiento.taskInexistente',
				mensaje: `La familia ${familia.id} referencia el task inexistente ${familia.taskId}.`,
			});
		}
		familia.casos.forEach((caso, indice) => {
			const etiqueta = `${familia.id}[${indice}]`;
			if (!esServicioReconocible(caso.servicio)) {
				hallazgos.push({
					codigo: 'reconocimiento.servicioFueraDeAlcance',
					mensaje: `El caso ${etiqueta} propone "${caso.servicio}", que no es un servicio en alcance.`,
				});
			}
			if (!caso.objetivos || caso.objetivos.length === 0) {
				hallazgos.push({
					codigo: 'reconocimiento.sinObjetivos',
					mensaje: `El caso ${etiqueta} (${caso.servicio}) no declara objectives.`,
				});
			} else {
				for (const objetivoId of caso.objetivos) {
					if (!existeObjetivo(objetivoId)) {
						hallazgos.push({
							codigo: 'reconocimiento.objetivoHuerfano',
							mensaje: `El caso ${etiqueta} referencia el objective inexistente ${objetivoId}.`,
						});
					}
				}
			}
			for (const item of caso.descartar) {
				if (!esEtiquetaEnAlcance(item.servicio)) {
					hallazgos.push({
						codigo: 'reconocimiento.descarteFueraDeAlcance',
						mensaje: `El caso ${etiqueta} descarta "${item.servicio}", fuera de alcance.`,
					});
				}
			}
		});
	}
}

function validarServicios(hallazgos: HallazgoValidacion[]): void {
	for (const grupo of TODOS_LOS_GRUPOS) {
		if (tareaEstaPendiente(grupo.id.split('-')[0])) continue;
		for (const cita of serviciosCitadosEnTexto(textoDeGrupo(grupo))) {
			if (!servicioCitadoValido(cita)) {
				hallazgos.push({
					codigo: 'servicio.textoFueraDeAlcance',
					mensaje: `El grupo ${grupo.id} cita "${cita}", que no está en serviciosEnAlcanceClfC02.`,
				});
			}
		}
	}

	for (const servicio of serviciosGeneralClfC02) {
		if (!existeServicioClfC02(servicio.nombre)) {
			hallazgos.push({
				codigo: 'servicio.fueraDeAlcance',
				mensaje: `Servicio enriquecido fuera de alcance: ${servicio.nombre}.`,
			});
		}
		if (servicio.categoria !== categoriaDelBlueprint(servicio.nombre)) {
			hallazgos.push({
				codigo: 'servicio.categoria',
				mensaje: `La categoría declarada de ${servicio.nombre} no coincide con el blueprint.`,
			});
		}
		for (const diferencia of servicio.seDiferenciaDe) {
			if (!existeServicioClfC02(diferencia)) {
				hallazgos.push({
					codigo: 'servicio.diferenciaFueraDeAlcance',
					mensaje: `${servicio.nombre} se compara con el servicio fuera de alcance ${diferencia}.`,
				});
			}
		}
		for (const taskId of servicio.tareas) {
			if (!TASK_POR_ID[taskId]) {
				hallazgos.push({
					codigo: 'servicio.taskInexistente',
					mensaje: `${servicio.nombre} referencia el task inexistente ${taskId}.`,
				});
			}
		}
		for (const relacionado of servicio.relacionados) {
			if (!glosarioGeneralClfC02.some((termino) => termino.id === relacionado)) {
				hallazgos.push({
					codigo: 'servicio.glosarioInexistente',
					mensaje: `${servicio.nombre} referencia el término inexistente ${relacionado}.`,
				});
			}
		}
	}
}

function categoriaDelBlueprint(nombre: string): string {
	for (const [categoria, servicios] of Object.entries(serviciosEnAlcanceClfC02)) {
		if (servicios.includes(nombre)) return categoria;
	}
	return '';
}

function validarGlosario(hallazgos: HallazgoValidacion[]): void {
	const ids = new Set<string>();
	for (const termino of glosarioGeneralClfC02) {
		if (ids.has(termino.id)) {
			hallazgos.push({ codigo: 'glosario.idDuplicado', mensaje: `Término repetido: ${termino.id}.` });
		}
		ids.add(termino.id);

		if (termino.definicion.trim().length === 0) {
			hallazgos.push({ codigo: 'glosario.vacio', mensaje: `El término ${termino.id} no tiene definición.` });
		}
		if (termino.dominios.length === 0) {
			hallazgos.push({ codigo: 'glosario.sinDominios', mensaje: `El término ${termino.id} no declara dominios.` });
		}
		for (const dominioId of termino.dominios) {
			if (!DOMINIO_POR_ID[dominioId]) {
				hallazgos.push({
					codigo: 'glosario.dominioInexistente',
					mensaje: `El término ${termino.id} referencia el dominio inexistente ${dominioId}.`,
				});
			}
		}
	}

	for (const termino of glosarioGeneralClfC02) {
		for (const relacionado of termino.relacionados) {
			if (!ids.has(relacionado)) {
				hallazgos.push({
					codigo: 'glosario.relacionInexistente',
					mensaje: `El término ${termino.id} referencia el término inexistente ${relacionado}.`,
				});
			}
		}
	}
}

/**
 * Avisos de banco insuficiente. Solo se emiten para dominios sin tasks
 * pendientes: durante el prototipo es esperado que falte banco.
 */
export function avisosBancoPorDominio(): HallazgoValidacion[] {
	const avisos: HallazgoValidacion[] = [];
	for (const dominio of dominiosClfC02) {
		const tienePendientes = dominio.taskStatements.some((task) =>
			tareaEstaPendiente(task.id),
		);
		if (tienePendientes) {
			avisos.push({
				codigo: 'banco.dominioPendiente',
				mensaje: `${dominio.id} todavía no tiene todos sus tasks con contenido.`,
			});
			continue;
		}
		const disponibles = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => TASK_POR_ID[pregunta.taskId]?.dominioId === dominio.id,
		).length;
		const minimo = MINIMOS_BANCO_DOMINIO[dominio.id];
		if (disponibles < minimo) {
			avisos.push({
				codigo: 'banco.insuficiente',
				mensaje: `${dominio.id} tiene ${disponibles} preguntas y necesita al menos ${minimo}.`,
			});
		}
	}
	return avisos;
}

export function validarClfC02(): HallazgoValidacion[] {
	const hallazgos: HallazgoValidacion[] = [];
	validarBlueprint(hallazgos);
	validarGrupos(hallazgos);
	validarPreguntas(hallazgos);
	validarTarjetas(hallazgos);
	validarReconocimiento(hallazgos);
	validarServicios(hallazgos);
	validarGlosario(hallazgos);
	return hallazgos;
}

export function erroresValidacionClfC02(): string[] {
	return validarClfC02().map((hallazgo) => `[${hallazgo.codigo}] ${hallazgo.mensaje}`);
}
