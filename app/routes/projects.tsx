import { memo } from "react";
import type { Route } from "./+types/projects";
import { ExternalLinkButton, ScrollDownButton, ScrollShadow, TwoColPage } from "~/components";
import { useTranslate } from "~/hooks";

const ProjectsLeft = memo(function ProjectsLeft() {
	const { t } = useTranslate();

	return (
		<section
			id="profile"
			aria-labelledby="profile-title"
			className="w-full h-full min-h-0 flex flex-col gap-12 justify-start lg:pt-36 py-6 pl-2 pr-10 lg:px-14 items-start"
		>
			<ScrollShadow
				className="h-full w-full"
				contentClassName="h-full flex flex-col items-start gap-6 lg:gap-12 px-4"
			>
				<div className="w-full flex flex-col-reverse gap-1 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
					<h3 className="text-3xl lg:text-4xl font-bold">
						<span className="text-accent">MyPassionMatch</span> - CTO
					</h3>
					<ExternalLinkButton
						href="https://mypassionmatch.com"
						ariaLabel={t("projects.aria.open", "Open website")}
					/>
				</div>
				<div className="flex flex-col gap-8 lg:text-3xl items-start">
					<div>
						<p className="font-bold">{t("projects.labels.problem", "Problem")}:</p>
						<p className="font-extralight">
							{t("projects.mpm.problem", "A U.S.-based startup needed a scalable matchmaking platform.")}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.solution", "Solution")}:</p>
						<p className="font-extralight">
							{t(
								"projects.mpm.solution",
								"Led backend architecture, DevOps pipelines, and team management. Built the core system with Laravel & React."
							)}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.impact", "Impact")}:</p>
						<p className="font-extralight">
							{t(
								"projects.mpm.impact",
								"Successfully launched to U.S. users with a secure, production-ready platform."
							)}
						</p>
					</div>
				</div>
				<img
					src="/mockup-dating.webp"
					alt={t("projects.mpm.alt", "MyPassionMatch product mockup")}
					loading="lazy"
					decoding="async"
					className="w-full h-auto"
				/>
				<div className="w-full mt-12 lg:mt-0 flex flex-col-reverse gap-1 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
					<h3 className="text-3xl lg:text-4xl font-bold">
						<span className="text-accent">VitaSecura</span> - CTO
					</h3>
					<ExternalLinkButton
						href="https://app.vitasecura.ch"
						ariaLabel={t("projects.aria.open", "Open website")}
					/>
				</div>
				<div className="flex flex-col gap-8 lg:text-3xl items-start">
					<div>
						<p className="font-bold">{t("projects.labels.problem", "Problem")}:</p>
						<p className="font-extralight">
							{t("projects.vs.problem", "A Swiss healthcare company required a secure SaaS app with multilingual support.")}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.solution", "Solution")}:</p>
						<p className="font-extralight">
							{t(
								"projects.vs.solution",
								"Designed backend with Laravel & MySQL, implemented CI/CD with GitHub Actions, and oversaw cloud deployments."
							)}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.impact", "Impact")}:</p>
						<p className="font-extralight">
							{t(
								"projects.vs.impact",
								"Delivered a fully functional SaaS platform trusted by healthcare providers in Switzerland."
							)}
						</p>
					</div>
				</div>
				<img
					src="/mockup-crm.webp"
					alt={t("projects.vs.alt", "VitaSecura SaaS mockup")}
					loading="lazy"
					decoding="async"
					className="w-full h-auto"
				/>
				<div className="w-full mt-12 lg:mt-0 flex flex-col-reverse gap-1 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
					<h3 className="text-3xl lg:text-4xl font-bold">
						<span className="text-accent">Amna Kolić</span> - {t("projects.role.independent", "Independent Project")}
					</h3>
					<ExternalLinkButton
						href="https://amnakolic.com"
						ariaLabel={t("projects.aria.open", "Open website")}
					/>
				</div>
				<div className="flex flex-col gap-8 lg:text-3xl items-start">
					<div>
						<p className="font-bold">{t("projects.labels.problem", "Problem")}:</p>
						<p className="font-extralight">
							{t("projects.ak.problem", "Needed a modern, fast, and SEO-optimized personal brand website.")}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.solution", "Solution")}:</p>
						<p className="font-extralight">
							{t(
								"projects.ak.solution",
								"Designed and built full-stack with Laravel & custom UI, focusing on mobile performance and SEO."
							)}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.impact", "Impact")}:</p>
						<p className="font-extralight">
							{t("projects.ak.impact", "Delivered a high-performance personal brand site.")}
						</p>
					</div>
				</div>
				<img
					src="/mockup-cookie.webp"
					alt={t("projects.ak.alt", "Amna Kolić website mockup")}
					loading="lazy"
					decoding="async"
					className="w-full h-auto"
				/>
				<div className="w-full mt-12 lg:mt-0 flex flex-col-reverse gap-1 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
					<h3 className="text-3xl lg:text-4xl font-bold">
						<span className="text-accent">Mykotheke</span> - {t("projects.role.localization", "Localization Project")}

					</h3>
					<ExternalLinkButton
						href="https://mykotheke.at"
						ariaLabel={t("projects.aria.open", "Open website")}
					/>
				</div>
				<div className="flex flex-col gap-8 lg:text-3xl items-start">
					<div>
						<p className="font-bold">{t("projects.labels.problem", "Problem")}:</p>
						<p className="font-extralight">
							{t("projects.mk.problem", "Required multi-language support for a German/English user base.")}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.solution", "Solution")}:</p>
						<p className="font-extralight">
							{t(
								"projects.mk.solution",
								"Implemented full localization & translation workflows to make the platform accessible across regions."
							)}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.impact", "Impact")}:</p>
						<p className="font-extralight">
							{t(
								"projects.mk.impact",
								"Expanded usability and increased adoption across Austria and Germany."
							)}
						</p>
					</div>
				</div>
				<img
					src="/mockup-mykotheke.webp"
					alt={t("projects.mk.alt", "Mykotheke platform mockup")}
					loading="lazy"
					decoding="async"
					className="w-full h-auto"
				/>
				<div className="w-full mt-12 lg:mt-0 flex flex-col-reverse gap-1 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
					<h3 className="text-3xl lg:text-4xl font-bold">
						<span className="text-accent">Colibrie</span> - {t("projects.role.demo", "Demo Project")}
					</h3>
					<ExternalLinkButton
						href="https://colibrie.eu"
						ariaLabel={t("projects.aria.open", "Open website")}
					/>
				</div>
				<div className="flex flex-col gap-8 lg:text-3xl items-start">
					<div>
						<p className="font-bold">{t("projects.labels.problem", "Problem")}:</p>
						<p className="font-extralight">
							{t(
								"projects.cb.problem",
								"A European energy startup needed a platform to automate billing and financial management for decentralized, green energy communities in a user-friendly way."
							)}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.solution", "Solution")}:</p>
						<p className="font-extralight">
							{t(
								"projects.cb.solution",
								"Built a demo proof-of-concept: multi-tenant billing workflows, member administration, analytics dashboards, and demo booking flow. Backend with Spring Boot + PostgreSQL and an intuitive UI/UX aligned to Colibrie’s brand."
							)}
						</p>
					</div>
					<div>
						<p className="font-bold">{t("projects.labels.impact", "Impact")}:</p>
						<p className="font-extralight">
							{t(
								"projects.cb.impact",
								"Showcased a scalable MVP for automated energy community management—founding, managing, and analyzing energy hubs with ease."
							)}
						</p>
					</div>
				</div>
				<img
					src="/mockup-colibrie.webp"
					alt={t("projects.cb.alt", "Colibrie energy platform mockup")}
					loading="lazy"
					decoding="async"
					className="w-full h-auto"
				/>
			</ScrollShadow>
		</section >
	);
});

const ProjectsRight = memo(function ProjectsRight() {
	const { t } = useTranslate();

	return (
		<section
			aria-labelledby="services-title"
			className="flex flex-col justify-between lg:gap-7 h-full w-full px-12 py-12 lg:px-28"
		>
			<h1 id="services-title" className="text-5xl lg:text-7xl font-bold leading-tight">
				<span className="flex flex-col gap-4 text-5xl leading-tight lg:hidden">
					<span>
						{t("projects.head.mobile.l1", "Step into")}
						<br />
						{t("projects.head.mobile.l2", "the world")} <br />
						{t("projects.head.mobile.l3", "of")} <span className="text-accent">{t("projects.head.mobile.l4", "my")}</span>
						<br />
						<span className="text-accent">{t("projects.head.mobile.l5", "featured projects")}</span>
					</span>
				</span>

				<span className="hidden lg:block text-5xl lg:text-8xl">
					{t("projects.head.desktop.l1", "Step into the")}
					<br />
					{t("projects.head.desktop.l2", "world of")} <span className="text-accent">{t("projects.head.desktop.l3", "my")}</span>
					<br />
					<span className="text-accent">{t("projects.head.desktop.l4", "featured projects")}</span>
				</span>
			</h1>

			<ScrollDownButton />
		</section>
	);
});

const Projects = () => {
	return <TwoColPage left={<ProjectsLeft />} right={<ProjectsRight />} />;
};
export default Projects;

export const meta = ({ params }: Route.MetaArgs) => {
	const ORIGIN = import.meta.env.VITE_BASE_URL || "https://ivan-mijic.com";
	const langParam = (params as { lang?: string })?.lang;
	const lang = langParam === "bs" ? "bs" : "en";
	const url = `${ORIGIN}/${lang}/projects`;

	const title =
		lang === "bs"
			? "Istaknuti projekti — Ivan Mijić"
			: "Featured Projects — Ivan Mijić";
	const description =
		lang === "bs"
			? "Od CTO iskustva do samostalnih projekata: izbor istaknutih rješenja (SaaS, lokalizacija, arhitektura sistema) iz mog portfolija."
			: "From CTO work to solo builds: a selection of featured projects (SaaS, localization, systems architecture) from my portfolio.";

	const keywords =
		"Ivan Mijić, projects, portfolio, SaaS, Laravel, Spring Boot, React, CI/CD, localization, architecture, Bosnia, CTO";

	const ogImage = `${ORIGIN}/og/projects.jpg`;

	return [
		{ charSet: "utf-8" },
		{ title },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ name: "author", content: "Ivan Mijić" },
		{ name: "robots", content: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" },
		{ name: "theme-color", content: "#FF601C" },
		{ tagName: "link", rel: "canonical", href: url },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en/projects`, hrefLang: "en" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/bs/projects`, hrefLang: "bs" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en/projects`, hrefLang: "x-default" },
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Ivan Mijić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: ogImage },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: lang === "bs" ? "bs_BA" : "en_US" },
		{ property: "og:locale:alternate", content: lang === "bs" ? "en_US" : "bs_BA" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: ogImage },
	];
};
