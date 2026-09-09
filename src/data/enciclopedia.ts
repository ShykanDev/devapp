export interface CategoriaEnciclopedia {
	id: string;
	nombre: string;
	descripcion: string;
	icon: string;
	color: string;
}

export interface TemaEnciclopedia {
	id: string;
	nombre: string;
	descripcion: string;
	categoriaId: string;
	pregunta: string;
}

export const categoriasEnciclopedia: CategoriaEnciclopedia[] = [
	{
		id: 'anatomia',
		nombre: 'Anatomía',
		descripcion: 'Conoce cómo funciona tu cuerpo por dentro.',
		icon: 'body',
		color: '#0a84ff',
	},
	{
		id: 'salud-mental',
		nombre: 'Salud mental',
		descripcion: 'Aprende a cuidar tu mente y tus emociones.',
		icon: 'happy',
		color: '#bf5af2',
	},
	{
		id: 'sexualidad',
		nombre: 'Salud sexual',
		descripcion: 'Todo claro, sin tabúes y con ciencia.',
		icon: 'heart',
		color: '#ff3b30',
	},
	{
		id: 'medicamentos',
		nombre: 'Medicamentos',
		descripcion: 'Cómo funcionan y cómo tomarlos bien.',
		icon: 'medkit',
		color: '#34c759',
	},
	{
		id: 'nutricion',
		nombre: 'Nutrición',
		descripcion: 'Alimentación balanceada para tu cuerpo y tu energía.',
		icon: 'nutrition',
		color: '#ff9500',
	},
	{
		id: 'primeros-auxilios',
		nombre: 'Primeros auxilios',
		descripcion: 'Qué hacer en emergencias y accidentes.',
		icon: 'bandage',
		color: '#ff3b30',
	},
	{
		id: 'signos-vitales',
		nombre: 'Signos vitales',
		descripcion: 'Entiende tus números y tus rangos.',
		icon: 'pulse',
		color: '#5ac8fa',
	},
	{
		id: 'prevencion',
		nombre: 'Prevención',
		descripcion: 'Chequeos, vacunas y hábitos que protegen tu salud.',
		icon: 'shieldCheckmark',
		color: '#34c759',
	},
];

export const temasEnciclopedia: TemaEnciclopedia[] = [
	// ---- Anatomía ----
	{
		id: 'corazon',
		nombre: 'El corazón',
		descripcion: 'La bomba que te mantiene vivo, explicada con claridad.',
		categoriaId: 'anatomia',
		pregunta: 'Explícame cómo funciona el corazón paso a paso, con claridad y ejemplos sencillos.',
	},
	{
		id: 'cerebro',
		nombre: 'El cerebro',
		descripcion: 'Tu CPU: cómo procesa, siente y controla todo.',
		categoriaId: 'anatomia',
		pregunta: 'Explícame cómo funciona el cerebro humano paso a paso y para qué sirve cada parte principal.',
	},
	{
		id: 'pulmones',
		nombre: 'Los pulmones',
		descripcion: 'Cómo respiras y cómo se oxigena tu sangre.',
		categoriaId: 'anatomia',
		pregunta: 'Explícame cómo funcionan los pulmones y el intercambio de oxígeno, con claridad y ejemplos sencillos.',
	},
	{
		id: 'digestivo',
		nombre: 'Sistema digestivo',
		descripcion: 'El viaje de la comida por tu cuerpo.',
		categoriaId: 'anatomia',
		pregunta: 'Explícame el recorrido de la comida por el sistema digestivo paso a paso.',
	},
	{
		id: 'riñones',
		nombre: 'Los riñones',
		descripcion: 'Los filtros que limpian tu sangre.',
		categoriaId: 'anatomia',
		pregunta: 'Explícame cómo funcionan los riñones y por qué son tan importantes.',
	},

	// ---- Salud mental ----
	{
		id: 'ansiedad',
		nombre: 'Ansiedad',
		descripcion: 'Qué es, por qué se siente en el cuerpo y cómo manejarla.',
		categoriaId: 'salud-mental',
		pregunta: 'Explícame qué es la ansiedad, por qué se siente en el cuerpo y cómo manejarla.',
	},
	{
		id: 'depresion',
		nombre: 'Depresión',
		descripcion: 'Entiende la depresión sin juicios.',
		categoriaId: 'salud-mental',
		pregunta: 'Explícame qué es la depresión, cómo se siente y cuándo pedir ayuda profesional.',
	},
	{
		id: 'sueno',
		nombre: 'Dormir bien',
		descripcion: 'Por qué tu cerebro necesita descansar.',
		categoriaId: 'salud-mental',
		pregunta: 'Explícame por qué dormir bien es tan importante y cómo mejorar el sueño.',
	},
	{
		id: 'estres',
		nombre: 'Estrés',
		descripcion: 'El estrés bueno vs. el que te enferma.',
		categoriaId: 'salud-mental',
		pregunta: 'Explícame qué es el estrés, cómo afecta al cuerpo y técnicas para reducirlo.',
	},

	// ---- Salud sexual ----
	{
		id: 'its',
		nombre: 'ITS (Infecciones de transmisión sexual)',
		descripcion: 'Qué son, cómo se previenen y por qué es importante hacerte pruebas.',
		categoriaId: 'sexualidad',
		pregunta: 'Explícame qué son las ITS, cómo se transmiten, cómo prevenirlas y por qué es importante hacerse pruebas.',
	},
	{
		id: 'anticonceptivos',
		nombre: 'Anticonceptivos',
		descripcion: 'Métodos para cuidarte, explicados con claridad.',
		categoriaId: 'sexualidad',
		pregunta: 'Explícame los métodos anticonceptivos, cómo funcionan y cuál elegir según cada persona.',
	},
	{
		id: 'consentimiento',
		nombre: 'Consentimiento',
		descripcion: 'La base de todo: qué es y por qué importa.',
		categoriaId: 'sexualidad',
		pregunta: 'Explícame qué es el consentimiento sexual, por qué es la base de todo y cómo practicarlo.',
	},

	// ---- Medicamentos ----
	{
		id: 'antibioticos',
		nombre: 'Antibióticos',
		descripcion: 'No son para todo: cuándo sí y cuándo no.',
		categoriaId: 'medicamentos',
		pregunta: 'Explícame cómo funcionan los antibióticos, por qué no sirven contra virus y por qué debo terminar el tratamiento.',
	},
	{
		id: 'analgesicos',
		nombre: 'Analgésicos',
		descripcion: 'Para el dolor: qué tomo y con qué cuidado.',
		categoriaId: 'medicamentos',
		pregunta: 'Explícame cómo funcionan los analgésicos comunes, sus riesgos y cómo tomarlos con seguridad.',
	},
	{
		id: 'receta',
		nombre: 'Cómo tomar medicinas',
		descripcion: 'Dosis, horarios y por qué no automedicarte.',
		categoriaId: 'medicamentos',
		pregunta: 'Explícame por qué es importante seguir la receta, no automedicarse y qué es la automedicación riesgosa.',
	},

	// ---- Nutrición ----
	{
		id: 'macros',
		nombre: 'Macros: proteína, grasa y carbohidratos',
		descripcion: 'Lo que tu cuerpo usa como combustible.',
		categoriaId: 'nutricion',
		pregunta: 'Explícame qué son los macronutrientes, para qué sirven y cuánto necesita una persona.',
	},
	{
		id: 'agua',
		nombre: 'Hidratación',
		descripcion: 'Cuánta agua necesitas de verdad.',
		categoriaId: 'nutricion',
		pregunta: 'Explícame cuánta agua necesita el cuerpo al día, por qué es importante y qué pasa si no tomo suficiente.',
	},
	{
		id: 'vitaminas',
		nombre: 'Vitaminas y minerales',
		descripcion: 'Micronutrientes que mantienen todo en orden.',
		categoriaId: 'nutricion',
		pregunta: 'Explícame para qué sirven las vitaminas y minerales más importantes y dónde conseguirlos.',
	},

	// ---- Primeros auxilios ----
	{
		id: 'rcp',
		nombre: 'RCP (Reanimación)',
		descripcion: 'Lo básico que puede salvar una vida.',
		categoriaId: 'primeros-auxilios',
		pregunta: 'Explícame cómo hacer RCP básica en un adulto paso a paso y cuándo se usa.',
	},
	{
		id: 'quemaduras',
		nombre: 'Quemaduras',
		descripcion: 'Primeros auxilios para quemaduras.',
		categoriaId: 'primeros-auxilios',
		pregunta: 'Explícame los primeros auxilios para quemaduras según su gravedad y qué NO hacer.',
	},
	{
		id: 'heridas',
		nombre: 'Heridas y sangrado',
		descripcion: 'Cómo limpiar y cuándo ir al médico.',
		categoriaId: 'primeros-auxilios',
		pregunta: 'Explícame cómo atender una herida o sangrado leve y cuándo es urgente ir al médico.',
	},
	{
		id: 'atragantamiento',
		nombre: 'Atragantamiento',
		descripcion: 'La maniobra de Heimlich explicada.',
		categoriaId: 'primeros-auxilios',
		pregunta: 'Explícame qué hacer si alguien se atraganta, incluida la maniobra de Heimlich paso a paso.',
	},

	// ---- Signos vitales ----
	{
		id: 'presion',
		nombre: 'Presión arterial',
		descripcion: 'Qué es 120/80 y qué significa cada número.',
		categoriaId: 'signos-vitales',
		pregunta: 'Explícame qué es la presión arterial, qué significan los dos números y cuáles son los rangos normales.',
	},
	{
		id: 'frecuencia',
		nombre: 'Frecuencia cardíaca',
		descripcion: 'Cuántos latidos por minuto son normales.',
		categoriaId: 'signos-vitales',
		pregunta: 'Explícame qué es la frecuencia cardíaca, cuál es el rango normal y cuándo preocuparme.',
	},
	{
		id: 'temperatura',
		nombre: 'Temperatura corporal',
		descripcion: 'Fiebre vs. temperatura normal.',
		categoriaId: 'signos-vitales',
		pregunta: 'Explícame qué es la fiebre, cuándo es peligrosa y cómo bajarla de forma segura.',
	},
	{
		id: 'saturacion',
		nombre: 'Saturación de oxígeno',
		descripcion: 'El oxímetro y el famoso 95-100.',
		categoriaId: 'signos-vitales',
		pregunta: 'Explícame qué es la saturación de oxígeno, qué significan los niveles y cuándo es urgente.',
	},

	// ---- Prevención ----
	{
		id: 'vacunas',
		nombre: 'Vacunas',
		descripcion: 'Cómo te protegen y por qué importan.',
		categoriaId: 'prevencion',
		pregunta: 'Explícame cómo funcionan las vacunas, por qué son seguras y qué enfermedades previenen.',
	},
	{
		id: 'chequeo',
		nombre: 'Chequeos regulares',
		descripcion: 'Detectar a tiempo cambia todo.',
		categoriaId: 'prevencion',
		pregunta: 'Explícame por qué son importantes los chequeos médicos regulares y cuáles son los básicos.',
	},
	{
		id: 'ejercicio',
		nombre: 'Ejercicio',
		descripcion: 'Cuánto y por qué tu cuerpo lo agradece.',
		categoriaId: 'prevencion',
		pregunta: 'Explícame cuánto ejercicio se recomienda, sus beneficios y cómo empezar sin lastimarme.',
	},
];
