import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask33: ParConfusionClfC02[] = [
	{
		id: 'ecs-vs-eks-vs-fargate',
		etiqueta: 'Amazon ECS y Amazon EKS vs AWS Fargate',
		a: {
			titulo: 'Amazon ECS y Amazon EKS (orquestadores de contenedores)',
			resumen:
				'Organizan, programan y escalan los contenedores. Amazon ECS es el orquestador propio de AWS, sencillo y muy integrado con el resto del ecosistema; Amazon EKS es Kubernetes gestionado, adecuado si ya usas Kubernetes o necesitas su portabilidad.',
		},
		b: {
			titulo: 'AWS Fargate (motor de cómputo serverless)',
			resumen:
				'Motor que ejecuta contenedores sin que aprovisiones ni administres servidores. No es un orquestador: se combina con Amazon ECS o con Amazon EKS para decidir en qué se ejecutan las tareas.',
		},
		diferenciaClave:
			'ECS y EKS deciden cómo se orquesta; Fargate decide en qué se ejecuta, sin servidores. No son alternativas: ECS o EKS con Fargate es una combinación habitual, mientras que la alternativa a Fargate es ejecutar los contenedores en instancias de Amazon EC2 que tú gestionas.',
		cuandoA: [
			'Cuando necesitas coordinar muchos contenedores, definir tareas o servicios y elegir un orquestador.',
			'Cuando quieres Kubernetes gestionado con Amazon EKS o la integración más directa con AWS mediante Amazon ECS.',
		],
		cuandoB: [
			'Cuando no quieres administrar instancias ni aplicar parches y prefieres pagar solo por los recursos que consumen las tareas.',
			'Cuando ya usas ECS o EKS y quieres liberarte de gestionar el plano de datos.',
		],
		escenarioA:
			'Una empresa estandariza sus aplicaciones en Kubernetes porque ya lo usa en otros entornos y necesita portabilidad entre nubes; despliega sus clústeres con Amazon Elastic Kubernetes Service (Amazon EKS).',
		escenarioB:
			'La misma empresa no quiere gestionar nodos ni aplicar parches al sistema operativo, así que ejecuta las tareas de sus contenedores con AWS Fargate como motor de cómputo.',
		preguntaIds: ['3.3-q4'],
		objetivos: ['3.3#3'],
	},
	{
		id: 'ec2-vs-lambda',
		etiqueta: 'Amazon EC2 vs AWS Lambda',
		a: {
			titulo: 'Amazon EC2 (servidores virtuales)',
			resumen:
				'Proporciona instancias: servidores virtuales que aprovisionas y administras. Tienes control total del sistema operativo y de la configuración, eliges familia y tamaño, y la capacidad queda disponible de forma continua aunque no haya trabajo.',
		},
		b: {
			titulo: 'AWS Lambda (cómputo serverless orientado a eventos)',
			resumen:
				'Ejecuta funciones disparadas por eventos sin gestionar servidores. Escala de forma automática con los eventos y solo se paga por las invocaciones y el tiempo de ejecución; no hay capacidad encendida por defecto.',
		},
		diferenciaClave:
			'EC2 es un servidor que controlas tú; Lambda es una función que se ejecuta cuando ocurre un evento. EC2 conviene para procesos continuos, de ejecución larga o que requieren control del sistema operativo; Lambda, para lógica corta y sin estado disparada por eventos.',
		cuandoA: [
			'Cuando necesitas control del sistema operativo, instalar software específico o ejecutar procesos de larga duración.',
			'Cuando la carga es continua y estable, o el proceso necesita conservar estado en la propia máquina.',
		],
		cuandoB: [
			'Cuando la lógica se activa por eventos y las ejecuciones son cortas.',
			'Cuando quieres escalar automáticamente sin aprovisionar capacidad ni pagar mientras no hay eventos.',
		],
		escenarioA:
			'Una empresa mantiene una base de datos auto-gestionada y varios procesos de larga duración que necesitan control total del sistema operativo; esos componentes se ejecutan en instancias de Amazon EC2.',
		escenarioB:
			'Otra parte del sistema reacciona a cada archivo nuevo y a cada petición web con lógica breve; se implementa con funciones de AWS Lambda que se activan solo cuando llega el evento.',
		preguntaIds: ['3.3-q6'],
		objetivos: ['3.3#4'],
	},
	{
		id: 'servidores-virtuales-vs-serverless',
		etiqueta: 'Máquinas virtuales vs cómputo serverless',
		a: {
			titulo: 'Máquinas virtuales (control y capacidad continua)',
			resumen:
				'El cliente elige el tipo de instancia, administra el sistema operativo y el software, y la capacidad está disponible de forma continua. Es el extremo del espectro con más control y más responsabilidad operativa.',
		},
		b: {
			titulo: 'Cómputo serverless (sin servidores y pago por uso)',
			resumen:
				'No se aprovisionan ni administran servidores: el servicio ejecuta funciones o contenedores ante eventos, escala de forma automática y solo se paga por el uso. Se gana comodidad y elasticidad a cambio de menos control.',
		},
		diferenciaClave:
			'El eje es control frente a gestión: la máquina virtual da control total del sistema operativo y capacidad permanente; el cómputo serverless elimina la administración de servidores y cobra por uso, con menos control del entorno de ejecución.',
		cuandoA: [
			'Cuando necesitas instalar software específico, controlar el sistema operativo o mantener un proceso de larga duración.',
			'Cuando la carga es continua o el proceso necesita conservar estado en la propia máquina.',
		],
		cuandoB: [
			'Cuando la lógica responde a eventos, es corta y sin estado, y quieres escalar sin gestionar servidores.',
			'Cuando prefieres pagar solo por lo que se usa y no mantener capacidad encendida entre eventos.',
		],
		escenarioA:
			'Un equipo ejecuta un sistema heredado que exige una versión concreta del sistema operativo y procesos nocturnos de larga duración; lo mantiene en instancias que administra él mismo.',
		escenarioB:
			'Otro equipo procesa cada archivo subido con lógica breve y sin estado; usa cómputo serverless para no mantener servidores encendidos entre eventos.',
		preguntaIds: ['3.3-q11'],
		objetivos: ['3.3#1'],
	},
	{
		id: 'familias-instancia-compute-memory-storage',
		etiqueta: 'Familias de instancias: compute, memory y storage optimized',
		a: {
			titulo: 'Compute optimized y memory optimized',
			resumen:
				'Compute optimized prioriza la CPU: cálculo intensivo, procesamiento por lotes, codificación o servidores web muy exigentes. Memory optimized prioriza la RAM para conjuntos de datos activos, cachés y bases de datos en memoria.',
		},
		b: {
			titulo: 'Storage optimized',
			resumen:
				'Prioriza la entrada/salida de disco y el almacenamiento local de alto rendimiento. Es la familia para bases de datos con muchas lecturas y escrituras, sistemas de archivos de alto rendimiento y cargas intensivas de disco.',
		},
		diferenciaClave:
			'La familia se elige por el recurso limitante: CPU (compute optimized), memoria (memory optimized) o entrada/salida de disco (storage optimized). Elegir por tamaño en lugar de por perfil deja recursos sin aprovechar.',
		cuandoA: [
			'Cuando el cuello de botella es el cálculo o el conjunto de datos activo vive en memoria.',
			'Cuando la carga no depende del rendimiento de disco local ni de un almacenamiento local intensivo.',
		],
		cuandoB: [
			'Cuando el cuello de botella es la entrada/salida de disco o se necesita almacenamiento local de alto rendimiento.',
			'Cuando la carga realiza muchas operaciones de lectura y escritura sobre discos locales.',
		],
		escenarioA:
			'Un equipo ejecuta un trabajo de procesamiento por lotes que satura la CPU de forma constante; elige instancias compute optimized y no necesita memoria ni disco especiales.',
		escenarioB:
			'Otro equipo mantiene un clúster de datos con requisitos muy altos de IOPS y gran capacidad local; elige instancias storage optimized.',
		preguntaIds: ['3.3-q12'],
		objetivos: ['3.3#2'],
	},
];
