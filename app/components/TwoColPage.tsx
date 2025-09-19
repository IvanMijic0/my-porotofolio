import { memo, type ReactNode, type JSX, type SVGProps } from "react";
import { NavLink, useParams } from "react-router";
import clsx from "clsx";
import {
	ButtonSquircleContainer,
	MobileSquircleContainer,
	TallSquircleContainer,
	WideSquircleContainer,
} from "./assets";
import { useIsMobile, useTranslate } from "~/hooks";
import { SiteConfig } from "~/config";
import { LanguageToggleButton } from "./ui";
import { NavHelper } from "~/helpers";

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
}: Props) {
	const { t } = useTranslate();
	const isMobile = useIsMobile('lg');

	const { lang: langParam } = useParams();
	const lang = (langParam === "ba" || langParam === "en") ? langParam : "en";

	return (
		<>
			<aside
				className={`
					    col-span-12 order-2 lg:order-1 lg:col-span-5 relative overflow-hidden
					    before:content-[''] before:pointer-events-none before:absolute before:inset-x-0 before:top-0
					    before:h-20 before:bg-gradient-to-b before:from-black before:to-transparent
					    lg:before:opacity-0 before:opacity-100

					    after:content-[''] after:pointer-events-none after:absolute after:inset-0
					    after:bg-black/50 lg:after:opacity-0 after:opacity-100 after:h-full

					    after:-z-10 before:-z-10
					  `}
				aria-labelledby="aside-title"
			>
				{!isMobile
					? <TallSquircleContainer>
						<div className={clsx("min-w-0 w-full h-screen", className)}>
							{left}
						</div>
					</TallSquircleContainer>
					: <div className={clsx("min-w-0 w-full min-h-[calc(100dvh-31rem)] flex", className)} style={{ minHeight: "-webkit-fill-available" }}>
						{left}
					</div>
				}
			</aside >
			<main
				className="
					    col-span-12 order-1
					    lg:order-2 lg:col-span-7 lg:px-12 py-6 xl:py-3 2xl:py-6
					    flex lg:flex-col justify-between gap-6
					    relative min-h-0 overflow-hidden

					    after:content-[''] after:absolute after:inset-x-0 after:bottom-0
					    after:h-20 after:bg-gradient-to-t after:from-black after:to-transparent
					    lg:after:hidden
					  "
			>
				{!isMobile
					? <WideSquircleContainer>
						<div className="relative z-10 w-full flex justify-center items-center">
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
				{!isMobile &&
					<nav className="z-50" aria-label="Primary">
						<ul className="grid grid-cols-3 w-[60%] gap-y-8 gap-x-6 pl-24">
							{SiteConfig.useNavElements().map(({ label, path, icon: Icon, accent, special }) => {
								const to = NavHelper.normalize(`/${lang}${path ? `/${path}` : ""}`);

								return (
									<li key={label} className="flex flex-col gap-6 items-center">
										<NavLink
											to={to}
											end={path === ""}
											className="inline-flex items-center justify-center"
										>
											{({ isActive }) => {
												const isSpecial = special && isActive

												return (
													<ButtonSquircleContainer
														fillOpacity={isActive ? 1 : accent ? 0.8 : 1}
														fill={
															isSpecial
																? "#FF601C"
																: isActive
																	? "#FCFCFC"
																	: accent
																		? "#FF601C80"
																		: undefined
														}
													>
														<Icon
															className={clsx(
																"w-8 h-8",
																isSpecial
																	? "text-white"
																	: isActive
																		? "text-black"
																		: accent
																			? "text-primary"
																			: "text-unfocus"
															)}
															aria-hidden="true"
															focusable="false"
														/>
														<span className="sr-only">{label}</span>
													</ButtonSquircleContainer>
												);
											}}
										</NavLink>
										<NavLink to={to} end={path === ""}>
											{({ isActive }) => (
												<p
													className={clsx(
														"text-lg text-center",
														(label.includes("Connect") || label.includes("Work")) && isActive
															? "text-accent"
															: isActive
																? "text-[#BDBDBD]"
																: accent
																	? "text-accent/80"
																	: "text-unfocus"
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
											)}
										</NavLink>
									</li>
								);
							})}
							<li className="flex flex-col gap-6 items-center">
								<LanguageToggleButton />
								<p className="text-lg text-center text-unfocus">
									{t("nav.language", "Language")}
								</p>
							</li>
						</ul>
					</nav>
				}
				<div
					aria-hidden
					className="pointer-events-none absolute lg:fixed -right-10 lg:right-10 bottom-0 z-0"
				>
					<img
						src={isMobile ? "/ivan_mijic_mobile.webp" : "/ivan_mijic.webp"}
						alt="Ivan Mijić — Software Engineer"
						decoding="async"
						fetchPriority="high"
						className="h-[25rem] lg:h-[calc(50vh-4rem)] object-cover w-auto select-none"
					/>
				</div>
			</main>
		</>
	);
});

export default TwoColPage;
