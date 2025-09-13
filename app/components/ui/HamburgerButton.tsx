import type { MouseEventHandler } from "react";
import { ButtonSquircleContainer, HamburgerDots } from "../assets";

type HamburgerProps = {
	onClick?: MouseEventHandler<HTMLDivElement>;
	ariaLabel?: string;
	className?: string;
};

const Hamburger = ({ onClick, ariaLabel = "Open menu", className }: HamburgerProps) => {
	return (
		<ButtonSquircleContainer
			onClick={onClick}
			aria-label={ariaLabel}
			className={className}
			width={50}
			height={50}
		>
			<HamburgerDots className="w-8 h-8" aria-hidden="true" focusable="false" />
		</ButtonSquircleContainer>
	);
};

export default Hamburger;
