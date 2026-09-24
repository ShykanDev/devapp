import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask38: ParConfusionClfC02[] = [
	{
		id: 'sns-vs-sqs-vs-eventbridge',
		etiqueta: 'Colas, notificaciones y eventos: Amazon SQS, Amazon SNS y Amazon EventBridge',
		a: {
			titulo: 'Entrega de mensajes: Amazon Simple Queue Service (Amazon SQS) y Amazon Simple Notification Service (Amazon SNS)',
			resumen:
				'Amazon SQS es una cola: el productor deposita el mensaje y un consumidor lo retira para procesarlo, lo que desacopla ambos lados y permite acumular trabajo y reintentar. Amazon SNS es publicación/suscripción: el mismo mensaje se difunde a muchos suscriptores al instante, el patrón de alertas y notificaciones.',
		},
		b: {
			titulo: 'Enrutado de eventos: Amazon EventBridge',
			resumen:
				'Bus de eventos que reacciona a eventos del sistema o de las aplicaciones y los enruta a destinos según reglas. El emisor no necesita conocer al receptor y se pueden filtrar y transformar los eventos antes de entregarlos.',
		},
		diferenciaClave:
			'Amazon SQS entrega trabajo a un consumidor mediante una cola; Amazon SNS difunde alertas y notificaciones a muchos suscriptores a la vez; Amazon EventBridge reacciona a eventos y los enruta según reglas. Cola, pub/sub y bus de eventos resuelven necesidades distintas.',
		cuandoA: [
			'Usa Amazon SQS para desacoplar componentes y encolar trabajo que se procesará a su ritmo, sin perder mensajes.',
			'Usa Amazon SNS para enviar alertas y notificaciones inmediatas a varios destinatarios a la vez.',
		],
		cuandoB: [
			'Usa Amazon EventBridge cuando debas reaccionar a eventos de servicios o aplicaciones y enrutarlos según reglas.',
			'Usa Amazon EventBridge cuando el emisor no deba conocer al receptor y necesites filtrar eventos por su contenido.',
		],
		escenarioA:
			'Una tienda publica cada cambio de pedido en un topic de Amazon SNS para avisar por correo y SMS a varios suscriptores y, a la vez, deja el análisis pesado en una cola de Amazon SQS que el analizador consume cuando puede.',
		escenarioB:
			'La misma tienda define reglas en Amazon EventBridge para que un pedido cancelado dispare automáticamente la devolución del stock y la notificación al equipo de logística, sin que el sistema de pedidos conozca a esos receptores.',
		preguntaIds: ['3.8-q2'],
		objetivos: ['3.8#1', '3.8#8'],
	},
	{
		id: 'appstream-vs-workspaces',
		etiqueta: 'Amazon AppStream 2.0 frente a Amazon WorkSpaces',
		a: {
			titulo: 'Amazon AppStream 2.0',
			resumen:
				'Entrega aplicaciones concretas por streaming. La aplicación se ejecuta en AWS y el usuario la usa desde su navegador o cliente sin instalarla ni recibir el sistema operativo del servidor.',
		},
		b: {
			titulo: 'Amazon WorkSpaces',
			resumen:
				'Entrega un escritorio virtual completo y persistente por usuario, con su sistema operativo y sus aplicaciones, accesible desde distintos dispositivos. Amazon WorkSpaces Secure Browser es la variante de navegador aislado.',
		},
		diferenciaClave:
			'Amazon AppStream 2.0 publica una aplicación individual; Amazon WorkSpaces publica un puesto de trabajo completo. Se elige según lo que deba presentarse en el equipo del usuario final: una app suelta o un escritorio entero.',
		cuandoA: [
			'Usa Amazon AppStream 2.0 cuando unos pocos usuarios necesiten una aplicación concreta sin instalarla en sus equipos.',
			'Usa Amazon AppStream 2.0 para dar acceso temporal a software especializado a contratistas con equipos modestos.',
		],
		cuandoB: [
			'Usa Amazon WorkSpaces cuando cada usuario necesite un escritorio corporativo completo y persistente.',
			'Usa Amazon WorkSpaces para reemplazar puestos de trabajo tradicionales manteniendo el sistema operativo y las aplicaciones de cada persona.',
		],
		escenarioA:
			'Una agencia publica su programa de diseño por Amazon AppStream 2.0 para que colaboradores externos lo usen desde un navegador, sin instalarlo en sus ordenadores personales.',
		escenarioB:
			'Un banco entrega a cada empleado un escritorio virtual de Amazon WorkSpaces al que accede desde cualquier dispositivo corporativo o personal, conservando su configuración entre sesiones.',
		preguntaIds: ['3.8-q13'],
		objetivos: ['3.8#5', '3.8#12'],
	},
	{
		id: 'codebuild-vs-codepipeline',
		etiqueta: 'AWS CodeBuild frente a AWS CodePipeline',
		a: {
			titulo: 'AWS CodeBuild',
			resumen:
				'Servicio de compilación. Ejecuta el build y las pruebas, y produce el artefacto desplegable, sin administrar servidores de compilación. Es una etapa que hace el trabajo.',
		},
		b: {
			titulo: 'AWS CodePipeline',
			resumen:
				'Servicio de orquestación de la canalización. Modela y coordina las etapas de extremo a extremo —origen, compilación, pruebas y despliegue— y decide el orden del flujo.',
		},
		diferenciaClave:
			'AWS CodeBuild construye y prueba; AWS CodePipeline coordina las etapas y el orden de la canalización. Uno ejecuta la construcción y el otro dirige el proceso completo.',
		cuandoA: [
			'Usa AWS CodeBuild cuando necesites compilar código y ejecutar pruebas para generar un artefacto.',
			'Usa AWS CodeBuild para construir y probar de forma gestionada, sin servidores de compilación propios.',
		],
		cuandoB: [
			'Usa AWS CodePipeline cuando necesites automatizar la entrega completa desde el repositorio hasta el despliegue.',
			'Usa AWS CodePipeline para coordinar varias etapas y herramientas dentro de un mismo flujo, incluyendo la compilación con AWS CodeBuild.',
		],
		escenarioA:
			'Cada vez que un desarrollador sube código, una etapa de AWS CodeBuild compila el proyecto y ejecuta las pruebas unitarias, y deja el artefacto listo para desplegar.',
		escenarioB:
			'La canalización de AWS CodePipeline toma el código del repositorio, invoca a AWS CodeBuild, ejecuta las pruebas de integración y despliega en producción, deteniéndose si una etapa falla.',
		preguntaIds: ['3.8-q10'],
		objetivos: ['3.8#4', '3.8#11'],
	},
];
