import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask52: TarjetaAifC01[] = [
	{
		id: '5.2-t1',
		taskId: '5.2',
		objetivos: ['5.2#1'],
		tipo: 'servicio',
		frente:
			'Un auditor pregunta quién eliminó una tabla la semana pasada y qué cambios de configuración tuvo antes del borrado. ¿Qué servicio aporta cada evidencia?',
		reverso:
			'La autoría y el momento del borrado están en la traza de AWS CloudTrail; la evolución de la configuración está en el historial de AWS Config. Las métricas de observabilidad no sustituyen a ninguna de las dos.',
	},
	{
		id: '5.2-t2',
		taskId: '5.2',
		objetivos: ['5.2#1'],
		tipo: 'servicio',
		frente:
			'Antes de una certificación externa, el equipo necesita los informes y acuerdos de cumplimiento del proveedor de nube. ¿Dónde los obtiene y qué no debe confundir?',
		reverso:
			'En AWS Artifact. No es la evidencia de lo que hizo su propia organización: eso lo aportan la traza de auditoría y el historial de configuración de los recursos.',
	},
	{
		id: '5.2-t3',
		taskId: '5.2',
		objetivos: ['5.2#2'],
		tipo: 'riesgo',
		frente:
			'Un equipo borra los datos de clientes a los 90 días «por privacidad», pero la normativa exige conservarlos siete años y que permanezcan en el país de origen. ¿Qué error de gobernanza ha cometido?',
		reverso:
			'Ha tratado residencia y retención como un único requisito. La residencia fija dónde se almacena y se procesa el dato; la retención fija cuánto se conserva y cuándo se elimina. Cada una exige su propia política y su propia evidencia.',
	},
	{
		id: '5.2-t4',
		taskId: '5.2',
		objetivos: ['5.2#2'],
		tipo: 'metrica',
		frente:
			'Quieres demostrar a un auditor que el ciclo de vida del dato se cumple de verdad y no solo sobre el papel. ¿Qué señal revisas?',
		reverso:
			'El porcentaje de objetos que expiran en la fecha definida y el registro de su eliminación. Una política de retención sin evidencia de borrado no demuestra cumplimiento.',
	},
	{
		id: '5.2-t5',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'tradeoff',
		frente:
			'El equipo propone revisar las políticas de IA generativa una vez al año porque «cambian poco». ¿Qué consecuencia conviene sopesar antes de aceptarlo?',
		reverso:
			'Ahorra esfuerzo de revisión, pero la política puede quedar desactualizada ante cambios de modelo, datos o regulación. Una cadencia más corta para los casos de mayor riesgo reduce ese tiempo de exposición.',
	},
	{
		id: '5.2-t6',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'riesgo',
		frente:
			'Un caso de uso generativo trata datos regulados y el equipo le aplica los mismos controles genéricos que a cualquier chatbot. ¿Qué marco ayuda a corregirlo?',
		reverso:
			'La Generative AI Security Scoping Matrix: clasifica el caso de uso en un alcance de seguridad y deriva los controles proporcionales. Aplicar controles genéricos deja sin cubrir los requisitos del alcance real.',
	},
	{
		id: '5.2-t7',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'servicio',
		frente:
			'El comité exige documentar el propósito, los datos de entrenamiento y los límites conocidos del sistema generativo antes de aprobarlo. ¿Qué práctica y qué formato ayudan?',
		reverso:
			'Un estándar de transparencia, documentado por ejemplo con Amazon SageMaker Model Cards. Facilita la revisión por comité y deja constancia ante usuarios y auditores.',
	},
];
