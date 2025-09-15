import { useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "../assets";

const easeOutCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];
const easeInCubic: [number, number, number, number] = [0.4, 0, 0.2, 1];

const variants: Variants = {
	initial: { opacity: 0, scale: 0.95 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: { type: "tween", duration: 0.25, ease: easeOutCubic },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		transition: { type: "tween", duration: 0.2, ease: easeInCubic },
	},
};

const ScrollDownButton = () => {
	const handleClick = useCallback(() => {
		const sections = Array.from(document.querySelectorAll("section"));
		const currentY = window.scrollY;
		const next = sections.find(
			(s) => s.getBoundingClientRect().top + window.scrollY > currentY + 10
		);
		if (next) next.scrollIntoView({ behavior: "smooth" });
		else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	}, []);

	return (
		<motion.button
			type="button"
			initial="initial"
			animate="animate"
			exit="exit"
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={handleClick}
			className="flex items-center justify-center w-12 h-12 rounded-full border lg:hidden"
			aria-label="Scroll down"
		>
			<ArrowDown className="w-6 h-6" />
		</motion.button>
	);
};

export default ScrollDownButton;
