import { useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUp } from "../assets";

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

const ScrollUpButton = () => {
	const handleClick = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
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
			className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full border lg:hidden"
			aria-label="Scroll up"
		>
			<ArrowUp className="w-6 h-6" />
		</motion.button>
	);
};

export default ScrollUpButton;
