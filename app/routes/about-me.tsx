import { memo } from "react";
import type { Route } from "./+types/about-me";
import { ScrollDownButton, ScrollShadow, TwoColPage } from "~/components";

const AboutLeft = memo(function AboutLeft() {
	return (
		<section
			id="profile"
			aria-labelledby="profile-title"
			className="w-full h-full min-h-0 flex flex-col gap-12 justify-start lg:pt-36 py-6 pl-2 pr-10 lg:px-10 items-start"
		>
			<ScrollShadow
				className="h-full w-full"
				contentClassName="h-full flex flex-col gap-8 px-4"
			>
				<p className="font-extralight text-2xl lg:text-3xl">
					I’m a full-stack engineer specializing in backend systems, scalable
					infrastructures, and end-to-end product delivery. With hands-on experience
					as a CTO, backend team lead, and independent developer, I combine technical
					depth with leadership and strategy.
				</p>

				<h3 className="text-3xl lg:text-4xl font-bold">My technical stack includes:</h3>

				<p className="text-2xl lg:text-3xl font-bold">
					Backend Development:{" "}
					<span className="font-normal text-accent">
						Laravel, Spring Boot (Kotlin), REST APIs, Redis
					</span>
				</p>

				<p className="text-2xl lg:text-3xl font-bold">
					Frontend Development:{" "}
					<span className="font-normal text-accent">
						React, Inertia.js, Unity (AR, game logic)
					</span>
				</p>

				<p className="text-2xl lg:text-3xl font-bold">
					DevOps & Infrastructure:{" "}
					<span className="font-normal text-accent">
						Docker, NGINX, Hetzner cloud hosting, GitHub Actions CI/CD
					</span>
				</p>

				<p className="text-2xl lg:text-3xl font-bold">
					Cloud & Performance:{" "}
					<span className="font-normal text-accent">
						MySQL, Redis, caching strategies, optimization at scale
					</span>
				</p>

				<p className="text-2xl lg:text-3xl font-bold">
					Leadership & Collaboration:{" "}
					<span className="font-normal text-accent">
						CTO decision-making, team mentorship, Agile practices
					</span>
				</p>

				<p className="font-extralight text-2xl lg:text-3xl">
					I believe in writing clean, maintainable code and delivering business value through technology.
				</p>
			</ScrollShadow>
		</section>
	);
});

const AboutRight = memo(function AboutRight() {
	return (
		<section
			aria-labelledby="about-title"
			className="flex flex-col lg:gap-7 w-full h-full justify-between px-12 py-12 lg:px-28"
		>
			<h1 id="about-title" className="text-5xl lg:text-7xl font-bold leading-tight">
				<span className="flex flex-col gap-4 text-4xl leading-tight lg:hidden">
					<span>
						I build <span className="text-accent">the logic </span>
						behind <span className="text-accent">the web.</span><br />
					</span>
					<span>
						Get to <span className="text-accent">know</span><br />
						me better!
					</span>
				</span>
				<span className="hidden lg:block text-5xl lg:text-7xl">
					I build <span className="text-accent">the logic</span><br />
					behind <span className="text-accent">the web.</span><br />
					Get to <span className="text-accent">know me</span> better!
				</span>
			</h1>

			<ScrollDownButton />
		</section>
	);
});

const AboutMe = () => {
	return <TwoColPage left={<AboutLeft />} right={<AboutRight />} />;
};
export default AboutMe;

export const meta = ({ params }: Route.MetaArgs) => {
	const ORIGIN = import.meta.env.VITE_BASE_URL;
	const lang = (params as { lang?: string })?.lang === "bs" ? "bs" : "en";
	const url = `${ORIGIN}/${lang}/about-me`;

	const title =
		lang === "bs"
			? "O meni — Ivan Mijić | Medior Software Engineer, CTO iskustvo"
			: "About Ivan Mijić — Medior Software Engineer with CTO Experience";

	const description =
		lang === "bs"
			? "Saznajte više o Ivanu Mijiću: medior software inženjer s CTO iskustvom. Fokus na Laravel, Spring Boot (Kotlin), React, DevOps, skaliranje i performanse."
			: "Learn more about Ivan Mijić: a medior software engineer with CTO experience. Focused on Laravel, Spring Boot (Kotlin), React, DevOps, scalability and performance.";

	const ogImage = `${ORIGIN}/og/about.jpg`;
	const locale = lang === "bs" ? "bs_BA" : "en_US";

	return [
		{ charSet: "utf-8" },
		{ title },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ name: "description", content: description },
		{ name: "author", content: "Ivan Mijić" },
		{ name: "theme-color", content: "#FF601C" },
		{
			name: "robots",
			content:
				"index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
		},
		{ tagName: "link", rel: "canonical", href: url },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en/about-me`, hrefLang: "en" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/bs/about-me`, hrefLang: "bs" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en/about-me`, hrefLang: "x-default" },
		{ property: "og:type", content: "profile" },
		{ property: "og:site_name", content: "Ivan Mijić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: ogImage },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:image:alt", content: "About Ivan Mijić" },
		{ property: "og:locale", content: locale },
		{ property: "og:locale:alternate", content: locale === "bs_BA" ? "en_US" : "bs_BA" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: ogImage },
	];
};
