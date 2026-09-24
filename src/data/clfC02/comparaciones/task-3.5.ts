import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask35: ParConfusionClfC02[] = [
	{
		id: 'vpn-vs-direct-connect',
		etiqueta: 'AWS VPN vs AWS Direct Connect',
		a: {
			titulo: 'AWS VPN',
			resumen:
				'Túnel cifrado sobre internet entre la red local y la VPC. Se despliega rápido, tiene coste bajo y sirve para respaldo, tráfico puntual o bajo volumen. El rendimiento depende de las variaciones de internet.',
		},
		b: {
			titulo: 'AWS Direct Connect',
			resumen:
				'Enlace dedicado y privado que no atraviesa internet. Ofrece ancho de banda y latencia más estables y predecibles, a cambio de contratar la conexión con un proveedor y esperar su aprovisionamiento.',
		},
		diferenciaClave:
			'La VPN viaja cifrada por internet y la conexión dedicada usa un enlace privado. La VPN prioriza rapidez de despliegue y coste; Direct Connect prioriza estabilidad, ancho de banda y privacidad del tráfico.',
		cuandoA: [
			'Cuando necesitas conectar la red local con AWS en poco tiempo y con presupuesto ajustado.',
			'Cuando quieres un enlace de respaldo del enlace principal o cubrir tráfico puntual y de bajo volumen.',
		],
		cuandoB: [
			'Cuando transfieres grandes volúmenes de datos de forma recurrente y necesitas ancho de banda estable.',
			'Cuando la latencia predecible y el tráfico que no atraviesa internet son requisitos del negocio o del cumplimiento.',
		],
		escenarioA:
			'Una empresa configura un túnel cifrado desde su oficina hacia la VPC para que los administradores accedan a los recursos internos mientras termina de definir su enlace permanente.',
		escenarioB:
			'La misma empresa contrata un enlace dedicado con un proveedor para su tráfico de producción y recurrente, y conserva el túnel cifrado como respaldo del enlace dedicado.',
		preguntaIds: ['3.5-q4'],
		objetivos: ['3.5#5'],
	},
	{
		id: 'security-group-vs-nacls',
		etiqueta: 'Security groups vs network ACLs',
		a: {
			titulo: 'Security groups',
			resumen:
				'Cortafuegos con estado asociado a recursos como instancias. Solo admite reglas de permiso y la respuesta de una conexión permitida vuelve sin regla inversa.',
		},
		b: {
			titulo: 'Network ACLs',
			resumen:
				'Cortafuegos sin estado asociado a una subred. Admite reglas de permiso y de denegación, se evalúa por número de regla y exige definir el tráfico de respuesta.',
		},
		diferenciaClave:
			'El security group filtra a nivel de recurso y es con estado; el network ACL filtra a nivel de subred y es sin estado. Son capas complementarias y el tráfico debe superar ambas.',
		cuandoA: [
			'Cuando quieres controlar qué tráfico puede entrar y salir de una instancia o recurso concreto.',
			'Cuando prefieres reglas simples de permiso sin gestionar el tráfico de respuesta.',
		],
		cuandoB: [
			'Cuando necesitas una barrera a nivel de subred que aplique a todos los recursos de esa subred.',
			'Cuando requieres reglas explícitas de denegación además de las de permiso.',
		],
		escenarioA:
			'Un equipo abre el puerto de una aplicación en el security group de la instancia y comprueba que la respuesta de la conexión vuelve sin añadir una regla adicional.',
		escenarioB:
			'El mismo equipo añade una regla en el network ACL de la subred para denegar el tráfico de un rango concreto antes de que llegue a los recursos.',
		preguntaIds: ['3.5-q7'],
		objetivos: ['3.5#3'],
	},
];
