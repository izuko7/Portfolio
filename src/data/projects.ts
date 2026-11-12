export type Project = {
	name: string;
	year: number;
	hue: number;
	image?: string;
	description: string;
	stack: string[];
	demo: string;
	repo: string;
};

export const projects: Project[] = [
	{
		name: 'Atlas',
		year: 2025,
		hue: 250,
		description: 'A map-first travel journal with offline sync.',
		stack: ['React', 'TypeScript', 'Supabase'],
		demo: '#',
		repo: '#',
	},
	{
		name: 'Lumen',
		year: 2025,
		hue: 200,
		description: 'Design-token tool that exports to CSS, Swift and Kotlin.',
		stack: ['Node.js', 'Vite', 'Tailwind'],
		demo: '#',
		repo: '#',
	},
	{
		name: 'Parcel',
		year: 2024,
		hue: 280,
		description: 'Shipment tracking dashboard with live status updates.',
		stack: ['Next.js', 'PostgreSQL', 'tRPC'],
		demo: '#',
		repo: '#',
	},
	{
		name: 'Grain',
		year: 2024,
		hue: 320,
		description: 'A film-photo gallery with generative layouts.',
		stack: ['Three.js', 'Motion', 'Vercel'],
		demo: '#',
		repo: '#',
	},
];