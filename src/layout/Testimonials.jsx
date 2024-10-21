import { IconStarFilled } from "@tabler/icons-react";
import { testimonials } from "../data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -250px 0px" });

	const contentVariants = {
		hidden: { opacity: 0, x: "-200px" },
		show: {
			opacity: 1,
			x: "0px",
			transition: { duration: 0.7, ease: "easeInOut" }
		}
	};

	const cardVariants = {
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
			className="lg:px-15 flex flex-col items-start gap-20 px-6 py-28 md:px-10"
			id="testimonials"
			ref={ref}
		>
			<div className="flex flex-col gap-2">
				<motion.h3
					className="text-primaryRed-400 font-medium lg:text-xl"
					variants={contentVariants}
					initial="hidden"
					animate={isInView ? "show" : "hidden"}
				>
					Testimonials
				</motion.h3>
				<motion.h2
					className="font-heading text-primaryBlueLight-950 dark:text-primaryBlueDark-200 text-3xl font-bold lg:text-5xl"
					variants={contentVariants}
					initial="hidden"
					animate={isInView ? "show" : "hidden"}
				>
					What Our Users Say
				</motion.h2>
			</div>
			<article className="flex flex-col gap-7 lg:flex-row">
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={testimonial.id}
						className={`flex w-full flex-col gap-4 rounded-xl p-4 drop-shadow-sm lg:p-6 ${testimonial.redBackground ? "bg-primaryRed-50 dark:bg-primaryRed-950" : "bg-primaryBlueLight-50 dark:bg-primaryBlueDark-950"}`}
						initial="hidden"
						whileInView="show"
						custom={index}
						viewport={{ once: true }}
						variants={cardVariants}
					>
						<div className="flex items-center gap-1">
							{Array(testimonial.rating)
								.fill()
								.map((_, index) => (
									<IconStarFilled
										key={index}
										className={`${testimonial.redBackground ? "text-primaryRed-800 dark:text-primaryRed-300" : "text-primaryBlueLight-800 dark:text-primaryBlueDark-300"}`}
									/>
								))}
						</div>
						<blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
						<div className="flex items-center gap-4">
							<figure>
								<img
									src={testimonial.img}
									alt={testimonial.alt}
									loading="lazy"
									className={`aspect-square w-20 rounded-full border-4 ${testimonial.redBackground ? "border-primaryRed-200 dark:border-primaryRed-800" : "border-primaryBlueLight-200 dark:border-primaryBlueDark-800"}`}
								/>
							</figure>
							<div className="flex flex-col gap-1">
								<p
									className={`${testimonial.redBackground ? "text-primaryRed-800 dark:text-primaryRed-300" : "text-primaryBlueLight-800 dark:text-primaryBlueDark-300"}`}
								>
									{testimonial.user}
								</p>
								<p>{testimonial.position}</p>
							</div>
						</div>
					</motion.div>
				))}
			</article>
		</section>
	);
}
