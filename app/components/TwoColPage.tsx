import { memo, type ReactNode } from "react";
import clsx from "clsx";
import { TallSquircleContainer, WideSquircleContainer } from "./assets";

type Props = {
	left: ReactNode;
	right: ReactNode;
	className?: string;
};

const TwoColPage = memo(function TwoColPage({ left, right, className }: Props) {
	return (
		<>
			<TallSquircleContainer className="col-span-5">
				<section className={clsx("min-w-0 min-h-0", className)}>
					{left}
				</section>
			</TallSquircleContainer>

			<section className="col-span-7 p-12 relative min-h-0 overflow-hidden">
				<WideSquircleContainer
				>
					<div className="relative z-10 w-full h-full flex  justify-center items-center mb-27">{right}</div>
				</WideSquircleContainer>
				<div
					aria-hidden
					className="pointer-events-none fixed right-10 bottom-0 z-0"
				>
					<img
						src="/ivan_mijic.webp"
						alt="Ivan Mijić — software engineer"
						title="Ivan Mijić"
						loading="eager"
						decoding="async"
						fetchPriority='high'
						className="h-[calc(50vh-4rem)] w-auto select-none"
					/>
				</div>
			</section >
		</>
	);
});

export default TwoColPage;
