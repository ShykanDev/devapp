import { computed, ref } from 'vue';
import {
	agruparResultados,
	buscarEnIndice,
	construirIndice,
	etiquetaTipoEntrada,
	normalizar,
	type EntradaIndice,
	type ResultadoBusqueda,
	type TipoEntradaIndice,
} from '@/data/aifC01/busqueda';

export type { EntradaIndice, ResultadoBusqueda, TipoEntradaIndice };

const indice = computed<EntradaIndice[]>(() => construirIndice());

export function useAifC01Index() {
	const consulta = ref('');
	const resultados = computed<ResultadoBusqueda[]>(() =>
		buscarEnIndice(consulta.value, indice.value),
	);
	const grupos = computed(() => agruparResultados(resultados.value));
	const totalEntradas = computed(() => indice.value.length);

	return {
		consulta,
		resultados,
		grupos,
		totalEntradas,
		etiquetaTipo: etiquetaTipoEntrada,
		normalizar,
	};
}

export function buscarAifC01(termino: string): ResultadoBusqueda[] {
	return buscarEnIndice(termino);
}

export function totalEntradasIndice(): number {
	return indice.value.length;
}
