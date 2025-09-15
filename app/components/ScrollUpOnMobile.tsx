import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useIsMobile } from "~/hooks";
import { ScrollUpButton } from "./ui";

type Props = {
	threshold?: number;
};

const ScrollUpOnMobile = ({ threshold = 200 }: Props) => {
	const isMobile = useIsMobile("lg");
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!isMobile) {
			setVisible(false);
			return;
		}

		let ticking = false;
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				setVisible(window.scrollY > threshold);
				ticking = false;
			});
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isMobile, threshold]);

	return (
		<AnimatePresence>
			{isMobile && visible && <ScrollUpButton />}
		</AnimatePresence>
	);
};

export default ScrollUpOnMobile;
