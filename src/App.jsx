import Header from "./layout/Header";
import Hero from "./layout/Hero";

export default function App() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Header />
			<main className="grid">
				<Hero />
			</main>
		</div>
	);
}
