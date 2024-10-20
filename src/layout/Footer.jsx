import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTiktok,
	IconBrandX
} from "@tabler/icons-react";
import { delay, motion, useInView } from "framer-motion";
import { navLinks } from "../data/index";
import { useRef } from "react";

export default function Footer() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

	const handleScroll = (id) => {
		const section = document.getElementById(id);
		if (section)
			section.scrollIntoView({ block: "center", behavior: "smooth" });
	};

	const variants = {
		hidden: { opacity: 0, y: -100 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeInOut", delay: 0.15 }
		}
	};

	return (
		<motion.footer
			className="lg:px-15 flex flex-col items-center gap-12 px-6 pb-10 pt-6 md:px-10"
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={isInView ? "show" : "hidden"}
		>
			<div className="flex flex-col items-center">
				<figure className="-mb-8 w-40">
					<img
						src="/assets/logo-transparent.png"
						alt="Daily Stride logo"
						loading="lazy"
					/>
				</figure>
				<nav>
					<ul className="flex flex-col items-center gap-6 md:flex-row">
						{navLinks.map((link) => (
							<li key={link.id}>
								<a
									href={`#${link.href}`}
									className="text-primaryBlueLight-800 hover:text-primaryBlueLight-400 focus:border-primaryBlueLight-800 dark:text-primaryBlueDark-200 dark:hover:text-primaryBlueDark-400 dark:focus:border-primaryBlueDark-400 font-medium outline-none transition-all duration-300 ease-in-out focus:border-b-2"
									onClick={(e) => {
										e.preventDefault();
										handleScroll(link.href);
									}}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className="border-t-primaryBlueLight-400 dark:border-t-primaryBlueDark-400 flex w-full flex-col items-center gap-6 border-t pb-4 pt-8">
				<div className="flex items-center gap-4">
					<a
						href="#"
						className="focus:ring-primaryBlueLight-800 hover:text-primaryBlueLight-400 text-primaryBlueLight-800 dark:text-primaryBlueDark-200 dark:hover:text-primaryBlueDark-400 dark:focus:ring-primaryBlueDark-400 scale-100 rounded-md outline-none transition-all duration-300 ease-in-out hover:scale-110 focus:ring"
					>
						<IconBrandInstagram size={28} />
					</a>
					<a
						href="#"
						className="focus:ring-primaryBlueLight-800 hover:text-primaryBlueLight-400 text-primaryBlueLight-800 dark:text-primaryBlueDark-200 dark:hover:text-primaryBlueDark-400 dark:focus:ring-primaryBlueDark-400 scale-100 rounded-md outline-none transition-all duration-300 ease-in-out hover:scale-110 focus:ring"
					>
						<IconBrandFacebook size={28} />
					</a>
					<a
						href="#"
						className="focus:ring-primaryBlueLight-800 hover:text-primaryBlueLight-400 text-primaryBlueLight-800 dark:text-primaryBlueDark-200 dark:hover:text-primaryBlueDark-400 dark:focus:ring-primaryBlueDark-400 scale-100 rounded-md outline-none transition-all duration-300 ease-in-out hover:scale-110 focus:ring"
					>
						<IconBrandX size={28} />
					</a>
					<a
						href="#"
						className="focus:ring-primaryBlueLight-800 hover:text-primaryBlueLight-400 text-primaryBlueLight-800 dark:text-primaryBlueDark-200 dark:hover:text-primaryBlueDark-400 dark:focus:ring-primaryBlueDark-400 scale-100 rounded-md outline-none transition-all duration-300 ease-in-out hover:scale-110 focus:ring"
					>
						<IconBrandTiktok size={28} />
					</a>
				</div>
				<div className="flex flex-col items-center gap-2">
					<p className="text-sm">
						&copy; 2024 Daily Stride. All rights reserved.
					</p>
					<a
						href="https://imtiyaazdev.vercel.app/"
						target="_blank"
						className="focus:border-primaryBlueLight-800 text-primaryBlueLight-800 hover:text-primaryBlueLight-400 dark:text-primaryBlueDark-400 dark:focus:border-primaryBlueDark-600 dark:hover:text-primaryBlueDark-600 outline-none transition-all duration-300 ease-in-out focus:border-b-2"
					>
						Designed and built by Imtiyaaz Isaacs
					</a>
				</div>
			</div>
		</motion.footer>
	);
}
