export default function Hero() {
	return (
		<section className="lg:px-15 flex flex-col items-center px-6 py-20 md:px-10 gap-14">
			<div className="flex flex-col items-center gap-8">
				<div className="flex max-w-[600px] flex-col items-center gap-5 text-center">
					<h1 className="font-heading text-primaryBlueLight-800 text-5xl font-bold">
						Transform Your Journey with Daily Stride
					</h1>
					<p>
						At Daily Stride, we provide you with the tools to build lasting
						habits, track your progress, and reflect on your journey—all in one
						intuitive platform. Start today and see the difference with each
						step you take.
					</p>
				</div>
				<a
					className="bg-primaryRed-200 text-primaryRed-800 hover:bg-primaryRed-100 hover:border-primaryRed-800 focus:ring-offset-primaryRed-800 cursor-pointer rounded-full border-2 border-transparent px-3 py-2 outline-none transition-all duration-300 ease-in-out focus:ring focus:ring-transparent focus:ring-offset-2 md:px-4 md:py-3"
					href="#signup"
				>
					Get Started
				</a>
			</div>
			<figure>
				<img alt="Hero image" />
				MOCKUP
			</figure>
		</section>
	);
}
