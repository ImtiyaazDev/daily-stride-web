import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

	const variants = {
		hidden: {
			y: 100,
			opacity: 0,
			scale: 0.85,
			borderRadius: "0px"
		},
		show: {
			y: 0,
			opacity: 1,
			scale: 1,
			borderRadius: "24px",
			transition: {
				duration: 0.75,
				ease: "easeInOut",
				borderRadius: { duration: 0.6, ease: "easeInOut", delay: 0.75 }
			}
		}
	};

	return (
		<section
			className="lg:px-15 px-6 py-28 md:px-10"
			ref={ref}
		>
			<motion.div
				className="bg-primaryBlueLight-50 dark:bg-primaryBlueDark-950 flex w-full flex-col items-center gap-6 p-6 text-center md:p-8 lg:p-10"
				variants={variants}
				initial="hidden"
				animate={isInView ? "show" : "hidden"}
			>
				<h2 className="font-heading text-primaryBlueLight-900 dark:text-primaryBlueDark-200 text-3xl font-bold md:max-w-[550px] lg:text-4xl">
					Start Your Self-Improvement Journey Today!
				</h2>
				<p className="md:max-w-[550px]">
					Start transforming your life with Daily Stride—your partner in
					personal growth and self-improvement.
				</p>
				<a
					className="bg-primaryRed-200 text-primaryRed-800 hover:bg-primaryRed-100 hover:border-primaryRed-800 focus:ring-offset-primaryRed-800 dark:hover:border-primaryRed-400 dark:focus:ring-offset-primaryRed-400 cursor-pointer rounded-full border-2 border-transparent px-3 py-2 outline-none transition-all duration-300 ease-in-out focus:ring focus:ring-transparent focus:ring-offset-2 md:px-4 md:py-3"
					href="#signup"
				>
					Join Now!
				</a>
			</motion.div>
		</section>
	);
}
