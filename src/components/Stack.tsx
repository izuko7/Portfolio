import { motion } from 'motion/react';
import { stack } from '../data/stack';
import Reveal from './Reveal';

export default function Stack() {
	return (
		<section id="stack" className="px-6 py-32 md:px-12">
			<Reveal>
				<h2 className="font-display text-[clamp(2.2rem,6vw,5.5rem)] font-medium tracking-tight">
					Stack
				</h2>
			</Reveal>

			<div className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
				{Object.entries(stack).map(([category, items], index) => (
					<Reveal key={category} delay={index * 0.08}>
						<h3 className="mb-6 text-sm text-mute">{category}</h3>
						<ul className="space-y-3">
							{items.map(({ name, icon: Icon }) => (
								<motion.li
									key={name}
									initial={{ color: '#edebe6' }}
									whileHover={{ x: 12, color: '#747bee' }}
									transition={{ type: 'spring', stiffness: 300, damping: 20 }}
									className="flex items-center gap-4 font-display text-2xl font-medium"
								>
									<span className="glass flex size-11 shrink-0 items-center justify-center rounded-xl">
										<Icon aria-hidden className="size-5" />
									</span>
									{name}
								</motion.li>
							))}
						</ul>
					</Reveal>
				))}
			</div>
		</section>
	);
}