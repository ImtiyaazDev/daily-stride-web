import { IconStarFilled } from "@tabler/icons-react";
import { testimonials } from "../data";

export default function Testimonials() {
	return (
		<section
			className="lg:px-15 flex flex-col items-start gap-20 px-6 py-28 md:px-10"
			id="testimonials"
		>
			<div className="flex flex-col gap-2">
				<h3 className="text-primaryRed-400 font-medium lg:text-xl">
					Testimonials
				</h3>
				<h2 className="font-heading text-primaryBlueLight-950 text-3xl font-bold lg:text-5xl">
					What Our Users Say
				</h2>
			</div>
			<article className="flex flex-col gap-7 lg:flex-row">
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className={`flex w-full flex-col gap-4 rounded-xl p-4 drop-shadow-sm lg:p-6 ${testimonial.redBackground ? "bg-primaryRed-50" : "bg-primaryBlueLight-50"}`}
					>
						<div className="flex items-center gap-1">
							{Array(testimonial.rating)
								.fill()
								.map((_, index) => (
									<IconStarFilled
										key={index}
										className={`${testimonial.redBackground ? "text-primaryRed-800" : "text-primaryBlueLight-800"}`}
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
									className={`aspect-square w-20 rounded-full border-4 ${testimonial.redBackground ? "border-primaryRed-200" : "border-primaryBlueLight-200"}`}
								/>
							</figure>
							<div className="flex flex-col gap-1">
								<p
									className={`${testimonial.redBackground ? "text-primaryRed-800" : "text-primaryBlueLight-800"}`}
								>
									{testimonial.user}
								</p>
								<p>{testimonial.position}</p>
							</div>
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
