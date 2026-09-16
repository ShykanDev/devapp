import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask41: GrupoTematico[] = [
	{
		id: '4.1-g1',
		titulo: 'Pilares de una IA responsable',
		objetivos: ['4.1#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La IA responsable se evalúa contra seis características que el examen pide reconocer:\n\n- **Bias (sesgo)**: el sistema favorece o perjudica a un grupo sin una razón técnica que lo justifique; suele venir de los datos o de cómo se formuló el objetivo.\n- **Fairness (equidad)**: el resultado trata de forma comparable a personas comparables, sin ventajas ni penalizaciones por atributos protegidos.\n- **Inclusividad**: el sistema funciona de forma razonable con distintos idiomas, acentos, capacidades y contextos, no solo con el grupo mayoritario.\n- **Robustness (robustez)**: mantiene un rendimiento aceptable ante entradas ruidosas, inusuales o manipuladas, sin degradarse por un cambio menor.\n- **Safety (seguridad)**: no provoca daño físico, legal o financiero y, cuando falla, lo hace de forma controlada y reversible.\n- **Veracidad**: lo que afirma se corresponde con fuentes verificables; no inventa ni presenta una suposición como un hecho.\n\nNinguna se mide «en general»: se comprueban con evidencia y por subgrupos, no con la impresión de una sola demostración.',
			},
			{ tipo: 'comparacion', parId: 'bias-vs-variance' },
			{
				tipo: 'escenario',
				situacion:
					'Un asistente de selección de personal ordena candidaturas y, tras unos meses, la tasa de avance de un grupo demográfico cae mientras la exactitud global no se mueve.',
				analisis:
					'El indicador agregado oculta el problema: hace falta **subgroup analysis** por grupo y auditorías humanas sobre una muestra. La equidad se corrige revisando los datos de entrenamiento y aplicando controles de salida, como **Amazon Bedrock Guardrails**, antes de automatizar decisiones que afectan a personas.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Dar por responsable un sistema porque no produce contenido ofensivo.',
				correccion:
					'La responsabilidad cubre sesgo, equidad, inclusividad, robustez, seguridad y veracidad. Un sistema puede ser inofensivo en el tono y, a la vez, inexacto o desigual entre subgrupos.',
			},
			{
				tipo: 'clave',
				items: [
					'Sesgo = trato desigual; equidad = trato comparable; inclusividad = cobertura de grupos y contextos.',
					'Robustez = resistencia a entradas adversas; seguridad = ausencia de daño y fallo controlado.',
					'Veracidad = correspondencia con fuentes verificables, no solo verosimilitud.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué característica falla si el modelo trata peor a un subgrupo aunque su exactitud global sea alta?',
			'¿Por qué la veracidad no se garantiza solo con que la respuesta parezca plausible?',
			'¿Qué diferencia hay entre robustez y seguridad?',
		],
	},
	{
		id: '4.1-g2',
		titulo: 'Herramientas para detectar y monitorear',
		objetivos: ['4.1#2', '4.1#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Identificar las características de la IA responsable es el primer paso; el segundo es medirlas con herramientas.\n\n- **Calidad de etiquetas (label quality)**: revisar si los datos de referencia son correctos y coherentes; un modelo aprende el error que se le enseña.\n- **Auditorías humanas**: revisión por muestreo de personas que juzgan corrección, tono y adecuación al caso.\n- **Subgroup analysis**: desagregar las métricas por grupo, idioma o segmento para ver lo que el promedio esconde.\n- **Guardrails**: políticas de entrada y salida que bloquean temas, filtran contenido y validan respuestas, por ejemplo **Amazon Bedrock Guardrails**.\n- **Monitoreo continuo**: vigilar métricas en producción y registrar cada interacción para detectar deriva, con alertas operativas en **Amazon CloudWatch**.\n\nIdentificar es describir el riesgo; monitorear es comprobar que sigue controlado con el tiempo.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando el sistema informa o toma decisiones que afectan a personas: mide por subgrupos.',
					'Cuando el contenido lo genera un modelo fundacional: valida y filtra la salida antes de publicarla.',
					'Cuando cambian las fuentes o el modelo: revisa etiquetas y repite la auditoría.',
				],
				noUsar: [
					'No uses una única métrica agregada como prueba de equidad: el promedio puede ocultar el daño.',
					'No sustituyas la revisión humana por guardrails: los controles automáticos reducen riesgo, no demuestran corrección.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Un asistente de atención al cliente empieza a responder con datos que no aparecen en los documentos internos.',
				analisis:
					'Primero se acotan las respuestas con **Amazon Bedrock Guardrails** y se valida la salida; después se revisa la calidad de las etiquetas y se hace una auditoría humana sobre una muestra para confirmar la veracidad. Sin medición, el problema solo se percibe cuando un cliente lo reporta.',
				servicio: 'Amazon Bedrock',
			},
			{ tipo: 'servicio', nombre: 'Amazon Bedrock' },
			{
				tipo: 'ejemplo',
				md: '```text\nPolítica de guardrail (esquema orientativo):\n  tema denegado: asesoramiento médico o legal\n  filtro de contenido: violencia, odio, insultos\n  validación de salida: JSON con "respuesta" y "fuentes"\n  acción al bloquear: mensaje neutro y registro del intento\n```',
			},
		],
		preguntasGuia: [
			'¿Qué herramienta desagrega las métricas por subgrupo en lugar de mirar solo el promedio?',
			'¿Por qué revisar la calidad de las etiquetas antes de confiar en una métrica?',
			'¿Qué aporta monitorear la salida después de publicar el sistema?',
		],
	},
	{
		id: '4.1-g3',
		titulo: 'Selección responsable del modelo y sostenibilidad',
		objetivos: ['4.1#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Elegir modelo es una decisión de responsabilidad, no solo de rendimiento. Prácticas responsables:\n\n- **Adecuación a la tarea**: usa el modelo más pequeño que cumpla el criterio de calidad; no todo problema necesita el mayor disponible.\n- **Reutilizar antes que reentrenar**: partir de un modelo fundacional y ajustarlo solo si aporta una mejora medible reduce coste y consumo.\n- **Consideraciones ambientales y sostenibilidad**: entrenar e inferir consumen energía y agua de refrigeración; modelos eficientes, prompts más cortos y recursos que se apagan en reposo reducen la huella.\n- **Región y ciclo de vida**: procesar donde corresponde y desmantelar lo que ya no se usa.\n- **Documentación**: registrar la decisión, los datos y las limitaciones conocidas.\n\nLa sostenibilidad no se juzga por una llamada, sino por el consumo agregado del sistema.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Elige el modelo más pequeño que supere tu criterio de calidad medido.',
					'Reutiliza un modelo fundacional antes de plantear un entrenamiento propio.',
					'Registra con **Amazon SageMaker Model Cards** los datos, el uso previsto y las limitaciones.',
				],
				noUsar: [
					'No elijas el modelo más grande «por si acaso»: multiplica coste y consumo sin garantizar mejor resultado.',
					'No reentrenes sin datos curados ni una métrica que justifique el gasto energético.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nComparativa de selección (mismo criterio de calidad):\n  opción A: modelo pequeño, menos llamadas, menor huella\n  opción B: modelo grande, más tokens, mayor coste y energía\n  decisión: A si supera el umbral de calidad por subgrupo\n```',
			},
		],
		preguntasGuia: [
			'¿Por qué el modelo más grande no es automáticamente la opción más responsable?',
			'¿Qué prácticas reducen el consumo energético de un sistema de IA generativa?',
			'¿Qué documentarías al justificar la elección de un modelo?',
		],
	},
	{
		id: '4.1-g4',
		titulo: 'Riesgos legales de la IA generativa',
		objetivos: ['4.1#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Trabajar con IA generativa expone a riesgos legales y de confianza que conviene nombrar antes de desplegar:\n\n- **Reclamos por infracción de propiedad intelectual**: la salida puede reproducir material protegido si se entrenó o se citó sin licencia.\n- **Salidas sesgadas**: una decisión automatizada desigual puede derivar en reclamaciones por discriminación.\n- **Pérdida de confianza del cliente**: una respuesta inventada o un dato expuesto daña la reputación y la relación comercial.\n- **Riesgo para el usuario final**: información errónea sobre salud, finanzas o seguridad puede causar un daño real.\n- **Alucinaciones**: el modelo afirma con seguridad hechos que no son ciertos.\n\nEl **AWS shared responsibility model** reparte las obligaciones: AWS protege la infraestructura y el cliente responde del uso, los datos y la verificación de la salida.',
			},
			{
				tipo: 'errorComun',
				error: 'Suponer que toda salida del modelo es original y libre de derechos porque la generó una máquina.',
				correccion:
					'La originalidad no está garantizada: conviene revisar las licencias de los datos, filtrar coincidencias y documentar el uso previsto antes de publicar contenido.',
			},
			{
				tipo: 'clave',
				items: [
					'Infracción de propiedad intelectual, sesgo, pérdida de confianza, riesgo del usuario final y alucinaciones son riesgos distintos que se mitigan por separado.',
					'La verificación humana y el filtrado de salida reducen el riesgo, no lo eliminan.',
					'El proveedor protege la infraestructura; el cliente responde del uso.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué riesgo legal aparece si la salida reproduce una obra protegida?',
			'¿Cómo se reduce el riesgo de una alucinación que el usuario toma como cierta?',
			'¿Qué obligaciones mantiene el cliente bajo el modelo de responsabilidad compartida?',
		],
	},
	{
		id: '4.1-g5',
		titulo: 'Características de los datasets',
		objetivos: ['4.1#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La calidad de un sistema empieza en el conjunto de datos. Las características que se evalúan son:\n\n- **Inclusividad**: los datos representan a las personas e idiomas que el sistema atenderá.\n- **Diversidad**: cubren variaciones reales de los casos, no solo el caso promedio.\n- **Fuentes curadas**: el origen está identificado, es legítimo y tiene licencia.\n- **Balance**: las clases relevantes aparecen en proporciones que no sesgan el aprendizaje.\n- **Procedencia y vigencia**: se documenta de dónde vienen y si siguen representando el presente.\n\nUn dataset desbalanceado no se arregla con más volumen: se arregla con datos representativos del subgrupo que falta.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Antes de entrenar o ajustar: audita sesgo y balance por subgrupo.',
					'Al definir el conjunto de evaluación: sepáralo del de entrenamiento y mantenlo representativo.',
				],
				noUsar: [
					'No añadas datos «de relleno» para subir el volumen: diluyen la señal.',
					'No uses datos históricos sesgados sin corregir la etiqueta que reproduce el sesgo.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRevisión de un dataset de solicitudes de crédito:\n  subgrupo A: 48 000 filas\n  subgrupo B: 1 200 filas  -> infrarrepresentado\n  acción: recopilar más casos de B o reponderar antes de entrenar\n```',
			},
		],
		preguntasGuia: [
			'¿Qué característica del dataset se incumple si un subgrupo apenas aparece?',
			'¿Por qué el volumen total no garantiza un dataset equilibrado?',
			'¿Qué significa que las fuentes estén curadas?',
		],
	},
	{
		id: '4.1-g6',
		titulo: 'Sesgo, varianza y generalización',
		objetivos: ['4.1#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El error de un modelo se descompone en **sesgo** y **varianza**, y los dos fallos se corrigen en direcciones opuestas:\n\n- **Sesgo alto (underfitting)**: el modelo es demasiado simple para la relación real; falla tanto en entrenamiento como en datos nuevos.\n- **Varianza alta (overfitting)**: el modelo se ajusta al ruido del entrenamiento; acierta en el histórico y falla al generalizar.\n- **Efecto sobre grupos demográficos**: si un subgrupo está poco representado, el modelo lo trata peor aunque la exactitud media suba.\n- **Imprecisión**: ambos extremos producen respuestas incorrectas, pero por motivos distintos y con correcciones distintas.\n\nDiagnóstico: compara el error de entrenamiento con el de validación y desagrega por subgrupo. Una brecha grande entre ambos apunta a varianza alta; un error alto y parecido en los dos apunta a sesgo alto.',
			},
			{ tipo: 'comparacion', parId: 'overfitting-vs-underfitting' },
			{
				tipo: 'escenario',
				situacion:
					'Un modelo de riesgo predice con gran exactitud sobre el histórico de entrenamiento, pero al desplegarlo en una región nueva comete muchos más errores.',
				analisis:
					'La brecha entre entrenamiento y producción apunta a **varianza alta**: el modelo aprendió particularidades del histórico que no se repiten. La salida no es pedir un modelo mayor, sino más datos representativos, regularización y validación por subgrupo con **Amazon SageMaker AI** antes de dar la métrica por buena.',
				servicio: 'Amazon SageMaker AI',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que un error bajo en el conjunto de entrenamiento significa un modelo mejor.',
				correccion:
					'El rendimiento relevante es el de datos que el modelo no vio. Compara entrenamiento contra validación y mide por subgrupo: un modelo con overfitting brilla en entrenamiento y falla al generalizar.',
			},
			{
				tipo: 'clave',
				items: [
					'Sesgo = modelo demasiado simple; varianza = modelo demasiado sensible al ruido.',
					'Overfitting memoriza; underfitting no aprende la señal.',
					'La decisión se toma comparando entrenamiento contra validación y midiendo por subgrupo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué componente del error domina en un modelo que falla igual en entrenamiento y en producción?',
			'¿Cómo se detecta que un modelo está memorizando el histórico?',
			'¿Por qué una métrica global alta puede esconder un daño a un subgrupo?',
		],
	},
];
