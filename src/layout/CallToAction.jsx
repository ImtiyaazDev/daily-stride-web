export default function CallToAction() {
	return (
		<section className="lg:px-15 px-6 py-28 md:px-10">
			<div className="bg-primaryBlueLight-50 flex w-full flex-col items-center gap-6 rounded-3xl p-6 text-center md:p-8 lg:p-10">
				<h2 className="font-heading text-primaryBlueLight-900 text-3xl font-bold md:max-w-[550px] lg:text-4xl">
					Start Your Self-Improvement Journey Today!
				</h2>
				<p className="md:max-w-[550px]">
					Start transforming your life with Daily Stride—your partner in
					personal growth and self-improvement.
				</p>
				<a
					className="bg-primaryRed-200 text-primaryRed-800 hover:bg-primaryRed-100 hover:border-primaryRed-800 focus:ring-offset-primaryRed-800 cursor-pointer rounded-full border-2 border-transparent px-3 py-2 outline-none transition-all duration-300 ease-in-out focus:ring focus:ring-transparent focus:ring-offset-2 md:px-4 md:py-3"
					href="#signup"
				>
					Join Now!
				</a>
			</div>
		</section>
	);
}
