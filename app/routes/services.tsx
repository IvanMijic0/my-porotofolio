import { memo } from "react";
import type { Route } from "./+types/about-me";
import { ScrollDownButton, ScrollShadow, TwoColPage } from "~/components";

const ServicesLeft = memo(function ServicesLeft() {
	return (
		<section
			id="profile"
			aria-labelledby="profile-title"
			className="w-full h-full min-h-0 flex flex-col gap-12 justify-start lg:pt-36 py-6 pl-2 pr-10 lg:px-14 items-start"
		>
			<ScrollShadow className="h-full w-full" contentClassName="h-full flex flex-col gap-8 px-4">
				<p className="font-extralight text-2xl lg:text-3xl">
					I help companies design and deliver secure, scalable, and future-proof software systems.
				</p>

				<h3 className="text-3xl lg:text-4xl font-bold">Services Offered:</h3>
				<ul
					className="
						    space-y-6
						    text-2xl lg:text-3xl leading-snug font-bold
						    pl-6
						  "
				>
					<li className="flex items-start gap-5">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">Backend Engineering</span>
							<span> — Laravel, Spring Boot (Kotlin), REST APIs, Redis</span>
						</span>
					</li>

					<li className="flex items-start gap-4">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">Full-Stack Development</span>
							<span> — Laravel + React, Inertia.js, complete web solutions</span>
						</span>
					</li>

					<li className="flex items-start gap-4">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">System Architecture</span>
							<span> — Secure, maintainable, and scalable infrastructures</span>
						</span>
					</li>

					<li className="flex items-start gap-4">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">DevOps & Automation</span>
							<span> — Docker, CI/CD pipelines, NGINX, Hetzner deployments</span>
						</span>
					</li>

					<li className="flex items-start gap-4">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">Optimization & Security</span>
							<span> — WordPress & SaaS performance hardening</span>
						</span>
					</li>

					<li className="flex items-start gap-4">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">Localization & Internationalization</span>
							<span> — Multi-language support for global platforms</span>
						</span>
					</li>

					<li className="flex items-start gap-4">
						<span className="mt-[1.1rem] h-2 w-2 rounded-full bg-accent flex-shrink-0" />
						<span>
							<span className="text-accent">Leadership & Mentorship</span>
							<span> — CTO-level guidance, Agile team leadership, code reviews</span>
						</span>
					</li>
				</ul>
			</ScrollShadow>
		</section>
	);
});

const ServicesRight = memo(function ServicesRight() {
	return (
		<section
			aria-labelledby="services-title"
			className="flex flex-col lg:gap-7 justify-between h-full w-full px-12 py-12 lg:px-28"
		>
			<h1 id="services-title" className="text-5xl lg:text-7xl font-bold leading-tight">
				<span className="flex flex-col gap-4 text-5xl leading-tight lg:hidden">
					<span>
						Let&apos;s build <br />
						<span className="text-accent">your </span>
						next
						<br />
						<span className="text-accent">scalable</span>
						<br />
						<span className="text-accent">solution</span>
					</span>
				</span>

				<span className="hidden lg:block text-5xl lg:text-8xl">
					Let&apos;s build <span className="text-accent">your</span>
					<br />
					next <span className="text-accent">scalable</span>
					<br />
					<span className="text-accent">solution</span>
				</span>
			</h1>

			<ScrollDownButton />
		</section>
	);
});

const Services = () => {
	return <TwoColPage left={<ServicesLeft />} right={<ServicesRight />} />;
};
export default Services;

export const meta = ({ params }: Route.MetaArgs) => {
	const ORIGIN = import.meta.env.VITE_BASE_URL;
	const lang = (params as { lang?: string })?.lang === "bs" ? "bs" : "en";
	const url = `${ORIGIN}/${lang}/services`;

	const title =
		lang === "bs"
			? "Ivan Mijić — Usluge"
			: "Services by Ivan Mijić — Software Engineering & Development";
	const description =
		lang === "bs"
			? "Usluge koje nudi Ivan Mijić: backend razvoj (Laravel, Spring Boot), full-stack aplikacije, sistemska arhitektura, DevOps, optimizacija i sigurnost, internacionalizacija i mentorska podrška."
			: "Explore software engineering services by Ivan Mijić: backend development (Laravel, Spring Boot), full-stack apps, system architecture, DevOps, optimization, security, internationalization, and leadership mentorship.";

	const ogImage = `${ORIGIN}/og/services.jpg`;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		serviceType: "Software Engineering Services",
		provider: {
			"@type": "Person",
			name: "Ivan Mijić",
			jobTitle: "Software Engineer",
			url,
		},
		description,
	};

	return [
		{ charSet: "utf-8" },
		{ title },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ name: "description", content: description },
		{ name: "author", content: "Ivan Mijić" },
		{
			name: "robots",
			content:
				"index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
		},
		{ name: "theme-color", content: "#FF601C" },
		{ tagName: "link", rel: "canonical", href: url },
		{
			tagName: "link",
			rel: "alternate",
			href: `${ORIGIN}/en/services`,
			hrefLang: "en",
		},
		{
			tagName: "link",
			rel: "alternate",
			href: `${ORIGIN}/bs/services`,
			hrefLang: "bs",
		},
		{
			tagName: "link",
			rel: "alternate",
			href: `${ORIGIN}/en/services`,
			hrefLang: "x-default",
		},
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
		{
			name: "json-ld",
			content: JSON.stringify(jsonLd),
		},
	];
};
