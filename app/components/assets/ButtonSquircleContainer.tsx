import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import {
	motion,
	useReducedMotion,
	type HTMLMotionProps,
	type MotionStyle,
} from "framer-motion";
import clsx from "clsx";

type Fit = "contain" | "cover";

type OwnProps = {
	children?: ReactNode;
	className?: string;
	width?: number | string;
	height?: number | string;
	aspectRatio?: number;
	fit?: Fit;
	fill?: string;
	fillOpacity?: number;
	stroke?: string;
	strokeWidth?: number;
};

type ButtonSquircleProps = OwnProps & HTMLMotionProps<"div">;

const NATIVE_W = 74;
const NATIVE_H = 74;
const NATIVE_RATIO = NATIVE_W / NATIVE_H;

const ButtonSquircleContainer = ({
	children,
	className,
	width = 74,
	height,
	aspectRatio = NATIVE_RATIO,
	fit = "contain",
	fill = "#252525",
	fillOpacity = 0.6,
	stroke = "#424242",
	strokeWidth = 1,
	onClick,
	tabIndex,
	style: styleProp,
	...rest
}: ButtonSquircleProps) => {
	const computed: MotionStyle = {};

	if (typeof width !== "undefined") {
		computed.width = typeof width === "number" ? `${width}px` : width;
	}

	if (typeof height === "undefined" || height === null) {
		computed.aspectRatio = String(aspectRatio);
	} else {
		computed.height = typeof height === "number" ? `${height}px` : height;
	}

	const style: MotionStyle = { ...(styleProp as MotionStyle), ...computed };

	const preserveAspectRatio = fit === "cover" ? "xMidYMid slice" : "xMidYMid meet";

	const prefersReduced = useReducedMotion();
	const spring = useMemo(
		() =>
			prefersReduced
				? { duration: 0 }
				: { type: "spring" as const, stiffness: 420, damping: 28, mass: 0.25 },
		[prefersReduced]
	);

	const hoverAnim = prefersReduced ? undefined : { scale: 1.06, y: -0.5 };
	const tapAnim = prefersReduced ? undefined : { scale: 0.96, y: 0 };

	const rootRef = useRef<HTMLDivElement>(null);

	return (
		<motion.div
			ref={rootRef}
			role={onClick ? "button" : rest.role}
			tabIndex={onClick ? (tabIndex ?? 0) : tabIndex}
			onKeyDown={(e) => {
				if (!onClick) return;
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					e.currentTarget.click();
				}
				rest.onKeyDown?.(e);
			}}
			onClick={onClick}
			className={clsx(
				"relative inline-block hover:cursor-pointer overflow-hidden select-none outline-none",
				"focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-0 rounded-[14%]",
				className
			)}
			style={style}
			initial={false}
			whileHover={hoverAnim}
			whileTap={tapAnim}
			transition={spring}
			{...rest}
		>
			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full"
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${NATIVE_W} ${NATIVE_H}`}
				preserveAspectRatio={preserveAspectRatio}
			>
				<path
					fill={fill}
					fillOpacity={fillOpacity}
					stroke={stroke}
					strokeWidth={strokeWidth}
					d="M37.001.507c7.238 0 13.592-.055 18.846.645 5.252.7 9.306 2.145 12.012 5.063 2.934 3.163 4.35 7.14 5.027 12.176.678 5.048.605 11.096.605 18.379 0 7.285.117 13.29-.511 18.335-.627 5.027-1.99 9.036-4.908 12.338-2.819 3.191-6.927 4.715-12.199 5.428-5.28.714-11.628.605-18.871.605-7.25 0-13.323.183-18.427-.454-5.084-.633-9.13-2.074-12.34-5.27-3.099-3.082-4.542-7.158-5.2-12.323-.66-5.18-.523-11.372-.523-18.66 0-7.276 0-13.559.687-18.71.687-5.154 2.051-9.083 4.702-11.718 3.122-3.103 7.25-4.573 12.446-5.258C23.555.396 29.758.507 37 .507Z"
				/>
			</svg>
			<div className="relative z-10 flex h-full w-full items-center justify-center">
				{children}
			</div>

			<motion.div
				aria-hidden
				className="pointer-events-none absolute inset-0 rounded-[14%]"
				style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
				animate={
					prefersReduced
						? { boxShadow: "0 0 0 rgba(0,0,0,0)" }
						: { boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }
				}
				transition={spring}
			/>
		</motion.div>
	);
};

export default ButtonSquircleContainer;
