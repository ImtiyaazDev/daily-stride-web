import Benefits from "./layout/Benefits";
import CallToAction from "./layout/CallToAction";
import Features from "./layout/Features";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import HowItWorks from "./layout/HowItWorks";
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
				<HowItWorks />
				<CallToAction />
			</main>
			<Footer />
		</div>
	);
}
