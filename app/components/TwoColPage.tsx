import { memo, type ReactNode, type JSX, type SVGProps } from "react";
import clsx from "clsx";
import {
	ButtonSquircleContainer,
	MobileSquircleContainer,
	TallSquircleContainer,
	WideSquircleContainer,
} from "./assets";
import { useIsMobile } from "~/hooks";
import { SiteConfig } from "~/config";

type NavItem = {
	label: string;
	href: string;
	icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	accent?: boolean;
	active?: boolean;
};

type Props = {
	left: ReactNode;
	right: ReactNode;
	className?: string;
	nav?: NavItem[];
	origin?: string;
};

const TwoColPage = memo(function TwoColPage({
	left,
	right,
	className,
	origin = import.meta.env.VITE_BASE_URL,
}: Props) {
	const isMobile = useIsMobile('lg');

	return (
		<>
			<aside
				className="
					    col-span-12 order-2 lg:order-1 lg:col-span-5 relative
					    before:content-[''] before:absolute before:inset-x-0 before:top-0
					    before:h-20 before:bg-gradient-to-b before:from-black before:to-transparent
					    after:content-[''] after:absolute after:inset-0 after:bg-black/30
					    after:-z-10 before:-z-10
					    lg:before:hidden lg:after:hidden
					  "
				aria-labelledby="aside-title"
			>
				{!isMobile
					? <TallSquircleContainer>
						<section className={clsx("min-w-0 w-full h-full", className)}>
							{left}
						</section>
					</TallSquircleContainer>
					: <section className={clsx("min-w-0 w-full", className)}>
						{left}
					</section>

				}
			</aside>
			<main
				className="
					    col-span-12 order-1 py-6
					    lg:order-2 lg:col-span-7 lg:px-12 lg:py-6
					    flex lg:flex-col justify-between gap-2
					    relative min-h-0 overflow-hidden
					    after:content-[''] after:absolute after:inset-x-0 after:bottom-0
					    after:h-20 after:bg-gradient-to-t after:from-black after:to-transparent
					    lg:after:hidden
					  "
			>
				{!isMobile
					? <WideSquircleContainer>
						<div className="relative z-10 w-full h-full flex justify-center items-center">
							{right}
						</div>
					</WideSquircleContainer>
					:
					<div
						className="-ml-8 pr-8 max-w-[calc(100%+1rem)]"
					>
						<MobileSquircleContainer className="block w-[341px] max-w-full">
							<div className="relative z-10 w-full h-full">
								{right}
							</div>
						</MobileSquircleContainer>
					</div>

				}
				{!isMobile && <nav className="mt-6" aria-label="Primary">
					<ul className="grid grid-cols-3 w-1/2 gap-y-12 gap-x-6 pl-24">
						{SiteConfig.navElements.map(({ label, href, icon: Icon, accent, active }) => (
							<li key={label} className="flex flex-col gap-6 items-center">
								<ButtonSquircleContainer fill={accent ? "#FF601C80" : undefined}>
									<a
										href={`${origin}${href}`}
										aria-current={active ? "page" : undefined}
										className="inline-flex items-center justify-center"
									>
										<Icon
											className={clsx(
												"w-8 h-8",
												accent ? "text-primary" : "text-unfocus"
											)}
											aria-hidden="true"
											focusable="false"
										/>
										<span className="sr-only">{label}</span>
									</a>
								</ButtonSquircleContainer>
								<p
									className={clsx(
										"text-lg text-center",
										accent ? "text-accent/80" : "text-unfocus"
									)}
								>
									{label.includes("Connect") ? (
										<>
											Let&apos;s<br />Connect
										</>
									) : label.includes("Work") ? (
										<>
											View<br />Work
										</>
									) : (
										label
									)}
								</p>
							</li>
						))}
					</ul>
				</nav>
				}
				<div
					aria-hidden
					className="pointer-events-none absolute lg:fixed -right-10 lg:right-10 bottom-0 z-0"
				>
					<img
						src="/ivan_mijic.webp"
						alt=""
						role="presentation"
						loading="lazy"
						decoding="async"
						fetchPriority="low"
						className="h-[25rem] lg:h-[calc(50vh-4rem)] object-cover w-auto select-none"
					/>
				</div>
			</main>
		</>
	);
});

export default TwoColPage;
