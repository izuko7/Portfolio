import { profile } from '../data/profile';
import Reveal from './Reveal';

export default function Contact() {
	return (
		<section id="contact" className="px-6 pb-16 pt-40 md:px-12">
			<Reveal>
				<h2 className="max-w-5xl font-display text-[clamp(2.8rem,9vw,8.5rem)] font-semibold leading-[0.95] tracking-tight">
					Let’s build something sharp.
				</h2>
			</Reveal>

			<Reveal delay={0.15} className="mt-14 flex flex-wrap items-center gap-4">
				<a
					href={`mailto:${profile.email}`}
					className="glass inline-block rounded-full px-8 py-4 text-lg transition-colors hover:text-accent"
				>
					{profile.email}
				</a>
				<a
					href={profile.cv}
					download="CV.pdf"
					className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-ink transition-opacity hover:opacity-90"
				>
					Download my CV
				</a>
			</Reveal>

			<footer className="mt-32 flex flex-wrap justify-between gap-4 text-sm text-mute">
				<ul className="flex gap-6">
					{profile.socials.map((social) => (
						<li key={social.label}>
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-paper"
							>
								{social.label}
							</a>
						</li>
					))}
				</ul>
				<p>
					© {new Date().getFullYear()} {profile.name}
				</p>
			</footer>
		</section>
	);
}