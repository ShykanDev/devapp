import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask33: GrupoTematico[] = [
	{
		id: '3.3-g1',
		titulo: 'Entrenamiento, ajuste y uso: qué hace cada etapa',
		objetivos: ['3.3#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El entrenamiento de un **modelo fundacional (FM)** se organiza en etapas que se distinguen por el tipo de datos, el coste y el objetivo:\n\n- **Pre-training**: el modelo aprende estructura y patrones generales a partir de grandes volúmenes de datos **sin etiquetar**. Es la fase más larga y costosa, y la que da al modelo su conocimiento de base.\n- **Fine-tuning**: se parte del modelo ya preentrenado y se ajusta con un conjunto **más pequeño y específico** para una tarea, un dominio o un estilo de respuesta.\n- **Continuous pre-training (pre-entrenamiento continuo)**: se sigue exponiendo el modelo a grandes volúmenes de datos nuevos sin etiquetar para actualizar su conocimiento de un dominio o idioma sin rehacer el entrenamiento desde cero.\n- **Distillation (destilación)**: un modelo grande actúa como profesor y su comportamiento se transfiere a uno más pequeño, que gana latencia y coste a cambio de parte de su capacidad.\n\nDespués del entrenamiento llega la **inferencia**: el entrenamiento modifica los pesos una vez; la inferencia solo los aplica en cada uso y se paga por consumo.',
			},
			{
				tipo: 'comparacion',
				parId: 'training-vs-inference',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Habla de **pre-training** cuando el objetivo sea la capacidad general del modelo y dispongas de datos masivos sin etiquetar.',
					'Habla de **fine-tuning** cuando el conocimiento general ya baste y lo que falte sea comportamiento, formato o criterio de un dominio.',
					'Habla de **continuous pre-training** cuando el dominio tenga documentación nueva y abundante que aún no está etiquetada.',
					'Habla de **distillation** cuando el objetivo sea reducir latencia y coste de inferencia conservando parte de la calidad.',
				],
				noUsar: [
					'No llames **fine-tuning** a cualquier personalización: añadir contexto o ejemplos en el prompt no cambia los pesos del modelo.',
					'No uses **continuous pre-training** como sinónimo de reentrenar desde cero: se parte del modelo existente y se conserva la mayor parte de su conocimiento.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRuta de decisión:\n1) ¿Falta capacidad general del modelo? -> pre-training (datos masivos sin etiquetar).\n2) ¿Falta comportamiento, formato o criterio de dominio? -> fine-tuning.\n3) ¿Hay documentación nueva y abundante sin etiquetar? -> continuous pre-training.\n4) ¿Necesitas menos latencia y menor coste por respuesta? -> distillation.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre pre-training, fine-tuning y continuous pre-training?',
			'¿Qué etapa cambia los pesos del modelo y cuál solo los aplica?',
			'¿Para qué sirve la destilación y qué se sacrifica a cambio?',
		],
	},
	{
		id: '3.3-g2',
		titulo: 'Métodos de fine-tuning para adaptar un FM',
		objetivos: ['3.3#1', '3.3#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Adaptar un FM ya preentrenado no es una sola técnica, sino una familia de métodos:\n\n- **Instruction tuning**: se entrena al modelo con pares de instrucción y respuesta para que siga órdenes, respete formatos y mantenga el tono esperado. Es lo que convierte un generador de texto en un asistente útil.\n- **Adaptación a un dominio específico**: se ajusta con ejemplos representativos de un sector o de una organización (informes técnicos, contratos, historiales) para que el modelo use su vocabulario y su criterio.\n- **Transfer learning**: se aprovecha lo aprendido en un modelo o una tarea previa y se ajusta a la tarea nueva con muchos menos ejemplos de los que exigiría entrenar desde cero. Es la razón por la que el fine-tuning es viable con presupuestos pequeños.\n- **Continuous pre-training**: se expone el modelo a grandes volúmenes de documentación nueva **sin etiquetar** para incorporar conocimiento de dominio, antes o en lugar de un ajuste supervisado.\n\nDos advertencias que el examen repite: el fine-tuning cambia **comportamiento y estilo**, no garantiza hechos actualizados; y estos métodos se combinan entre sí, no se excluyen.',
			},
			{
				tipo: 'comparacion',
				parId: 'pre-training-vs-fine-tuning',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una aseguradora quiere que su asistente interno redacte valoraciones con la estructura exacta de sus informes y use la terminología de sus pólizas. El modelo genérico redacta bien, pero no sigue el formato ni acierta con los términos.',
				analisis:
					'No falta conocimiento general: falta comportamiento específico. El equipo reúne ejemplos de instrucción y respuesta con informes ya aprobados, ajusta el modelo con **instruction tuning** sobre su propio corpus y reserva un conjunto de validación para comprobar que el formato y el vocabulario se mantienen en casos nuevos. Un ajuste así no sustituye a la recuperación de datos vigentes: las condiciones de cada póliza se consultan en el contexto de la consulta.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que el fine-tuning es la vía para inyectar conocimiento factual que cambia con frecuencia (precios, normativa, catálogo).',
				correccion:
					'El ajuste fija comportamiento, formato y criterio de dominio con ejemplos estables. Para datos que cambian a menudo se recupera la información vigente en el momento de la consulta y se entrega como contexto; además, un ajuste no documenta la procedencia del dato, mientras que un catálogo gobernado sí.',
			},
			{
				tipo: 'clave',
				items: [
					'Instruction tuning = seguir órdenes y formatos; adaptación al dominio = vocabulario y criterio del sector.',
					'Transfer learning permite reutilizar el modelo preentrenado con pocos ejemplos propios.',
					'Continuous pre-training incorpora documentación sin etiquetar; el fine-tuning supervisado necesita ejemplos etiquetados.',
					'El fine-tuning no actualiza hechos por sí solo ni sustituye a la recuperación en contexto.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon SageMaker JumpStart',
			},
		],
		preguntasGuia: [
			'¿Cuándo conviene instruction tuning y cuándo adaptar el modelo a un dominio?',
			'¿Qué método permite incorporar documentación sin etiquetar?',
			'¿Por qué el fine-tuning no es la respuesta a datos que cambian cada semana?',
		],
	},
	{
		id: '3.3-g3',
		titulo: 'Preparación de datos, gobernanza y RLHF',
		objetivos: ['3.3#2', '3.3#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La calidad del ajuste la determina el conjunto de datos, no el número de iteraciones. Los elementos que se evalúan son:\n\n- **Curaduría**: eliminar duplicados, ruido y ejemplos contradictorios; revisar licencias y procedencia; documentar qué se excluye y por qué.\n- **Gobernanza**: clasificar la información, controlar el acceso, retirar o enmascarar datos personales, definir la retención y dejar trazabilidad del origen de cada ejemplo.\n- **Tamaño**: no existe una cifra universal; depende de la tarea y de la capacidad del modelo. Un conjunto pequeño pero limpio y representativo supera a uno grande con etiquetas incoherentes.\n- **Etiquetado**: una rúbrica escrita, anotadores formados y una muestra revisada miden la calidad de las etiquetas antes de entrenar.\n- **Representatividad**: el conjunto debe reflejar la variedad de casos reales, incluidos los minoritarios y los límites. Si un grupo está subrepresentado, el modelo aprenderá ese sesgo.\n- **RLHF** (reinforcement learning from human feedback): los evaluadores ordenan o puntúan varias respuestas del modelo; esas preferencias entrenan un modelo de recompensa que guía el ajuste posterior, alineando la salida con lo que las personas consideran útil, seguro y con el tono adecuado.\n\nAntes de decidir entre ajuste supervisado y continuous pre-training conviene mirar cuánta documentación nueva y sin etiquetar existe: esa decisión condiciona el volumen y el tipo de datos que hay que preparar.',
			},
			{
				tipo: 'comparacion',
				parId: 'pre-training-vs-fine-tuning',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo de soporte reúne cinco años de conversaciones para ajustar su asistente. La mayoría de los casos proviene de un solo producto, falta cubrir dos idiomas y los datos personales no se han depurado.',
				analisis:
					'El conjunto no es representativo ni está gobernado: el modelo tendería a reproducir el sesgo hacia ese producto y podría memorizar información personal. Antes de ajustar hay que curar y clasificar las conversaciones, eliminar o enmascarar los datos personales, equilibrar los casos por producto e idioma y documentar el origen y las limitaciones del conjunto (por ejemplo, con **Amazon SageMaker Model Cards**). La medición posterior con **Amazon Bedrock Model Evaluation** permite comprobar si el sesgo se ha corregido.',
				servicio: 'Amazon SageMaker AI',
			},
			{
				tipo: 'errorComun',
				error: 'Compensar un etiquetado inconsistente añadiendo más ejemplos.',
				correccion:
					'El volumen no corrige el ruido: lo multiplica. Primero se fija la rúbrica de etiquetado, se mide la coincidencia entre anotadores y se revisan los casos dudosos; solo después se decide si hace falta más volumen.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'**Ajuste supervisado** cuando puedas expresar el criterio con pares claros de entrada y salida correcta.',
					'**RLHF** cuando el criterio sea difícil de escribir como regla (tono, utilidad, seguridad) y puedas comparar respuestas entre sí.',
					'**Continuous pre-training** cuando el dominio tenga mucha documentación sin etiquetar y solo necesites que el modelo la incorpore.',
				],
				noUsar: [
					'No uses RLHF si no puedes definir quién evalúa ni con qué criterio: las preferencias sin rúbrica introducen sesgos nuevos.',
					'No ajustes con datos que no tengas derecho a usar ni sin plan de retención y borrado.',
				],
			},
			{
				tipo: 'clave',
				items: [
					'Curaduría, gobernanza, tamaño, etiquetado y representatividad se revisan antes de entrenar, no después.',
					'Representatividad defectuosa = sesgo aprendido; etiquetado inconsistente = error aprendido.',
					'RLHF convierte preferencias humanas comparables en señal de entrenamiento.',
					'Gobernar el dato incluye procedencia, acceso, datos personales y retención.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué revisarías en un conjunto de datos antes de usarlo para fine-tuning?',
			'¿Por qué un dataset no representativo es un problema de negocio y no solo técnico?',
			'¿Qué aporta la retroalimentación humana en RLHF frente al etiquetado supervisado?',
		],
	},
];
