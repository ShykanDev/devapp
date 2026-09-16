import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask22: GrupoTematico[] = [
	{
		id: '2.2-g1',
		titulo: 'Ventajas de GenAI para el negocio',
		objetivos: ['2.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'GenAI aporta valor cuando la tarea admite variación y lenguaje natural. Sus ventajas características son:\n\n- **Adaptabilidad**: el mismo modelo resuelve tareas distintas cambiando solo la instrucción, sin reentrenar.\n- **Capacidad conversacional**: mantiene el contexto entre turnos y responde en lenguaje natural.\n- **Generación de contenido**: produce borradores, resúmenes, código, imágenes o audio.\n- **Responsividad**: permite pasar de una idea a un prototipo funcional sin construir un modelo desde cero.\n\nSon ventajas de **capacidad**, no garantías de exactitud: el mismo mecanismo que genera contenido flexible puede producir contenido incorrecto con apariencia de certeza.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'En tareas de lenguaje o contenido abierto: resumir, redactar, reescribir, traducir, conversar.',
					'Cuando el criterio de éxito admite variación y una persona puede revisar el resultado.',
					'En fases de prototipo, para validar una idea antes de invertir en un modelo propio.',
				],
				noUsar: [
					'Cuando se exige un resultado exacto y verificable sin revisión (cálculos definitivos, decisiones legales).',
					'Para sustituir datos que ya viven en una base de datos estructurada y determinista.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nUn mismo asistente, con el mismo modelo:\n- "Resume este contrato en tres puntos" -> tarea de síntesis\n- "Redacta una respuesta cordial al cliente" -> generación de contenido\n- "Responde las dudas del usuario sobre el pedido" -> conversación\nNo se reentrenó nada: cambió la instrucción.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Adaptabilidad = un modelo, muchas tareas; solo cambia la instrucción.',
					'La conversación y la generación de contenido son las ventajas que más se citan en negocio.',
					'Ventaja de capacidad no equivale a exactitud garantizada: exige validación y revisión.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué ventaja de GenAI explica que un mismo modelo sirva para tareas distintas?',
			'¿Cuándo la capacidad conversacional aporta valor de negocio real?',
			'¿Por qué la generación de contenido exige revisión humana?',
		],
	},
	{
		id: '2.2-g2',
		titulo: 'Limitaciones: alucinaciones, interpretabilidad, inexactitud y no determinación',
		objetivos: ['2.2#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las limitaciones de GenAI no son un solo problema, sino cuatro distintos:\n\n- **Alucinación**: el modelo inventa hechos, citas o capacidades y los presenta con seguridad.\n- **Inexactitud**: reproduce mal un dato real (importe, fecha, etiqueta) o incumple el formato pedido.\n- **Falta de interpretabilidad**: no puede justificar de forma verificable cómo llegó a la respuesta.\n- **No determinación**: la misma entrada puede producir salidas distintas entre llamadas.\n\nLas tres primeras afectan a la **confianza** en la respuesta; la no determinación afecta a la **reproducibilidad**. Todas obligan a validar y medir antes de automatizar decisiones.',
			},
			{
				tipo: 'comparacion',
				parId: 'hallucination-vs-inaccuracy',
			},
			{
				tipo: 'errorComun',
				error: 'Llamar «alucinación» a cualquier error del modelo, incluidos los datos mal copiados de un documento real.',
				correccion:
					'Distingue el contenido inventado (alucinación) del dato real mal reproducido (inexactitud): la mitigación y la auditoría no son las mismas.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRespuesta del modelo: "El servicio admite hasta 10 versiones simultáneas\n(según la documentación oficial, sección 4.2)."\nRiesgo: la cifra y la sección pueden no existir. Antes de publicar:\n- verificar la fuente citada\n- validar el formato de salida\n- repetir la consulta para observar variación\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Alucinación = contenido inventado; inexactitud = dato real mal reproducido.',
					'Falta de interpretabilidad = no hay justificación verificable de la respuesta.',
					'No determinación = la misma entrada no garantiza la misma salida; prueba repitiendo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre una alucinación y una inexactitud?',
			'¿Por qué la no determinación complica las pruebas de un sistema generativo?',
			'¿Qué significa que un modelo carezca de interpretabilidad?',
		],
	},
	{
		id: '2.2-g3',
		titulo: 'Selección de un modelo GenAI: factores y compensaciones',
		objetivos: ['2.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Elegir un modelo es un ejercicio de requisitos, no de tamaño. Los factores que se cruzan son:\n\n- **Tipo de modelo y capacidades**: solo texto o multimodal, longitud de entrada y de salida.\n- **Requisitos de rendimiento**: exactitud por tarea, idioma y dominio.\n- **Restricciones y cumplimiento**: residencia del dato, controles de acceso y normativa aplicable.\n- **Coste y latencia**: gasto por token y tiempo de respuesta que tolera el caso de uso.\n- **Complejidad**: un modelo mayor exige más recursos y es más difícil de justificar.\n\nEl cumplimiento y la residencia del dato pueden descartar candidatos **antes** de comparar coste o latencia, y ningún factor decide solo: la elección se pondera y se comprueba con evaluación propia.',
			},
			{
				tipo: 'comparacion',
				parId: 'latency-vs-cost',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Define primero el requisito (latencia, coste, idioma, cumplimiento) y después filtra los modelos que lo cumplan.',
					'Prueba los candidatos con tus propios casos y datos, no solo con la ficha del modelo.',
					'Documenta la decisión: por qué ese modelo y bajo qué condiciones se revisaría.',
				],
				noUsar: [
					'No elijas por tamaño o popularidad si un modelo menor cumple el requisito con menor coste.',
					'No asumas que el modelo más reciente es el más adecuado para un dominio regulado.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCaso: asistente en vivo para clientes.\nRequisito principal: latencia baja y coste predecible.\nCandidatos: modelo pequeño multilingüe frente a modelo grande.\nDecisión: partir del pequeño, medir exactitud con casos reales\ny escalar solo si la calidad no alcanza el criterio definido.\n```',
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock',
			},
		],
		preguntasGuia: [
			'¿Qué factores se ponderan al elegir un modelo generativo?',
			'¿Cómo cambia la elección entre un asistente en vivo y un proceso por lotes?',
			'¿Por qué el cumplimiento puede descartar un modelo técnicamente superior?',
		],
	},
	{
		id: '2.2-g4',
		titulo: 'Valor de negocio y métricas de una aplicación GenAI',
		objetivos: ['2.2#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Una aplicación GenAI se justifica por su **valor de negocio**, no por la calidad aislada del modelo. Las métricas se agrupan así:\n\n- **Valor económico**: ROI, eficiencia, tasa de conversión, ingresos medios por usuario y valor de vida del cliente.\n- **Calidad de la tarea**: exactitud y rendimiento entre dominios distintos (cross-domain).\n- **Coste operativo**: gasto por interacción o por tarea completada.\n\nLas métricas técnicas explican **cómo** funciona el sistema; las de negocio explican **si merece la pena**. Un sistema más exacto que el proceso manual, pero más caro por operación, puede destruir valor.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Acuerda la métrica de negocio antes de construir: qué mejora y cómo se mide.',
					'Cruza siempre calidad con coste: exactitud, ROI y coste por interacción juntos.',
					'Compara el resultado con la línea base (proceso manual o versión anterior).',
				],
				noUsar: [
					'No uses solo métricas técnicas de modelo para decidir una inversión.',
					'No presentes una mejora de exactitud sin su efecto en coste, conversión o satisfacción.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nAntes de generalizar un asistente:\n- línea base: tiempo medio de resolución manual y coste por caso\n- tras el asistente: la misma métrica, más eficiencia y coste por interacción\n- decisión: generalizar solo si el valor medido supera el coste del cambio\n```',
			},
			{
				tipo: 'clave',
				items: [
					'ROI, eficiencia, conversión, ingresos por usuario y valor de vida del cliente son métricas de negocio, no de modelo.',
					'La exactitud y el rendimiento cross-domain describen la calidad técnica que sostiene ese valor.',
					'Sin línea base no hay forma de atribuir el valor al sistema GenAI.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué métricas de negocio justifican una aplicación GenAI?',
			'¿Por qué hay que cruzar la exactitud con el coste por interacción?',
			'¿Qué papel juega la línea base al medir el ROI?',
		],
	},
];
