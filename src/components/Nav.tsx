import { motion } from 'motion/react';

const links = ['Index', 'About', 'Projects', 'Stack', 'Contact'];

export default function Nav() {
	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
			className="glass fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded-full px-3 py-2"
		>
			<ul className="flex gap-1 text-sm">
				{links.map((link) => (
					<li key={link}>
						<a
							href={`#${link.toLowerCase()}`}
							className="block rounded-full px-3 py-1.5 text-paper/70 transition-colors hover:text-paper"
						>
							{link}
						</a>
					</li>
				))}
			</ul>
		</motion.nav>
	);
}