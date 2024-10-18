export default function Benefits() {
	return (
		<section
			className="lg:px-15 bg-primaryBlueLight-50 flex flex-col items-center gap-8 px-6 py-28 md:flex-row md:px-10"
			id="benefits"
		>
			<div className="flex w-full flex-col items-start gap-4 md:max-w-[700px] lg:gap-6">
				<div className="flex flex-col gap-2">
					<h3 className="text-primaryRed-400 font-medium lg:text-xl">
						Benefits
					</h3>
					<h2 className="font-heading text-primaryBlueLight-950 text-3xl font-bold lg:text-5xl">
						Empower Your Growth
					</h2>
				</div>
				<p className="text-lg">
					Daily Stride is designed to help you cultivate positive habits and
					gain insights into your self-improvement journey. By actively engaging
					with your progress, you can make informed decisions and stay motivated
				</p>
				<div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4">
					<div className="flex w-full flex-col gap-2 lg:gap-3">
						<h4 className="font-heading text-primaryRed-400 text-xl font-medium lg:text-2xl">
							Track Progess
						</h4>
						<p>
							Visualise your achievements and stay motivated with comprehensive
							analytics and insights.
						</p>
					</div>
					<div className="flex w-full flex-col gap-2 lg:gap-3">
						<h4 className="font-heading text-primaryRed-400 text-xl font-medium lg:text-2xl">
							Reflect Daily
						</h4>
						<p>
							Use our daily journal to reflect on your experiences and foster
							personal growth.
						</p>
					</div>
				</div>
			</div>
			<figure className="w-96 sm:w-[450px] md:w-[700px] lg:w-[1000px]">
				<img
					src="/assets/benefits.webp"
					alt="Mockup of Daily Stride dashboard showcasing the goals and journals page"
					loading="lazy"
				/>
			</figure>
		</section>
	);
}
