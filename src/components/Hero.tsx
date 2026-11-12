import { motion, useScroll, useTransform } from 'motion/react';
import { profile } from '../data/profile';

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
	{ text: 'Code', className: '' },
	{
		text: 'with an eye',
		className:
			'md:ml-[18vw] text-transparent [-webkit-text-stroke:1px_var(--color-paper)]',
	},
	{ text: 'for form.', className: 'md:ml-[6vw]' },
];

export default function Hero() {
	const { scrollY } = useScroll();
	const yFar = useTransform(scrollY, [0, 800], [0, -160]);
	const yNear = useTransform(scrollY, [0, 800], [0, -70]);

	return (
		<section
			id="index"
			className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 md:px-12"
		>
			{/* halo */}
			<motion.div
				aria-hidden
				animate={{ scale: [1, 1.12, 1], x: [0, 30, 0] }}
				transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute -right-24 top-16 h-168 w-2xl rounded-full bg-accent/25 blur-[140px]"
			/>

			{/* floating glass cards (desktop only) */}
			<motion.div
				aria-hidden
				style={{ y: yFar }}
				className="absolute right-[8%] top-[24%] hidden md:block"
			>
				<motion.div
					animate={{ y: [0, -14, 0] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
					className="glass w-56 rounded-2xl p-5"
				>
					<p className="text-xs text-mute">Now building</p>
					<p className="mt-1 font-display text-lg">A design system for the web</p>
				</motion.div>
			</motion.div>

			<motion.div
				aria-hidden
				style={{ y: yNear }}
				className="absolute right-[26%] top-[46%] hidden md:block"
			>
				<motion.div
					animate={{ y: [0, 12, 0] }}
					transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
					className="glass w-44 rounded-2xl p-4"
				>
					<div className="mb-2 h-1.5 w-2/3 rounded bg-accent/70" />
					<div className="mb-2 h-1.5 w-full rounded bg-white/20" />
					<div className="h-1.5 w-1/2 rounded bg-white/20" />
				</motion.div>
			</motion.div>

			<h1 className="relative font-display text-[clamp(3.5rem,13vw,13rem)] font-semibold leading-[0.92] tracking-tight">
				{lines.map((line, i) => (
					<span key={line.text} className={`block overflow-hidden pb-2 ${line.className}`}>
						<motion.span
							className="block"
							initial={{ y: '110%', filter: 'blur(14px)' }}
							animate={{ y: 0, filter: 'blur(0px)' }}
							transition={{ duration: 1.1, delay: 0.3 + i * 0.15, ease }}
						>
							{line.text}
						</motion.span>
					</span>
				))}
			</h1>

			<div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
				<p className="max-w-sm text-mute">{profile.tagline}</p>
				<p className="text-sm text-mute">
					{profile.name} — {profile.role}
				</p>
			</div>
		</section>
	);
}