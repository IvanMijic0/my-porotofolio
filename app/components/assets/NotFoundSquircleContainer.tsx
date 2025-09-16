import { memo, type CSSProperties, type PropsWithChildren } from "react";
import clsx from "clsx";

const NotFoundSquircleSVG = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="748"
		height="288"
		fill="none"
		viewBox="0 0 748 288"
		className="w-full max-w-4xl h-auto"
		preserveAspectRatio="xMidYMid meet"
	>
		<path
			fill="#252525"
			fillOpacity="0.6"
			d="M403.944.017c8.445-.034 17.309.011 26.588.011 8.931 0 17.536-.018 25.78.041 10.574-.12 21.845-.042 33.804-.042q3.395 0 6.725-.003c8.949-.049 18.374.004 28.27.004 13.065 0 25.432-.047 36.993.18 12.895-.305 26.903-.18 42.012-.18 56.034 0 99.212-.858 121.122 22.765 23.507 25.345 22.364 63.48 22.364 119.842s1.837 93.85-21.505 120.272c-22.769 25.772-65.947 24.053-121.981 24.053-16.395 0-31.326.243-44.891-.052-10.734.128-22.13.052-34.114.052-14.978 0-28.735.201-41.344.01-12.254.039-23.658.158-34.257.011q-6.049-.001-12.332-.012c-4.485.018-9.077.013-13.769.005-10.653.037-20.661.126-30.052.045-11.838.056-22.823.084-33.001-.28-7.827.206-16.046.244-24.623.242-6.113 0-12.408-.021-18.876-.021-6.347.001-12.475.035-18.389.062l-2.612.012q-1.775.008-3.523.013c-7.178.021-14.028.004-20.561-.136-10.601.121-21.846.049-33.661.049-18.907 0-35.868.323-51.031-.23-13.417.361-27.986.23-43.547.23-56.035 0-94.967 2.859-120.718-22.765C-2.086 239.417.046 198.997.046 142.635s0-98.065 21.48-119.414C46.592-1.69 87.497.028 143.532.028c16.28 0 31.476-.072 45.38.404 14.829-.58 31.237-.404 49.199-.404 12.947 0 25.208-.046 36.679.175 6.378-.148 13.028-.192 19.949-.198l.847-.001h1.7c6.347 0 12.919.023 19.714.023h3.781l6.688-.003h1.066l1.043.001q2.376 0 4.718.005l.137.001c9.723.019 18.987.097 27.741.392 12.763-.492 26.691-.432 41.77-.406"
		/>
	</svg>
);

type Props = PropsWithChildren<{
	height?: number | string;
	aspectRatio?: number;
	className?: string;
	contentClassName?: string;
	paddingClassName?: string;
}>;

const NotFoundSquircleContainer = memo(function NotFoundSquircleContainer({
	children,
	height,
	aspectRatio = 748 / 288,
	className,
	contentClassName,
	paddingClassName = "p-6",
}: Props) {
	const style: CSSProperties = { width: "100%" };
	if (height == null) {
		style.aspectRatio = `${aspectRatio}`;
	} else {
		style.height = typeof height === "number" ? `${height}px` : height;
	}

	return (
		<div className={clsx("relative", className)} style={style}>
			<NotFoundSquircleSVG />

			<div
				className={clsx(
					"absolute inset-0 flex items-center justify-center",
					paddingClassName,
					contentClassName
				)}
			>
				{children}
			</div>
		</div>
	);
});

export default NotFoundSquircleContainer;
