import { memo, type ReactNode, type JSX } from "react";
import clsx from "clsx";
import {
	Blog,
	ButtonSquircleContainer,
	Home as HomeIcon,
	Origami,
	Person,
	Phone,
	Services,
	TallSquircleContainer,
	WideSquircleContainer,
} from "./assets";

type NavItem = {
	label: string;
	href: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
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
	nav = [
		{ label: "Home", href: "/en", icon: HomeIcon, active: true },
		{ label: "View Work", href: "/en/photography", icon: Origami, accent: true },
		{ label: "Let's Connect", href: "/en/contact", icon: Phone, accent: true },
		{ label: "Services", href: "/en/services", icon: Services },
		{ label: "About", href: "/en/about-me", icon: Person },
		{ label: "Blog", href: "/en/blog", icon: Blog },
	],
}: Props) {
	return (
		<>
			<aside
				className="col-span-5"
				aria-labelledby="aside-title"
			>
				<TallSquircleContainer>
					<section className={clsx("min-w-0 w-full h-full", className)}>
						{left}
					</section>
				</TallSquircleContainer>
			</aside>

			<main className="col-span-7 px-12 py-6 h-full flex flex-col justify-between gap-2 relative min-h-0 overflow-hidden">
				<WideSquircleContainer>
					<div className="relative z-10 w-full h-full flex justify-center items-center">
						{right}
					</div>
				</WideSquircleContainer>

				<nav
					className="mt-6"
					aria-label="Primary"
				>
					<ul className="grid grid-cols-3 w-1/2 gap-y-12 gap-x-6 pl-24">
						{nav.map(({ label, href, icon: Icon, accent, active }) => (
							<li key={label} className="flex flex-col gap-6 items-center">
								<ButtonSquircleContainer fill={accent ? "#FF601C80" : undefined}>
									<a
										href={href}
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
				<footer className="w-1/2 pl-30 flex justify-center">
					<small className="text-sm text-unfocus">
						© {new Date().getFullYear()} Ivan Mijić. All rights reserved.
					</small>
				</footer>

				<div
					aria-hidden
					className="pointer-events-none fixed right-10 bottom-0 z-0"
				>
					<img
						src="/ivan_mijic.webp"
						alt=""
						role="presentation"
						loading="lazy"
						decoding="async"
						fetchPriority="low"
						className="h-[calc(50vh-4rem)] w-auto select-none"
					/>
				</div>

				<script type="application/ld+json" suppressHydrationWarning>
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: "Ivan Mijić — Portfolio",
						url: origin,
						inLanguage: ["en", "bs"],
						potentialAction: {
							"@type": "SearchAction",
							target: `${origin}/search?q={query}`,
							"query-input": "required name=query",
						},
					})}
				</script>

				<script type="application/ld+json" suppressHydrationWarning>
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SiteNavigationElement",
						name: "Primary Navigation",
						hasPart: nav.map((n, i) => ({
							"@type": "WebPage",
							name: n.label,
							url: `${origin}${n.href}`,
							position: i + 1,
						})),
					})}
				</script>
			</main>
		</>
	);
});

export default TwoColPage;
