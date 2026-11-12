import type { IconType } from 'react-icons';
import {
	SiBiome,
	SiBun,
	SiDocker,
	SiFigma,
	SiFramer,
	SiGit,
	SiGraphql,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiSupabase,
	SiTailwindcss,
	SiThreedotjs,
	SiTrpc,
	SiTypescript,
	SiVite,
} from 'react-icons/si';

export type Tech = { name: string; icon: IconType; color: string };

export const stack: Record<string, Tech[]> = {
	Frontend: [
		{ name: 'React', icon: SiReact, color: '#61dafb' },
		{ name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
		{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
		{ name: 'Motion', icon: SiFramer, color: '#0055ff' },
		{ name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
	],
	Backend: [
		{ name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
		{ name: 'tRPC', icon: SiTrpc, color: '#398ccb' },
		{ name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
		{ name: 'Python', icon: SiPython, color: '#3776ab' },
	],
	Database: [
		{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
		{ name: 'Redis', icon: SiRedis, color: '#ff4438' },
		{ name: 'Supabase', icon: SiSupabase, color: '#3fcf8e' },
	],
	'Tools & Workflow': [
		{ name: 'Git', icon: SiGit, color: '#f05032' },
		{ name: 'Figma', icon: SiFigma, color: '#f24e1e' },
		{ name: 'Vite', icon: SiVite, color: '#646cff' },
		{ name: 'Bun', icon: SiBun, color: '#fbf0df' },
		{ name: 'Biome', icon: SiBiome, color: '#60a5fa' },
		{ name: 'Docker', icon: SiDocker, color: '#2496ed' },
	],
};