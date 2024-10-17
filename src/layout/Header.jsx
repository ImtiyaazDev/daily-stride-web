import { IconMenu, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { navLinks } from "../data/index";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className="bg-primaryBlueLight-50 lg:px-15 relative flex items-center justify-between px-6 md:px-10">
			<figure className="-ml-8 w-32">
				<img
					src="/assets/logo-transparent.png"
					alt="Daily Stride logo"
				/>
			</figure>
			<nav
				className={`bg-primaryBlueLight-50 absolute left-0 z-50 w-full px-6 py-8 transition-all duration-500 ease-in-out md:px-10 lg:static lg:w-fit lg:p-0 ${isMenuOpen ? "top-[100px]" : "-top-[1000px]"}`}
			>
				<ul className="flex flex-col items-start gap-6 lg:flex-row">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className="text-primaryBlueLight-800 font-medium"
						>
							<a href={`#${link.href}`}>{link.text}</a>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<IconSun />
						<IconMoon />
					</div>
					<a className="bg-primaryRed-200 text-primaryRed-800 rounded-full px-3 py-2 md:px-4 md:py-3">
						Sign Up
					</a>
				</div>
				<button
					className="lg:hidden"
					onClick={handleClick}
				>
					{!isMenuOpen ? <IconMenu /> : <IconX />}
				</button>
			</div>
		</header>
	);
}
