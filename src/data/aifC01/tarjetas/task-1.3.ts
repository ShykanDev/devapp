import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask13: TarjetaAifC01[] = [
	{
		id: '1.3-t1',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'diferencia',
		frente:
			'Un compañero llama «componente» a la fase de reentrenamiento y «etapa» al artefacto del modelo guardado. ¿Cómo lo corriges?',
		reverso:
			'El reentrenamiento es una **etapa** (fase del flujo) y el artefacto del modelo es un **componente** (pieza que ejecuta o soporta una etapa). Etapa = fase; componente = pieza.',
	},
	{
		id: '1.3-t2',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'definicion',
		frente:
			'¿Por qué se dice que el monitoreo cierra el ciclo del pipeline en lugar de ser el último paso de una secuencia lineal?',
		reverso:
			'Porque la señal de producción vuelve hacia atrás: la deriva detectada alimenta la preparación de datos y el reentrenamiento. La producción es una fuente de datos más, no un final.',
	},
	{
		id: '1.3-t3',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'diferencia',
		frente:
			'Un equipo necesita auditar los pesos del modelo y ejecutarlo en su propio entorno. Otro acepta que el proveedor aloje el modelo y solo quiere consumirlo. ¿Qué fuente de FM corresponde a cada uno?',
		reverso:
			'Al primero le corresponde un modelo preentrenado de código abierto; al segundo, un modelo preentrenado propietario consumido por API gestionada. La diferencia está en el acceso a los pesos y en quién opera el modelo.',
	},
	{
		id: '1.3-t4',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'tradeoff',
		frente:
			'Ningún modelo disponible cubre bien un dominio muy específico y la empresa tiene datos etiquetados en cantidad. ¿Qué ganas y qué asumes si decides entrenar un modelo propio frente a adaptar uno preentrenado?',
		reverso:
			'Ganas control total y ajuste al dominio; asumes más coste, más tiempo y necesidad de experiencia y datos. Adaptar un preentrenado suele ser antesala razonable del entrenamiento custom.',
	},
	{
		id: '1.3-t5',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'tradeoff',
		frente:
			'El equipo duda entre consumir el modelo con una API gestionada o desplegarlo en su propia infraestructura. ¿Qué criterios deciden el intercambio?',
		reverso:
			'La gestionada delega operación y escalado y acelera la entrega, pero reduce el control del entorno. La autoalojada da control de red, versión y rendimiento a cambio de operar, escalar y asegurar el sistema.',
	},
	{
		id: '1.3-t6',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'servicio',
		frente:
			'Un equipo quiere experimentar con varios algoritmos sobre datos tabulares, entrenar y desplegar el mejor en un endpoint. ¿Qué servicio de AWS encaja y con qué otro empezarían si quisieran partir de un modelo ya existente?',
		reverso:
			'Amazon SageMaker AI cubre experimentación, entrenamiento y despliegue. Si el objetivo es partir de modelos o soluciones listas, Amazon SageMaker JumpStart reduce el punto de partida.',
	},
	{
		id: '1.3-t7',
		taskId: '1.3',
		objetivos: ['1.3#5'],
		tipo: 'riesgo',
		frente:
			'Un modelo desplegado funciona bien el primer mes, pero nadie registra versiones de datos ni métricas de producción. ¿Qué concepto de MLOps refleja el problema y qué riesgo conlleva?',
		reverso:
			'Es deuda técnica acumulada y ausencia de production readiness. Sin datos versionados ni observabilidad no se puede reproducir, comparar ni detectar deriva, y cualquier cambio se vuelve costoso y arriesgado.',
	},
	{
		id: '1.3-t8',
		taskId: '1.3',
		objetivos: ['1.3#6'],
		tipo: 'metrica',
		frente:
			'Con un conjunto de datos muy desbalanceado, el equipo presume de una accuracy alta, pero el modelo deja pasar la mayoría de los casos positivos. ¿Qué métrica conviene mirar y por qué?',
		reverso:
			'Precision, recall y F1. La accuracy puede ser alta simplemente porque la clase mayoritaria domina; el recall revela cuánto positivo real se captura y el F1 equilibra precision y recall en un solo valor.',
	},
];
