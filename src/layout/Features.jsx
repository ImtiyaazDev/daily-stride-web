import {
	IconBook,
	IconChartBarPopular,
	IconCircleDashedCheck
} from "@tabler/icons-react";

import { features } from "../data";

export default function Features() {
	return (
		<section
			className="lg:px-15 flex flex-col items-center gap-14 px-6 py-20 md:px-10"
			id="features"
		>
			<div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:justify-between">
				<div className="flex flex-col gap-2 lg:max-w-[450px]">
					<h3 className="text-primaryRed-400 font-medium lg:text-xl">
						Features
					</h3>
					<h2 className="font-heading text-primaryBlueLight-950 text-3xl font-bold lg:text-5xl">
						Why Choose Daily Stride?
					</h2>
				</div>
				<p className="text-lg lg:max-w-[650px]">
					At Daily Stride, we empower you to take control of your personal
					growth journey with tools that make progress feel natural and
					motivating. Whether you&apos;re focused on achieving consistency or
					refining your routine, our platform helps you stay accountable, track
					your improvements, and reflect on your experiences—all in one
					seamless, intuitive space.
				</p>
			</div>
			<article className="flex flex-col items-start gap-4 lg:flex-row lg:gap-8">
				{features.map((feature) => (
					<div
						key={feature.id}
						className="bg-green-00 flex w-full flex-col gap-4"
					>
						{feature?.heading.includes("Habit Tracking") && (
							<IconCircleDashedCheck
								size={40}
								color="#51abbf"
							/>
						)}
						{feature?.heading.includes("Stats Monitoring") && (
							<IconChartBarPopular
								size={40}
								color="#51abbf"
							/>
						)}
						{feature?.heading.includes("Daily Journal") && (
							<IconBook
								size={40}
								color="#51abbf"
							/>
						)}
						<div className="bg-re-100 flex flex-col gap-2">
							<h4 className="font-heading text-primaryRed-400 text-2xl font-semibold">
								{feature.heading}
							</h4>
							<p className="text-lg font-medium">{feature.tagline}</p>
						</div>
						<p>{feature.text}</p>
					</div>
				))}
			</article>
		</section>
	);
}
