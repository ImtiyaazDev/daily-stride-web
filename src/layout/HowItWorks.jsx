import {
	IconCalendarMonth,
	IconClick,
	IconClipboardText
} from "@tabler/icons-react";
import { userActions } from "../data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function HowItWorks() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -250px 0px" });
	const { isDarkMode } = useDarkMode();

	const contentVariants = {
		hidden: { opacity: 0, y: "-50px" },
		show: {
			opacity: 1,
			y: "0px",
			transition: { duration: 0.7, ease: "easeInOut" }
		}
	};

	const stepsVariants = {
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

	return (
		<section
			className="lg:px-15 flex flex-col items-center gap-20 px-6 py-28 md:px-10"
			id="how-it-works"
			ref={ref}
		>
			<div className="flex max-w-[500px] flex-col items-center gap-2 lg:max-w-[800px]">
				<motion.h3
					className="text-primaryRed-400 font-medium lg:text-xl"
					variants={contentVariants}
					initial="hidden"
					animate={isInView ? "show" : "hidden"}
				>
					How It Works
				</motion.h3>
				<motion.h2
					className="font-heading text-primaryBlueLight-950 dark:text-primaryBlueDark-200 text-center text-3xl font-bold lg:text-5xl"
					variants={contentVariants}
					initial="hidden"
					animate={isInView ? "show" : "hidden"}
				>
					Achieve Your Goals in Three Simple Steps with Daily Stride
				</motion.h2>
			</div>
			<article className="lg: flex w-full flex-col justify-between gap-10 lg:flex-row">
				{userActions.map((action, index) => (
					<motion.div
						key={action.id}
						className="flex w-full flex-col items-center gap-3 text-center"
						initial="hidden"
						whileInView="show"
						variants={stepsVariants}
						viewport={{ once: true }}
						custom={index}
					>
						{action?.tagline.includes("Sign Up") && (
							<IconClick
								size={40}
								color={`${isDarkMode ? "#7594bb" : "#51abbf"}`}
							/>
						)}
						{action?.tagline.includes("Set Your Goals") && (
							<IconClipboardText
								size={40}
								color={`${isDarkMode ? "#7594bb" : "#51abbf"}`}
							/>
						)}
						{action?.tagline.includes("Reflect Daily") && (
							<IconCalendarMonth
								size={40}
								color={`${isDarkMode ? "#7594bb" : "#51abbf"}`}
							/>
						)}
						<h4 className="font-heading text-primaryRed-400 text-xl font-medium lg:text-2xl">
							{action.tagline}
						</h4>
						<p>{action.action}</p>
					</motion.div>
				))}
			</article>
		</section>
	);
}
