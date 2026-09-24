import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask14: TarjetaClfC02[] = [
	{
		id: '1.4-t1',
		taskId: '1.4',
		objetivos: ['1.4#3', '1.4#4'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «en on-premises el coste es fijo porque el hardware ya está pagado; en la nube todo es variable». ¿Qué matiz añades?',
		reverso:
			'Es correcto en lo esencial: on-premises concentra costes fijos e indirectos (hardware, energía, refrigeración, espacio, personal) que se pagan aunque la capacidad quede ociosa, mientras la nube convierte buena parte del gasto en variable ligado al consumo. El matiz es que la nube también tiene costes asociados a aprovisionar capacidad reservada.',
	},
	{
		id: '1.4-t2',
		taskId: '1.4',
		objetivos: ['1.4#6', '1.4#7'],
		tipo: 'definicion',
		frente: '¿Qué es rightsizing y cómo se relaciona con la automatización?',
		reverso:
			'Rightsizing es ajustar el tamaño de los recursos a la carga real según las métricas de uso, ni por encima ni por debajo. La automatización lo sostiene en el tiempo: escala, apaga fuera de horario y aplica cambios sin intervención manual, evitando que la capacidad se desajuste o quede encendida por olvido.',
	},
	{
		id: '1.4-t3',
		taskId: '1.4',
		objetivos: ['1.4#2', '1.4#8'],
		tipo: 'definicion',
		frente: '¿Por qué las economías de escala permiten un precio unitario menor en la nube?',
		reverso:
			'Porque el proveedor compra y opera a un volumen muy superior al de cualquier cliente y reparte ese coste entre millones de usuarios. El coste por unidad baja con la escala y esa tarifa reducida se traslada al cliente sin que este tenga que alcanzar ese volumen. Refuerza el ahorro de migrar junto con la eliminación de la capacidad ociosa.',
	},
	{
		id: '1.4-t4',
		taskId: '1.4',
		objetivos: ['1.4#5'],
		tipo: 'diferencia',
		frente: 'BYOL o licencia incluida: ¿qué gana y qué exige cada una?',
		reverso:
			'BYOL reutiliza las licencias que la empresa ya posee y factura solo la infraestructura, pero exige gestionar el cumplimiento y los términos de la licencia. La licencia incluida lleva su coste dentro del servicio y simplifica la gestión, aunque puede salir más cara si ya se tenían licencias propias.',
	},
];
