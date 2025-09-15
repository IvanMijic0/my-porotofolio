import {
	useRef,
	useState,
	useEffect,
	type PropsWithChildren,
	type CSSProperties,
} from "react";
import clsx from "clsx";

type Orientation = "vertical" | "horizontal" | "both";

type ScrollShadowProps = {
	className?: string;
	contentClassName?: string;
	orientation?: Orientation;
	fadeSize?: number;
	shadowColor?: string;
	scrollbarGutter?: number;
};

const ScrollShadow = ({
	children,
	className,
	contentClassName,
	orientation = "vertical",
	fadeSize = 60,
	scrollbarGutter = 6,
}: PropsWithChildren<ScrollShadowProps>) => {
	const ref = useRef<HTMLDivElement>(null);

	const [atTop, setAtTop] = useState(true);
	const [atBottom, setAtBottom] = useState(true);
	const [atLeft, setAtLeft] = useState(true);
	const [atRight, setAtRight] = useState(true);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let ticking = false;
		const update = () => {
			ticking = false;

			if (orientation === "vertical" || orientation === "both") {
				const { scrollTop, scrollHeight, clientHeight } = el;
				setAtTop(scrollTop <= 0);
				setAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
			}
			if (orientation === "horizontal" || orientation === "both") {
				const { scrollLeft, scrollWidth, clientWidth } = el;
				setAtLeft(scrollLeft <= 0);
				setAtRight(scrollLeft + clientWidth >= scrollWidth - 1);
			}
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		};

		const onResize = () => update();

		el.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		update();

		return () => {
			el.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
		};
	}, [orientation]);

	const top = (orientation === "vertical" || orientation === "both") && !atTop ? fadeSize : 0;
	const bottom =
		(orientation === "vertical" || orientation === "both") && !atBottom ? fadeSize : 0;
	const left = (orientation === "horizontal" || orientation === "both") && !atLeft ? fadeSize : 0;

	const rightBase =
		(orientation === "horizontal" || orientation === "both") && !atRight ? fadeSize : 0;
	const right = rightBase > 0 ? rightBase + scrollbarGutter : 0;

	const verticalMask =
		top > 0 || bottom > 0
			? `linear-gradient(to bottom,
			   transparent 0px,
			   black ${top}px,
			   black calc(100% - ${bottom}px),
			   transparent 100%)`
			: "";

	const horizontalMask =
		left > 0 || right > 0
			? `linear-gradient(to right,
			   transparent 0px,
			   black ${left}px,
			   black calc(100% - ${right}px),
			   transparent 100%)`
			: "";

	const maskImage = [verticalMask, horizontalMask].filter(Boolean).join(",");

	const style: CSSProperties =
		maskImage.length > 0
			? { WebkitMaskImage: maskImage, maskImage }
			: {};

	return (
		<div className={clsx("relative", className)}>
			<div
				ref={ref}
				className={clsx(
					"overflow-auto [-webkit-overflow-scrolling:touch]",
					"px-1 py-1",
					contentClassName
				)}
				style={style}
				role="region"
			>
				{children}
			</div>
		</div>
	);
}

export default ScrollShadow;
