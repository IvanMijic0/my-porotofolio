import { Laravel, Springboot, TwoColPage, React, Redpanda, Hadoop, Elasticsearch } from "~/components";
import type { Route } from "./+types/home";
import { memo } from "react";

const HomeLeft = memo(function HomeLeft() {
	return (
		<section
			id="expertise"
			aria-labelledby="expertise-title"
			className="w-full flex flex-col gap-12 justify-start py-36 px-10 items-start"
		>
			<h2 id="expertise-title" className="text-4xl">
				Expertise:
			</h2>

			<ul className="px-20 grid grid-cols-2 gap-28">
				<li>
					<figure className="flex items-center gap-8 flex-col">
						<Laravel
							className="w-24 h-24 text-[#FF2D20]"
							aria-hidden="true"
							focusable="false"
						/>
						<figcaption className="font-light text-2xl">Laravel</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex items-center gap-8 flex-col">
						<Springboot className="w-24 h-24" aria-hidden="true" focusable="false" />
						<figcaption className="font-light text-2xl whitespace-nowrap">
							Spring Boot
						</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex items-center gap-8 flex-col">
						<React className="w-24 h-24" aria-hidden="true" focusable="false" />
						<figcaption className="font-light text-2xl">React</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex items-center gap-8 flex-col">
						<Redpanda className="w-24 h-24" aria-hidden="true" focusable="false" />
						<figcaption className="font-light text-2xl whitespace-nowrap">
							Redpanda
						</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex items-center gap-8 flex-col">
						<Hadoop className="w-24 h-24" aria-hidden="true" focusable="false" />
						<figcaption className="font-light text-2xl">Hadoop</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex items-center gap-8 flex-col">
						<Elasticsearch className="w-24 h-24" aria-hidden="true" focusable="false" />
						<figcaption className="font-light text-2xl whitespace-nowrap">
							Elasticsearch
						</figcaption>
					</figure>
				</li>
			</ul>
		</section>
	);
});


const HomeRight = memo(function HomeRight() {
	return (
		<section
			className="flex flex-col gap-7 w-full px-28"
			aria-labelledby="hero-title"
		>
			<h2 className="text-3xl font-light pl-1">Ivan Mijić</h2>
			<h1
				id="hero-title"
				className="w-full font-bold flex flex-col gap-4 leading-tight"
			>
				<span className="text-7xl">
					<span className="text-accent">Logic</span>-Driven
				</span>
				<span className="text-7xl">
					Design-<span className="text-accent">Conscious</span>
				</span>
				<span className="text-6xl">Engineering done right</span>
			</h1>
			<h3 className="text-3xl font-light pl-1">
				Medior Software Engineer with CTO Experience
			</h3>
		</section>
	);
});

export default function Home() {
	return <TwoColPage left={<HomeLeft />} right={<HomeRight />} />;
}

export const meta = ({ params }: Route.MetaArgs) => {
	const ORIGIN = "https://ivan-mijic.com";
	const lang = (params as { lang?: string })?.lang === "bs" ? "bs" : "en";
	const url = `${ORIGIN}/${lang}`;

	const title = "Ivan Mijić — Logic-Driven, Design-Conscious Software Engineer";
	const description =
		"Portfolio of Ivan Mijić, Medior Software Engineer with CTO experience. Expertise in Laravel, Spring Boot, React, Redpanda, Hadoop, and Elasticsearch — building scalable, high-performance digital products.";

	const ogImage = `${ORIGIN}/og/hero.jpg`;
	return [
		{ charSet: "utf-8" },
		{ title },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },

		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"Ivan Mijić, Software Engineer, CTO, Portfolio, Laravel, Spring Boot, React, Redpanda, Hadoop, Elasticsearch, DevOps, Bosnia",
		},
		{ name: "author", content: "Ivan Mijić" },
		{
			name: "robots",
			content: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
		},
		{ name: "theme-color", content: "#FF601C" },
		{ tagName: "link", rel: "canonical", href: url },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en`, hrefLang: "en" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/bs`, hrefLang: "bs" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en`, hrefLang: "x-default" },
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
