import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
	children: ReactNode;
	delay?: number;
	className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, filter: 'blur(10px)', y: 24 }}
			whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}