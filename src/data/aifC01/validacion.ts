import {
	dominiosAifC01,
	objetivosAifC01,
	serviciosEnAlcanceAifC01,
	taskStatementsAifC01,
} from '@/data/aifC01';
import {
	DOMINIO_POR_ID,
	FEATURES_EN_ALCANCE_AIFC01,
	PESO_TOTAL_AIFC01,
	SERVICIOS_PERMITIDOS,
	TASK_POR_ID,
	TODOS_LOS_IDS_OBJETIVO,
	TOTAL_OBJETIVOS_AIFC01,
	TOTAL_PREGUNTAS_EXAMEN,
	TOTAL_TASKS_AIFC01,
	existeServicioAifC01,
} from '@/data/aifC01/blueprint-ext';
import {
	OBJETIVOS_SIN_PREGUNTA,
	OBJETIVOS_SIN_TARJETA,
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
} from '@/data/aifC01/registroContenido';
import { glosarioGeneralAifC01 } from '@/data/aifC01/glosario/general';
import { serviciosGeneralAifC01 } from '@/data/aifC01/servicios/general';
import type {
	GrupoTematico,
	TarjetaAifC01,
	TipoPreguntaAifC01,
	TipoTarjetaAifC01,
} from '@/data/aifC01/types';

export interface HallazgoValidacion {
	codigo: string;
	mensaje: string;
	origen?: string;
}

const TIPOS_PREGUNTA: ReadonlySet<string> = new Set<TipoPreguntaAifC01>([
	'conocimiento',
	'comparacion',
	'escenario',
	'servicio',
	'tradeoff',
	'seguridad',
	'metrica',
	'casoDeUso',
]);

const TIPOS_TARJETA: ReadonlySet<string> = new Set<TipoTarjetaAifC01>([
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

export const PESOS_ESPERADOS: number[] = [20, 24, 28, 14, 14];
export const TASKS_POR_DOMINIO_ESPERADOS: number[] = [3, 3, 4, 2, 2];

/** Cuota de preguntas del examen final por dominio, derivada del peso oficial. */
export const CUOTAS_EXAMEN_FINAL: Record<string, number> = Object.fromEntries(
	dominiosAifC01.map((dominio) => [
		dominio.id,
		Math.round((dominio.peso / 100) * TOTAL_PREGUNTAS_EXAMEN),
	]),
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
 * Una cita de texto es válida si coincide con un servicio o capacidad en
 * alcance, si lo extiende con palabras de capacidad ("Amazon Bedrock Prompt
 * Management") o si el detector la truncó por mayúsculas ("AWS Identity").
 */
function servicioCitadoValido(cita: string): boolean {
	if (SERVICIOS_PERMITIDOS.has(cita)) return true;
	for (const nombre of SERVICIOS_PERMITIDOS) {
		if (cita.startsWith(`${nombre} `)) return true;
		if (nombre.startsWith(`${cita} `)) return true;
	}
	return FEATURES_EN_ALCANCE_AIFC01.some(
		(feature) =>
			cita === feature ||
			cita.startsWith(`${feature} `) ||
			feature.startsWith(`${cita} `),
	);
}

function textoDeGrupo(grupo: GrupoTematico): string {
	return grupo.bloques
		.map((bloque) => JSON.stringify(bloque))
		.concat(grupo.titulo, grupo.preguntasGuia.join(' '))
		.join(' ');
}

function validarBlueprint(hallazgos: HallazgoValidacion[]): void {
	if (dominiosAifC01.length !== 5) {
		hallazgos.push({
			codigo: 'blueprint.dominios',
			mensaje: `Se esperaban 5 dominios y hay ${dominiosAifC01.length}.`,
		});
	}

	dominiosAifC01.forEach((dominio, posicion) => {
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

	if (PESO_TOTAL_AIFC01 !== 100) {
		hallazgos.push({
			codigo: 'blueprint.pesoTotal',
			mensaje: `Los pesos suman ${PESO_TOTAL_AIFC01}; deben sumar 100.`,
		});
	}

	if (TOTAL_TASKS_AIFC01 !== 14) {
		hallazgos.push({
			codigo: 'blueprint.totalTasks',
			mensaje: `Se esperaban 14 Task Statements y hay ${TOTAL_TASKS_AIFC01}.`,
		});
	}

	if (TOTAL_OBJETIVOS_AIFC01 !== 69) {
		hallazgos.push({
			codigo: 'blueprint.totalObjetivos',
			mensaje: `Se esperaban 69 objectives y hay ${TOTAL_OBJETIVOS_AIFC01}.`,
		});
	}

	const idsTask = taskStatementsAifC01.map((task) => task.id);
	for (const id of idsTask) {
		if (!PATRON_TASK_ID.test(id)) {
			hallazgos.push({ codigo: 'blueprint.taskId', mensaje: `Id de task inválido: ${id}.` });
		}
	}
	if (new Set(idsTask).size !== idsTask.length) {
		hallazgos.push({ codigo: 'blueprint.taskIdUnico', mensaje: 'Hay ids de task repetidos.' });
	}

	for (const dominio of dominiosAifC01) {
		const totalDeclarado = dominio.taskStatements.reduce(
			(total, task) => total + task.objectives.length,
			0,
		);
		const totalDerivado = objetivosAifC01.filter(
			(objetivo) =>
				TASK_POR_ID[objetivo.taskId]?.dominioId === dominio.id,
		).length;
		if (totalDeclarado !== totalDerivado) {
			hallazgos.push({
				codigo: 'blueprint.objetivosDerivados',
				mensaje: `${dominio.id} declara ${totalDeclarado} objectives pero se derivaron ${totalDerivado}.`,
			});
		}
	}

	objetivosAifC01.forEach((objetivo) => {
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
				if (bloque.tipo === 'comparacion') objetivosConComparacion.add(objetivoId);
				if (bloque.tipo === 'errorComun') objetivosConErrorComun.add(objetivoId);
				if (bloque.tipo === 'concepto') objetivosConConcepto.add(objetivoId);
			}

			if (bloque.tipo === 'comparacion' && !paresExisten(bloque.parId)) {
				hallazgos.push({
					codigo: 'bloque.parInexistente',
					mensaje: `El grupo ${grupo.id} referencia el par inexistente ${bloque.parId}.`,
				});
			}
			if (bloque.tipo === 'servicio' && !existeServicioAifC01(bloque.nombre)) {
				hallazgos.push({
					codigo: 'bloque.servicioInexistente',
					mensaje: `El grupo ${grupo.id} cita un servicio fuera de alcance: ${bloque.nombre}.`,
				});
			}
			if (bloque.tipo === 'escenario' && bloque.servicio && !existeServicioAifC01(bloque.servicio)) {
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

	for (const objetivo of objetivosAifC01) {
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
		if (pregunta.options.length !== 4) {
			hallazgos.push({
				codigo: 'pregunta.opciones',
				mensaje: `La pregunta ${pregunta.id} debe tener 4 opciones.`,
			});
		}
		if (!Number.isInteger(pregunta.correctAnswer) || pregunta.correctAnswer < 0 || pregunta.correctAnswer > 3) {
			hallazgos.push({
				codigo: 'pregunta.correcta',
				mensaje: `La pregunta ${pregunta.id} tiene correctAnswer fuera de 0-3.`,
			});
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

	for (const objetivo of objetivosAifC01) {
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

	for (const objetivo of objetivosAifC01) {
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

function validarTarjeta(tarjeta: TarjetaAifC01, ids: Set<string>, hallazgos: HallazgoValidacion[]): void {
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

function validarServicios(hallazgos: HallazgoValidacion[]): void {
	for (const grupo of TODOS_LOS_GRUPOS) {
		if (tareaEstaPendiente(grupo.id.split('-')[0])) continue;
		for (const cita of serviciosCitadosEnTexto(textoDeGrupo(grupo))) {
			if (!servicioCitadoValido(cita)) {
				hallazgos.push({
					codigo: 'servicio.textoFueraDeAlcance',
					mensaje: `El grupo ${grupo.id} cita "${cita}", que no está en serviciosEnAlcanceAifC01.`,
				});
			}
		}
	}

	for (const servicio of serviciosGeneralAifC01) {
		if (!existeServicioAifC01(servicio.nombre)) {
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
			if (!existeServicioAifC01(diferencia)) {
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
			if (!glosarioGeneralAifC01.some((termino) => termino.id === relacionado)) {
				hallazgos.push({
					codigo: 'servicio.glosarioInexistente',
					mensaje: `${servicio.nombre} referencia el término inexistente ${relacionado}.`,
				});
			}
		}
	}
}

function categoriaDelBlueprint(nombre: string): string {
	for (const [categoria, servicios] of Object.entries(serviciosEnAlcanceAifC01)) {
		if (servicios.includes(nombre)) return categoria;
	}
	return '';
}

function validarGlosario(hallazgos: HallazgoValidacion[]): void {
	const ids = new Set<string>();
	for (const termino of glosarioGeneralAifC01) {
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

	for (const termino of glosarioGeneralAifC01) {
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
	for (const dominio of dominiosAifC01) {
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

export function validarAifC01(): HallazgoValidacion[] {
	const hallazgos: HallazgoValidacion[] = [];
	validarBlueprint(hallazgos);
	validarGrupos(hallazgos);
	validarPreguntas(hallazgos);
	validarTarjetas(hallazgos);
	validarServicios(hallazgos);
	validarGlosario(hallazgos);
	return hallazgos;
}

export function erroresValidacion(): string[] {
	return validarAifC01().map((hallazgo) => `[${hallazgo.codigo}] ${hallazgo.mensaje}`);
}
