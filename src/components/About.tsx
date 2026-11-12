import { motion } from 'motion/react';
import Reveal from './Reveal';

export default function About() {
	return (
		<section id="about" className="relative px-6 py-40 md:px-12">
			{/* abstract ring */}
			<div
				aria-hidden
				className="absolute right-[10%] top-24 hidden h-72 w-72 rounded-full border border-accent/30 md:block"
			>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
					className="absolute inset-6 rounded-full border border-dashed border-white/15"
				/>
				<div className="absolute inset-16 rounded-full bg-accent/20 blur-2xl" />
			</div>

			<Reveal>
				<h2 className="max-w-5xl font-display text-[clamp(2.2rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight">
					I turn unclear problems into software that feels inevitable.
				</h2>
			</Reveal>

			<div className="mt-16 grid max-w-4xl gap-10 text-lg text-paper/75 md:grid-cols-2">
				<Reveal delay={0.1}>
					<p>
						Curiosity first. I read the code, the interface and the people using it before I touch
						anything.
					</p>
				</Reveal>
				<Reveal delay={0.2}>
					<p>
						Then I build small, test early and keep what works. Clean architecture, calm
						interactions, no noise.
					</p>
				</Reveal>
			</div>
		</section>
	);
}