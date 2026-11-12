import { motion } from 'motion/react';
import { useState } from 'react';
import type { Project } from '../data/projects';

const spring = { type: 'spring', stiffness: 120, damping: 16 } as const;

type FolderProps = {
	project: Project;
	onOpen: (project: Project) => void;
};

export default function Folder({ project, onOpen }: FolderProps) {
	const [open, setOpen] = useState(false);

	return (
		<motion.article
			initial="closed"
			animate={open ? 'open' : 'closed'}
			onHoverStart={() => setOpen(true)}
			onHoverEnd={() => setOpen(false)}
			onFocus={() => setOpen(true)}
			onTap={(event) => {
	            if ('pointerType' in event && event.pointerType === 'touch') {
		        setOpen((value) => !value);
	            }
            }}
			className="relative h-120"
			style={{ perspective: 1200 }}
		>
			{/* back panel */}
			<div className="absolute inset-x-0 bottom-0 h-[72%] rounded-4xl border border-white/10 bg-white/4" />

			{/* sheet behind the preview */}
			<motion.div
				variants={{
					closed: { y: 50, rotate: 0 },
					open: { y: -64, rotate: 4 },
				}}
				transition={spring}
				className="absolute inset-x-6 bottom-[28%] h-[56%] rounded-2xl border border-white/10 bg-[#1b1b21]"
			/>

			{/* preview document */}
			<motion.div
				variants={{
					closed: { y: 60, rotate: 0 },
					open: { y: -30, rotate: -3 },
				}}
				transition={spring}
				className="absolute inset-x-6 bottom-[28%] h-[56%] overflow-hidden rounded-2xl border border-white/10"
				style={{
					background: `radial-gradient(circle at 30% 20%, hsl(${project.hue} 70% 62% / 0.75), transparent 62%), #17171c`,
				}}
			>
				{project.image ? (
					<img
						src={project.image}
						alt=""
						loading="lazy"
						className="h-full w-full object-cover object-top"
					/>
				) : (
					<span className="absolute left-4 top-2 font-display text-6xl font-semibold text-white/25">
						{project.name[0]}
					</span>
				)}
			</motion.div>

			{/* smoked-glass front */}
			<motion.div
				variants={{
					closed: { rotateX: 0 },
					open: { rotateX: -24 },
				}}
				transition={spring}
				style={{ transformOrigin: 'bottom' }}
				className="glass absolute inset-x-0 bottom-0 flex h-[56%] flex-col justify-between rounded-4xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
			>
				<div className="flex items-start justify-between">
					<h3 className="font-display text-3xl font-semibold">{project.name}</h3>
					<span className="text-sm text-mute">{project.year}</span>
				</div>

				<motion.div
					variants={{
						closed: { opacity: 0, y: 10 },
						open: { opacity: 1, y: 0 },
					}}
					className={`space-y-4 ${open ? '' : 'pointer-events-none'}`}
				>
					<p className="text-sm leading-relaxed text-paper/80">{project.description}</p>
					<ul className="flex flex-wrap gap-2">
						{project.stack.map((tech) => (
							<li
								key={tech}
								className="rounded-full border border-white/15 px-3 py-1 text-xs text-paper/80"
							>
								{tech}
							</li>
						))}
					</ul>
					<div className="flex items-center gap-5 text-sm">
						<button
							type="button"
							onClick={() => onOpen(project)}
							className="rounded-full bg-accent px-4 py-1.5 font-medium text-ink hover:opacity-90"
						>
							View demo
						</button>
						<a
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4 hover:text-accent"
						>
							GitHub
						</a>
					</div>
				</motion.div>
			</motion.div>
		</motion.article>
	);
}