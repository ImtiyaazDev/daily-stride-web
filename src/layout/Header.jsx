import { IconMenu, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { navLinks } from "../data/index";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref);
	const { toggleDarkMode, isDarkMode } = useDarkMode();
	console.log(isDarkMode);

	const handleClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleScroll = (id) => {
		const section = document.getElementById(id);
		if (section)
			section.scrollIntoView({ block: "center", behavior: "smooth" });
	};

	const variants = {
		hidden: { y: "-100px", opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: "easeIn"
			}
		}
	};

	useEffect(
		function () {
			if (!isInView && isMenuOpen) setIsMenuOpen((prev) => !prev);
		},
		[isInView, isMenuOpen]
	);

	return (
		<motion.header
			initial="hidden"
			animate="show"
			variants={variants}
			className="bg-primaryBlueLight-50 lg:px-15 dark:bg-primaryBlueDark-950 relative z-50 flex items-center justify-between px-6 md:px-10"
			ref={ref}
		>
			<figure className="-ml-8 w-32">
				<img
					src="/assets/logo-transparent.png"
					alt="Daily Stride logo"
				/>
			</figure>
			<nav
				className={`bg-primaryBlueLight-50 dark:bg-primaryBlueDark-950 absolute left-0 z-50 w-full px-6 py-8 transition-all duration-500 ease-in-out md:px-10 lg:static lg:w-fit lg:p-0 ${isMenuOpen ? "top-[100px]" : "-top-[1000px]"}`}
			>
				<ul className="flex flex-col items-start gap-6 lg:flex-row">
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
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<button onClick={toggleDarkMode}>
							{isDarkMode ? <IconSun /> : <IconMoon />}
						</button>
					</div>
					<a
						className="bg-primaryRed-200 text-primaryRed-800 hover:bg-primaryRed-100 hover:border-primaryRed-800 focus:ring-offset-primaryRed-800 dark:hover:border-primaryRed-400 dark:focus:ring-offset-primaryRed-400 cursor-pointer rounded-full border-2 border-transparent px-3 py-2 outline-none transition-all duration-300 ease-in-out focus:ring focus:ring-transparent focus:ring-offset-2 md:px-4 md:py-3"
						href="#signup"
					>
						Sign Up
					</a>
				</div>
				<button
					className="focus:ring-primaryBlueLight-700 text-primaryBlueLight-700 rounded-md outline-none focus:ring lg:hidden"
					onClick={handleClick}
				>
					{!isMenuOpen ? <IconMenu /> : <IconX />}
				</button>
			</div>
		</motion.header>
	);
}
