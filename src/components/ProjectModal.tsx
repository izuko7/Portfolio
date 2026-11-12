import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import type { Project } from '../data/projects';

type ProjectModalProps = {
	project: Project | null;
	onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
	useEffect(() => {
		if (!project) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};
		document.documentElement.style.overflow = 'hidden';
		window.addEventListener('keydown', onKey);
		return () => {
			document.documentElement.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [project, onClose]);

	const hasDemo = project !== null && project.demo !== '#';

	return (
		<AnimatePresence>
			{project && (
				<motion.div
					key={project.name}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-10"
				>
					<button
						type="button"
						aria-label="Close"
						onClick={onClose}
						className="absolute inset-0 bg-ink/80 backdrop-blur-md"
					/>

					<motion.dialog
						open
						aria-label={project.name}
						data-lenis-prevent
						initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
						animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
						exit={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="glass relative m-0 flex h-full max-h-220 w-full max-w-6xl flex-col overflow-hidden rounded-4xl p-0 text-paper"
					>
						<header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-5 md:px-8">
							<div>
								<h3 className="font-display text-3xl font-semibold">
									{project.name} <span className="text-base font-normal text-mute">{project.year}</span>
								</h3>
								<ul className="mt-2 flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<li
											key={tech}
											className="rounded-full border border-white/15 px-3 py-1 text-xs text-paper/80"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>

							<div className="flex flex-wrap items-center gap-3 text-sm">
								{hasDemo && (
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-full bg-accent px-4 py-2 font-medium text-ink hover:opacity-90"
									>
										Open live demo
									</a>
								)}
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-full border border-white/20 px-4 py-2 hover:text-accent"
								>
									GitHub
								</a>
								<button
									type="button"
									onClick={onClose}
									className="rounded-full border border-white/20 px-4 py-2 hover:text-accent"
								>
									Close
								</button>
							</div>
						</header>

						<div className="relative flex-1 bg-surface">
							{hasDemo ? (
								<iframe
									src={project.demo}
									title={`${project.name} live demo`}
									loading="lazy"
									sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
									className="h-full w-full bg-white"
								/>
							) : (
								<div
									className="flex h-full flex-col items-center justify-center gap-3 text-center"
									style={{
										background: `radial-gradient(circle at 30% 20%, hsl(${project.hue} 70% 62% / 0.5), transparent 60%), #131316`,
									}}
								>
									<span className="font-display text-8xl font-semibold text-white/30">
										{project.name[0]}
									</span>
									<p className="text-mute">Demo coming soon</p>
								</div>
							)}
						</div>

						{hasDemo && (
							<p className="border-t border-white/10 px-5 py-2 text-xs text-mute md:px-8">
								If the preview stays blank, the site blocks embedding. Use “Open live demo”.
							</p>
						)}
					</motion.dialog>
				</motion.div>
			)}
		</AnimatePresence>
	);
}