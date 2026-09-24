import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask42: TarjetaClfC02[] = [
	{
		id: '4.2-t1',
		taskId: '4.2',
		objetivos: ['4.2#5', '4.2#6'],
		tipo: 'diferencia',
		frente:
			'Te piden estimar el costo de una arquitectura que todavía no existe y, por separado, entender el gasto del mes pasado. ¿Qué herramienta usas en cada caso?',
		reverso:
			'Para estimar lo que aún no existe, AWS Pricing Calculator: modela la arquitectura y devuelve un costo aproximado sin desplegar recursos. Para entender el gasto ya realizado, AWS Cost Explorer: muestra el costo y el uso registrados y permite agrupar y filtrar. Vigilar un límite es tarea de AWS Budgets.',
	},
	{
		id: '4.2-t2',
		taskId: '4.2',
		objetivos: ['4.2#3', '4.2#7'],
		tipo: 'definicion',
		frente: '¿Qué es la facturación consolidada de AWS Organizations?',
		reverso:
			'Es la factura única que reúne el uso de todas las cuentas miembro, pagada por la cuenta de gestión. Además de simplificar el pago, el uso agregado puede alcanzar antes los descuentos por volumen, pero no reparte el costo entre equipos: para eso hacen falta etiquetas de asignación de costos e informes.',
	},
	{
		id: '4.2-t3',
		taskId: '4.2',
		objetivos: ['4.2#4', '4.2#8'],
		tipo: 'definicion',
		frente:
			'Acabas de etiquetar todos los recursos con el equipo y el proyecto. ¿Por qué no aparecen esas etiquetas en los informes de facturación?',
		reverso:
			'Porque etiquetar no basta: hay que activarlas como etiquetas de asignación de costos. Solo entonces se propagan a los datos de facturación y aparecen en cada línea del informe de costos y uso, donde se pueden usar para agrupar y filtrar el gasto.',
	},
	{
		id: '4.2-t4',
		taskId: '4.2',
		objetivos: ['4.2#1', '4.2#2'],
		tipo: 'servicio',
		frente: '¿Dónde se consultan las facturas y los precios de los servicios de AWS?',
		reverso:
			'Las facturas, el uso y el historial de pagos se consultan en la consola de facturación y gestión de costos; las dudas sobre cargos se atienden por AWS Support. La información de precios es pública en la página de precios de cada servicio, y AWS Pricing Calculator permite estimar el costo de una arquitectura antes de crearla.',
	},
];
