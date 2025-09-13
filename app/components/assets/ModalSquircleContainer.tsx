import { memo, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";

type Fit = "contain" | "cover";

type ModalContainerProps = {
	children?: ReactNode;
	className?: string;
	height?: number | string;
	aspectRatio?: number;
	fit?: Fit;
	fill?: string;
	fillOpacity?: number;
	stroke?: string;
	strokeOpacity?: number;
	radius?: number;
	strokeWidth?: number;
};

const NATIVE_W = 319;
const NATIVE_H = 364;
const NATIVE_RATIO = NATIVE_W / NATIVE_H;

const ModalSquircleContainer = memo(function ModalContainer({
	children,
	className,
	height,
	aspectRatio = NATIVE_RATIO,
	fit = "contain",
	fill = "#252525",
	fillOpacity = 0.9,
	stroke = "#454545",
	strokeOpacity = 1,
	radius = 53.5,
	strokeWidth = 1,
}: ModalContainerProps) {
	const style: CSSProperties = { width: "100%" };
	if (height == null) style.aspectRatio = String(aspectRatio);
	else style.height = typeof height === "number" ? `${height}px` : height;

	const preserve = fit === "cover" ? "xMidYMid slice" : "xMidYMid meet";

	return (
		<div className={clsx("relative w-full", className)} style={style}>
			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full"
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${NATIVE_W} ${NATIVE_H}`}
				preserveAspectRatio={preserve}
			>
				<rect
					x="0.5"
					y="0.5"
					width={NATIVE_W - 1}
					height={NATIVE_H - 1}
					rx={radius}
					fill={fill}
					fillOpacity={fillOpacity}
					stroke={stroke}
					strokeOpacity={strokeOpacity}
					strokeWidth={strokeWidth}
				/>
				<defs>
					<clipPath id="modal-clip">
						<rect
							x="0.5"
							y="0.5"
							width={NATIVE_W - 1}
							height={NATIVE_H - 1}
							rx={radius}
						/>
					</clipPath>
				</defs>
				<foreignObject
					x="0.5"
					y="0.5"
					width={NATIVE_W - 1}
					height={NATIVE_H - 1}
					clipPath="url(#modal-clip)"
				>
					<div
						className="h-full w-full flex items-center justify-center"
						style={{ overflow: "hidden" }}
					>
						{children}
					</div>
				</foreignObject>
			</svg>
		</div>
	);
});

export default ModalSquircleContainer;
