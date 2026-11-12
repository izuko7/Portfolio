import { useState } from 'react';
import { type Project, projects } from '../data/projects';
import Folder from './Folder';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';

export default function Projects() {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<section id="projects" className="px-6 py-32 md:px-12">
			<Reveal>
				<h2 className="font-display text-[clamp(2.2rem,6vw,5.5rem)] font-medium tracking-tight">
					Archive
				</h2>
				<p className="mt-3 max-w-md text-mute">Hover or tap a folder to open it.</p>
			</Reveal>

			<div className="mt-20 grid gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
				{projects.map((project) => (
					<Folder key={project.name} project={project} onOpen={setSelected} />
				))}
			</div>

			<ProjectModal project={selected} onClose={() => setSelected(null)} />
		</section>
	);
}