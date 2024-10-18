import {
	IconCalendarMonth,
	IconClick,
	IconClipboardText
} from "@tabler/icons-react";
import { userActions } from "../data";

export default function HowItWorks() {
	return (
		<section
			className="lg:px-15 flex flex-col items-center gap-20 px-6 py-28 md:px-10"
			id="how-it-works"
		>
			<div className="flex flex-col items-center gap-2 max-w-[500px] lg:max-w-[800px]">
				<h3 className="text-primaryRed-400 font-medium lg:text-xl">
					How It Works
				</h3>
				<h2 className="font-heading text-primaryBlueLight-950 text-center text-3xl font-bold lg:text-5xl">
					Achieve Your Goals in Three Simple Steps with Daily Stride
				</h2>
			</div>
			<article className="flex flex-col gap-10 lg:flex-row lg: justify-between w-full">
				{userActions.map((action) => (
					<div
						key={action.id}
						className="flex w-full flex-col items-center text-center gap-3"
					>
						{action?.tagline.includes("Sign Up") && (
							<IconClick
								size={40}
								color="#51abbf"
							/>
						)}
						{action?.tagline.includes("Set Your Goals") && (
							<IconClipboardText
								size={40}
								color="#51abbf"
							/>
						)}
						{action?.tagline.includes("Reflect Daily") && (
							<IconCalendarMonth
								size={40}
								color="#51abbf"
							/>
						)}
						<h4 className="font-heading text-primaryRed-400 text-xl font-medium lg:text-2xl">
							{action.tagline}
						</h4>
						<p>{action.action}</p>
					</div>
				))}
			</article>
		</section>
	);
}
