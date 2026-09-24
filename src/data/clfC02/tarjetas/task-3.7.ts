import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask37: TarjetaClfC02[] = [
	{
		id: '3.7-t1',
		taskId: '3.7',
		objetivos: ['3.7#1', '3.7#3'],
		tipo: 'servicio',
		frente:
			'Relaciona cada servicio de IA/ML con la tarea que resuelve: Amazon Rekognition, Amazon Comprehend, Amazon Textract, Amazon Transcribe, Amazon Polly, Amazon Lex y Amazon SageMaker AI.',
		reverso:
			'Rekognition: imágenes y vídeo. Comprehend: lenguaje natural sobre texto. Textract: extraer texto y campos de documentos. Transcribe: voz a texto. Polly: texto a voz. Lex: asistentes conversacionales. SageMaker AI: construir, entrenar y desplegar modelos propios.',
	},
	{
		id: '3.7-t2',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'diferencia',
		frente: '¿Cuál es la diferencia entre Amazon Transcribe y Amazon Polly?',
		reverso:
			'Amazon Transcribe convierte voz en texto (speech-to-text); Amazon Polly convierte texto en voz (text-to-speech). Son las dos direcciones opuestas del mismo par voz/texto.',
	},
	{
		id: '3.7-t3',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'diferencia',
		frente:
			'Un compañero confunde Amazon Athena, AWS Glue y Amazon Kinesis. ¿Cómo los distingues?',
		reverso:
			'Amazon Athena consulta con SQL datos ya almacenados (por ejemplo, en Amazon S3); AWS Glue cataloga y ejecuta ETL para preparar esos datos; Amazon Kinesis ingiere y procesa datos en streaming, en tiempo real.',
	},
	{
		id: '3.7-t4',
		taskId: '3.7',
		objetivos: ['3.7#2', '3.7#4'],
		tipo: 'definicion',
		frente:
			'¿Qué servicio de analítica usarías para un almacén analítico, para buscar en registros, para procesamiento masivo y para un panel de negocio?',
		reverso:
			'Almacén analítico: Amazon Redshift. Búsqueda y análisis de registros: Amazon OpenSearch Service. Procesamiento de grandes volúmenes: Amazon EMR. Paneles y visualización: Amazon Quick Sight.',
	},
	{
		id: '3.7-t5',
		taskId: '3.7',
		objetivos: ['3.7#1', '3.7#3'],
		tipo: 'servicio',
		frente: '¿Cuándo eliges Amazon SageMaker AI en lugar de un servicio de IA ya entrenado?',
		reverso:
			'Cuando necesitas un modelo propio entrenado con tus datos y control sobre el entrenamiento y el despliegue. Si la tarea es estándar, un servicio ya entrenado la resuelve sin entrenar nada.',
	},
];
