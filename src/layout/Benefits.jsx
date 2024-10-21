import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { benefits } from "../data";

export default function Benefits() {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "0px 0px -250px 0px", once: true });

	const contentVariants = {
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

	const benefitVariants = {
		hidden: { opacity: 0, y: 100 },
		show: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.35 * index,
				duration: 0.24
			}
		})
	};

	const imageVariants = {
		hidden: { opacity: 0, x: "200px", scale: 0.95 },
		show: {
			opacity: 1,
			x: "0px",
			scale: 1,
			transition: { duration: 0.7, ease: "easeInOut" }
		}
	};

	return (
		<section
			className="lg:px-15 bg-primaryBlueLight-50 dark:bg-primaryBlueDark-950 flex flex-col items-center gap-8 px-6 py-28 md:flex-row md:px-10"
			id="benefits"
			ref={ref}
		>
			<div className="flex w-full flex-col items-start gap-4 md:max-w-[700px] lg:gap-6">
				<div className="flex flex-col gap-2">
					<motion.h3
						className="text-primaryRed-400 font-medium lg:text-xl"
						variants={contentVariants}
						initial="hidden"
						animate={isInView ? "show" : "hidden"}
					>
						Benefits
					</motion.h3>
					<motion.h2
						className="font-heading text-primaryBlueLight-950 dark:text-primaryBlueDark-200 text-3xl font-bold lg:text-5xl"
						variants={contentVariants}
						initial="hidden"
						animate={isInView ? "show" : "hidden"}
					>
						Empower Your Growth
					</motion.h2>
				</div>
				<motion.p
					className="text-lg"
					variants={contentVariants}
					initial="textHidden"
					animate={isInView ? "textShow" : "textHidden"}
				>
					Daily Stride is designed to help you cultivate positive habits and
					gain insights into your self-improvement journey. By actively engaging
					with your progress, you can make informed decisions and stay motivated
				</motion.p>
				<div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4">
					{benefits.map((benefit, index) => (
						<motion.div
							className="flex w-full flex-col gap-2 lg:gap-3"
							key={benefit.id}
							variants={benefitVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							custom={index}
						>
							<h4 className="font-heading text-primaryRed-400 text-xl font-medium lg:text-2xl">
								{benefit.tagline}
							</h4>
							<p>{benefit.text}</p>
						</motion.div>
					))}
				</div>
			</div>
			<motion.figure
				className="-ml-4 w-96 sm:w-[400px] md:w-[550px] lg:w-[1000px]"
				variants={imageVariants}
				initial="hidden"
				animate={isInView ? "show" : "hidden"}
			>
				<img
					src="/assets/benefits.webp"
					alt="Mockup of Daily Stride dashboard showcasing the goals and journals page"
					loading="lazy"
				/>
			</motion.figure>
		</section>
	);
}
