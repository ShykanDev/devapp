import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask43: TarjetaClfC02[] = [
	{
		id: '4.3-t1',
		taskId: '4.3',
		objetivos: ['4.3#7'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice que Basic Support basta para que AWS atienda un incidente de producción. ¿Qué le corriges?',
		reverso:
			'Basic Support viene incluido en toda cuenta, pero no abre casos técnicos: solo cubre facturación y cuenta. Para incidentes de producción con atención 24/7 y tiempos de respuesta comprometidos se necesita al menos AWS Business Support.',
	},
	{
		id: '4.3-t2',
		taskId: '4.3',
		objetivos: ['4.3#1', '4.3#6'],
		tipo: 'definicion',
		frente:
			'Asocia cada necesidad con su recurso oficial: comportamiento exacto de un servicio, patrón de migración e incidente de cuenta.',
		reverso:
			'Comportamiento exacto → documentación del servicio. Patrón de migración → AWS Prescriptive Guidance o un whitepaper. Incidente de cuenta → un caso en el AWS Support Center. Para dudas frecuentes, AWS Knowledge Center; para experiencia de la comunidad, AWS re:Post.',
	},
	{
		id: '4.3-t3',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'servicio',
		frente: '¿En qué categorías recomienda AWS Trusted Advisor?',
		reverso:
			'Optimización de costos, seguridad, tolerancia a fallos, rendimiento y cuotas de servicio. Solo recomienda: el cliente decide y aplica los cambios. Las comprobaciones completas requieren un plan de soporte de negocio o superior.',
	},
	{
		id: '4.3-t4',
		taskId: '4.3',
		objetivos: ['4.3#2', '4.3#7'],
		tipo: 'diferencia',
		frente: '¿Qué separa a AWS Developer Support de AWS Business Support?',
		reverso:
			'AWS Developer Support ofrece asistencia por correo en horario laboral y un contacto designado, pensada para desarrollo y pruebas. AWS Business Support añade atención 24/7 por teléfono, chat y correo, tiempos de respuesta más cortos y todas las comprobaciones de AWS Trusted Advisor.',
	},
	{
		id: '4.3-t5',
		taskId: '4.3',
		objetivos: ['4.3#3', '4.3#10', '4.3#12'],
		tipo: 'servicio',
		frente:
			'¿Qué papel cumplen un system integrator y un independent software vendor frente a AWS?',
		reverso:
			'El system integrator (consulting partner) diseña, migra y opera soluciones para los clientes. El independent software vendor (technology partner) construye productos de software y los comercializa, por ejemplo a través de AWS Marketplace.',
	},
	{
		id: '4.3-t6',
		taskId: '4.3',
		objetivos: ['4.3#9'],
		tipo: 'riesgo',
		frente: 'Detectas que una instancia de tu cuenta se usa para enviar spam. ¿A quién lo comunicas?',
		reverso:
			'Al equipo de AWS Trust and Safety, que gestiona las denuncias de uso abusivo de recursos de AWS, como spam, phishing o contenido ilícito. No es un canal de soporte técnico.',
	},
	{
		id: '4.3-t7',
		taskId: '4.3',
		objetivos: ['4.3#4', '4.3#13'],
		tipo: 'servicio',
		frente: '¿Qué diferencia hay entre el AWS Support Center y AWS Professional Services?',
		reverso:
			'El AWS Support Center es donde se abren y se siguen los casos de soporte de la cuenta. AWS Professional Services es un equipo de consultoría que acompaña proyectos concretos, como migraciones o modernizaciones.',
	},
	{
		id: '4.3-t8',
		taskId: '4.3',
		objetivos: ['4.3#11'],
		tipo: 'definicion',
		frente: 'Nombra tres beneficios de ser partner de AWS.',
		reverso:
			'Formación y certificación de partners, acceso a eventos de partners y descuentos por volumen en los programas que los ofrecen.',
	},
];
