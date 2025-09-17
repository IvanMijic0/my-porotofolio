import { memo, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";

type ModalSquircleContainerProps = {
	children?: ReactNode;
	className?: string;
	height?: number | string;
	aspectRatio?: number;
	fit?: "contain" | "cover";
	fill?: string;
	fillOpacity?: number;
	stroke?: string;
	strokeOpacity?: number;
	radius?: number;
	strokeWidth?: number;
};

const ModalSquircleContainer = memo(
	({
		children,
		className,
		height,
		aspectRatio = 319 / 364,
		fit = "contain",
		fill = "#252525",
		fillOpacity = 0.9,
		stroke = "#454545",
		strokeOpacity = 1,
		radius = 53.5,
		strokeWidth = 1,
	}: ModalSquircleContainerProps) => {
		const style: CSSProperties = {
			width: "100%",
			...(height == null ? { aspectRatio: String(aspectRatio) } : { height }),
		};

		return (
			<div
				className={clsx(
					"relative w-full rounded-[53.5px] overflow-hidden isolate",
					className
				)}
				style={style}
			>
				<svg
					aria-hidden="true"
					className="absolute inset-0 h-full w-full pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 319 364"
					preserveAspectRatio={fit === "cover" ? "xMidYMid slice" : "xMidYMid meet"}
				>
					<rect
						x="0.5"
						y="0.5"
						width="318"
						height="363"
						rx={radius}
						fill={fill}
						fillOpacity={fillOpacity}
						stroke={stroke}
						strokeOpacity={strokeOpacity}
						strokeWidth={strokeWidth}
					/>
				</svg>
				<div className="relative z-10 h-full w-full">{children}</div>
			</div>
		);
	}
);

export default ModalSquircleContainer;
