import { motion } from "framer-motion";
import { Link } from "react-router";
import ExternalLink from "../assets/ExternalLink";

type ExternalLinkButtonProps = {
	href: string;
	ariaLabel?: string;
	className?: string;
	newTab?: boolean;
};

const easeOutCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ExternalLinkButton = ({
	href,
	ariaLabel = "Open external link",
	className,
	newTab = true,
}: ExternalLinkButtonProps) => {
	const openInNewTab = newTab || /^https?:\/\//i.test(href);

	return (
		<motion.div
			whileHover={{ scale: 1.06 }}
			whileTap={{ scale: 0.92 }}
			transition={{ type: "tween", duration: 0.18, ease: easeOutCubic }}
			className={className}
		>
			<Link
				to={href}
				target={openInNewTab ? "_blank" : undefined}
				rel={openInNewTab ? "noopener noreferrer" : undefined}
				aria-label={ariaLabel}
				className="inline-flex w-[32px] h-[32px] lg:w-[57px] lg:h-[57px] items-center justify-center rounded-full bg-transparent focus:outline-none"
			>
				<ExternalLink className="w-8 h-8 lg:w-10 lg:h-10" />
			</Link>
		</motion.div>
	);
}

export default ExternalLinkButton;
