import Benefits from "./layout/Benefits";
import Features from "./layout/Features";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Testimonials from "./layout/Testimonials";

export default function App() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Header />
			<main className="grid">
				<Hero />
				<Features />
				<Benefits />
				<Testimonials />
			</main>
		</div>
	);
}
