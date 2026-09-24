import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask31: GrupoTematico[] = [
	{
		id: '3.1-g1',
		titulo: 'Aprovisionar y operar: operaciones puntuales frente a procesos repetibles',
		objetivos: ['3.1#1', '3.1#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Aprovisionar es crear y configurar recursos; operar es mantenerlos, ajustarlos y responder a los cambios. En la nube de AWS ambas cosas admiten varios niveles de automatización:\n\n- **Acceso manual**: una persona crea los recursos desde la consola de administración, uno a uno, guiada por formularios. Es cómodo para explorar y para tareas puntuales, pero no deja un rastro reproducible.\n- **Acceso programático**: la interfaz de línea de comandos (CLI), los SDK y las API permiten ejecutar las mismas acciones desde scripts y herramientas, lo que habilita la automatización.\n- **Infraestructura como código (IaC)**: la infraestructura se describe en archivos versionados que se despliegan de forma repetible. La definición pasa a ser la fuente de verdad del entorno.\n- **Servicios gestionados de plataforma**: AWS Elastic Beanstalk aprovisiona y opera la infraestructura por el usuario a partir del código de la aplicación.\n\nEl segundo eje de decisión es temporal: una **operación puntual** resuelve una necesidad concreta y no se vuelve a ejecutar; un **proceso repetible** se define una vez y se replica cuantas veces haga falta. Cuanto más frecuente sea la tarea, más entornos implique y más personas dependan de ella, más conviene automatizarla.',
			},
			{
				tipo: 'comparacion',
				parId: 'una-vez-vs-repetible',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa operaciones puntuales para explorar un servicio, validar una idea o resolver una necesidad irrepetible.',
					'Usa procesos repetibles cuando el mismo despliegue deba reproducirse en varios entornos o con frecuencia (por ejemplo, desarrollo, pruebas y producción).',
					'Automatiza con IaC en cuanto el entorno tenga que ser auditable y reconstruible.',
				],
				noUsar: [
					'No documentes un despliegue recurrente solo con pasos manuales: se vuelve lento y propenso a errores.',
					'No automatices un cambio de una sola vez si el coste de definir el proceso supera el beneficio esperado.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad                              -> Enfoque\n- Probar un servicio por primera vez   -> Operación puntual en la consola\n- Repetir el mismo entorno cada semana -> Proceso repetible con IaC\n- Consultar recursos desde el terminal -> Comando puntual de la CLI\n- Reconstruir producción tras un fallo -> Proceso repetible versionado\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que automatizar es siempre la respuesta y que hacer una operación puntual a mano es «hacerlo mal».',
				correccion:
					'La elección depende de la frecuencia y de la necesidad de reproducibilidad. Una exploración o un ajuste único puede hacerse a mano; lo que no debe hacerse a mano es un despliegue que se repite, porque acumula errores y no deja rastro.',
			},
			{
				tipo: 'clave',
				items: [
					'Aprovisionar crea recursos; operar los mantiene y los ajusta.',
					'Las vías de trabajo son la consola, la CLI, los SDK, las API y la infraestructura como código.',
					'Operación puntual = una vez; proceso repetible = definido una vez y reejecutable.',
					'La frecuencia, el número de entornos y la necesidad de auditoría deciden entre manual y automatizado.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre aprovisionar y operar?',
			'¿Cuándo basta una operación puntual y cuándo conviene un proceso repetible?',
			'¿Qué gana un equipo al describir su infraestructura como código?',
		],
	},
	{
		id: '3.1-g2',
		titulo: 'Formas de acceder a los servicios de AWS',
		objetivos: ['3.1#2', '3.1#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Existen varias formas de acceder a los servicios de AWS y cada una encaja en un momento distinto:\n\n- **Consola de administración**: interfaz web gráfica, ideal para explorar, aprender y hacer tareas puntuales. No está pensada para repetir cientos de operaciones ni para dejar una definición versionada.\n- **Interfaz de línea de comandos (CLI)**: ejecuta acciones desde la terminal y permite encadenarlas en scripts. Es programática y adecuada para tareas repetitivas sencillas y para administración desde el equipo local.\n- **SDK**: bibliotecas que integran las llamadas a la API en el lenguaje de la aplicación, de modo que el propio programa cree y gestione recursos.\n- **API**: la interfaz base sobre la que se apoyan la consola, la CLI y los SDK; permite integraciones a medida.\n- **Infraestructura como código (IaC)**: describe el estado deseado de la infraestructura en archivos versionados (por ejemplo, con AWS CloudFormation) y lo despliega de forma repetible.\n\nNo son excluyentes: la consola sirve para entender, la CLI y los SDK para automatizar desde el código y la IaC para que el entorno sea reproducible y auditable.',
			},
			{
				tipo: 'comparacion',
				parId: 'iac-vs-consola-vs-cli',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nSituación                                -> Acceso recomendado\n- Aprender cómo funciona un servicio      -> Consola de administración\n- Tarea repetitiva desde la terminal      -> CLI con un script\n- La aplicación crea recursos al arrancar -> SDK\n- Reproducir un entorno entero igual      -> Infraestructura como código\n- Integración a medida entre sistemas     -> API\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que la consola es la única forma de trabajar con AWS o que la CLI y la infraestructura como código son lo mismo.',
				correccion:
					'La consola es solo una de las vías. La CLI ejecuta comandos, pero quien los escribe sigue siendo la persona; la infraestructura como código describe el estado deseado en archivos versionados. La CLI puede lanzar un despliegue, pero la IaC es la que define y reproduce el entorno.',
			},
			{
				tipo: 'clave',
				items: [
					'Formas de acceso: consola, CLI, SDK, API e infraestructura como código.',
					'La consola es visual y puntual; la CLI y los SDK son programáticos.',
					'La IaC describe el estado deseado en archivos versionados y es reproducible.',
					'La elección depende de quién ejecuta la tarea, de si se repite y de si debe quedar auditada.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencias hay entre la consola, la CLI, los SDK y la IaC?',
			'¿Cuándo conviene usar la consola y cuándo la infraestructura como código?',
			'¿Qué aporta versionar la definición de la infraestructura?',
		],
	},
	{
		id: '3.1-g3',
		titulo: 'Modelos de despliegue: nube, híbrido y on-premises',
		objetivos: ['3.1#3', '3.1#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El modelo de despliegue describe dónde se ejecuta la carga de trabajo y de quién es la infraestructura:\n\n- **Cloud (nube)**: los recursos se ejecutan en la nube de AWS, que aporta elasticidad, alcance global y pago por uso. El cliente no compra servidores.\n- **On-premises**: todo se ejecuta en instalaciones propias. Da control total sobre el hardware y los datos, pero exige comprar capacidad por adelantado y mantenerla.\n- **Híbrido**: combina ambos mundos. Parte del entorno permanece en las instalaciones por normativa, latencia o inversión ya realizada, y otra parte usa la nube de AWS.\n\nEl modelo no es solo una decisión técnica: suele venir impuesto por requisitos de cumplimiento, por la inversión existente o por la necesidad de escalar sin comprar hardware.',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa mantiene un sistema antiguo que debe seguir ejecutándose en su centro de datos por requisitos normativos, pero quiere llevar el análisis de datos y las aplicaciones nuevas a la nube de AWS.',
				analisis:
					'Es un caso claro de modelo híbrido: lo que no puede salir se queda en las instalaciones y lo nuevo se despliega en la nube. La conectividad entre ambos mundos se resuelve con un enlace dedicado que evita depender de internet público (por ejemplo, AWS Direct Connect).',
				servicio: 'AWS Direct Connect',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Elige cloud cuando no tengas ataduras de hardware y quieras elasticidad, alcance global y pago por uso.',
					'Elige híbrido cuando parte del entorno deba permanecer en las instalaciones por normativa, latencia o inversión existente.',
					'Elige on-premises cuando el control físico, el cumplimiento o una inversión ya amortizada lo exijan.',
				],
				noUsar: [
					'No elijas híbrido por inercia: añade complejidad de red, identidad y operación entre dos entornos.',
					'No asumas que la nube elimina toda responsabilidad: el cliente sigue siendo responsable de la seguridad de lo que despliega.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Confundir «híbrido» con «multinube» y creer que un modelo híbrido significa usar varios proveedores de nube a la vez.',
				correccion:
					'Híbrido combina instalaciones propias con la nube. Usar varios proveedores de nube es otra cosa (multinube) y no es lo mismo que el modelo híbrido de despliegue.',
			},
			{
				tipo: 'clave',
				items: [
					'Cloud: todo se ejecuta en la nube de AWS.',
					'On-premises: todo se ejecuta en instalaciones propias.',
					'Híbrido: parte en instalaciones propias y parte en la nube de AWS.',
					'El modelo lo determinan el cumplimiento, la inversión existente y los requisitos de latencia o escala.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué tres modelos de despliegue existen y en qué se diferencian?',
			'¿Qué situaciones empujan a un modelo híbrido?',
			'¿Qué implicaciones de coste y de control tiene quedarse on-premises?',
		],
	},
];
