import {
	IconBook,
	IconChartBarPopular,
	IconCircleDashedCheck
} from "@tabler/icons-react";

import { motion, useInView } from "framer-motion";
import { features } from "../data";
import { useRef } from "react";

export default function Features() {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "0px 0px -250px 0px", once: true });

	// Animation variants for each feature div
	const featureVariants = {
		hidden: { opacity: 0, y: 100 },
		show: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.27 * index,
				duration: 0.1
			}
		})
	};

	const content = {
		hidden: { opacity: 0, x: "-200px" },
		show: {
			opacity: 1,
			x: "0px",
			transition: { duration: 0.7, ease: "easeInOut" }
		},
		textHidden: { opacity: 0, x: "200px" },
		textShow: {
			opacity: 1,
			x: "0px",
			transition: { duration: 0.7, ease: "easeInOut" }
		}
	};

	return (
		<motion.section
			ref={ref}
			className="lg:px-15 flex flex-col items-center gap-20 px-6 py-28 md:px-10"
			id="features"
		>
			<div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:justify-between">
				<div className="flex flex-col gap-2 lg:max-w-[450px]">
					<motion.h3
						variants={content}
						initial="hidden"
						animate={isInView ? "show" : "hidden"}
						className="text-primaryRed-400 font-medium lg:text-xl"
					>
						Features
					</motion.h3>
					<motion.h2
						variants={content}
						initial="hidden"
						animate={isInView ? "show" : "hidden"}
						className="font-heading text-primaryBlueLight-950 text-3xl font-bold lg:text-5xl"
					>
						Why Choose Daily Stride?
					</motion.h2>
				</div>
				<motion.p
					variants={content}
					initial="textHidden"
					animate={isInView ? "textShow" : "textHidden"}
					className="text-lg lg:max-w-[650px]"
				>
					At Daily Stride, we empower you to take control of your personal
					growth journey with tools that make progress feel natural and
					motivating. Whether you&apos;re focused on achieving consistency or
					refining your routine, our platform helps you stay accountable, track
					your improvements, and reflect on your experiences—all in one
					seamless, intuitive space.
				</motion.p>
			</div>
			<article className="flex flex-col items-start gap-4 lg:flex-row lg:gap-7">
				{features.map((feature, index) => (
					<motion.div
						key={feature.id}
						className="feature | bg-green-00 flex w-full flex-col gap-4"
						initial="hidden"
						whileInView="show"
						custom={index}
						variants={featureVariants}
						viewport={{ once: true }}
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
					</motion.div>
				))}
			</article>
		</motion.section>
	);
}
