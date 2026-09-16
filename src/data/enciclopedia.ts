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
		id: 'fundamentos',
		nombre: 'Fundamentos',
		descripcion: 'Lógica, variables, tipos y control de flujo.',
		icon: 'school',
		color: '#0a84ff',
	},
	{
		id: 'frontend',
		nombre: 'Frontend',
		descripcion: 'HTML, CSS, JavaScript y frameworks de interfaz.',
		icon: 'codeSlash',
		color: '#bf5af2',
	},
	{
		id: 'backend',
		nombre: 'Backend',
		descripcion: 'APIs, servidores, autenticación y lógica de negocio.',
		icon: 'server',
		color: '#34c759',
	},
	{
		id: 'bases-datos',
		nombre: 'Bases de datos',
		descripcion: 'Modelado, consultas, SQL y NoSQL.',
		icon: 'layers',
		color: '#ff9500',
	},
	{
		id: 'algoritmos',
		nombre: 'Algoritmos',
		descripcion: 'Estructuras de datos, complejidad y optimización.',
		icon: 'gitBranch',
		color: '#ff3b30',
	},
	{
		id: 'devops',
		nombre: 'DevOps',
		descripcion: 'Git, CI/CD, contenedores y despliegue.',
		icon: 'cloud',
		color: '#5ac8fa',
	},
	{
		id: 'seguridad',
		nombre: 'Seguridad',
		descripcion: 'Buenas prácticas, vulnerabilidades y protección.',
		icon: 'shieldCheckmark',
		color: '#ff2d55',
	},
	{
		id: 'movil',
		nombre: 'Desarrollo móvil',
		descripcion: 'Apps nativas y multiplataforma.',
		icon: 'phonePortrait',
		color: '#af52de',
	},
];

export const temasEnciclopedia: TemaEnciclopedia[] = [];
