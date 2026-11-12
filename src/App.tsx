import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis({ lerp: 0.09 });
		let frame = requestAnimationFrame(function raf(time) {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		});
		return () => {
			cancelAnimationFrame(frame);
			lenis.destroy();
		};
	}, []);

	return (
		<>
			<Nav />
			<main>
				<Hero />
				<About />
				<Projects />
			</main>
		</>
	);
}