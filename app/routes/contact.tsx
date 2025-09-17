import { memo } from "react";
import type { Route } from "./+types/projects";
import {
	ButtonSquircleContainer,
	Linkedin,
	Mail,
	Contact as ContactIcon,
	ScrollShadow,
	TwoColPage,
	Github,
} from "~/components";
import { Link } from "react-router";
import { useIsMobile, useTranslate } from "~/hooks";

const ContactLeft = memo(function ContactLeft() {
	const isMobile = useIsMobile();
	const { t } = useTranslate();

	const buttonSize = isMobile ? 60 : 80;

	return (
		<section
			id="profile"
			aria-labelledby="profile-title"
			className="w-full h-screen min-h-0 lg:pt-48 pb-6"
		>
			<ScrollShadow
				className="h-full w-full"
				contentClassName="h-full flex flex-col items-center justify-start gap-12"
			>
				{[
					{
						to: "mailto:contact@ivan-mijic.com",
						Icon: Mail,
						accent: t("contact.cta.email_accent", "Email"),
						rest: t("contact.cta.email_rest", "me"),
					},
					{
						to: "tel:+387603025624",
						Icon: ContactIcon,
						accent: t("contact.cta.call_accent", "Call"),
						rest: t("contact.cta.call_rest", "me"),
					},
					{
						to: "https://www.linkedin.com/in/ivan-miji%C4%871/",
						Icon: Linkedin,
						accent: t("contact.cta.connect_accent", "Connect"),
						rest: t("contact.cta.connect_rest", "with me"),
						external: true,
					},
					{
						to: "https://github.com/IvanMijic0",
						Icon: Github,
						accent: t("contact.cta.personal_accent", "Personal"),
						rest: t("contact.cta.personal_rest", "GitHub"),
						external: true,
					},
				].map(({ to, Icon, accent, rest, external }) => (
					<Link
						key={accent}
						to={to}
						target={external ? "_blank" : undefined}
						rel={external ? "noopener noreferrer" : undefined}
						className="flex items-center w-full lg:w-[22rem] gap-8"
					>
						<ButtonSquircleContainer
							width={buttonSize}
							height={buttonSize}
							className="shrink-0"
						>
							<Icon className="w-9 h-9 lg:w-11 lg:h-11" />
						</ButtonSquircleContainer>

						<p className="flex-1 text-md lg:text-2xl text-[#BDBDBD] text-left">
							<span className="text-accent">{accent}</span> {rest}
						</p>
					</Link>
				))}
			</ScrollShadow>
		</section>
	);
});

const ContactRight = memo(function ContactRight() {
	const { t } = useTranslate();

	return (
		<section
			aria-labelledby="services-title"
			className="w-full px-12 py-12 lg:px-28"
		>
			<div className="flex flex-col gap-6 lg:gap-16 h-full">
				<h1 id="services-title" className="text-5xl lg:text-7xl font-bold leading-tight">
					<span className="block text-5xl lg:text-7xl">
						{t("contact.head.l1", "Get in")}{" "}
						<span className="text-accent">{t("contact.head.accent", "Touch")}</span>
					</span>
				</h1>
				<p className="text-lg lg:text-2xl font-extralight w-5/6 lg:w-4/5">
					{t(
						"contact.sub",
						"Looking for a mid-level full-stack software engineer, or CTO-level consultant? Let’s talk."
					)}
				</p>
			</div>
		</section>
	);
});

const Contact = () => {
	return <TwoColPage left={<ContactLeft />} right={<ContactRight />} />;
};
export default Contact;

export const meta = ({ params }: Route.MetaArgs) => {
	const ORIGIN = import.meta.env.VITE_BASE_URL || "https://ivan-mijic.com";
	const lang = (params as { lang?: string })?.lang === "bs" ? "bs" : "en";

	const path = lang === "bs" ? "/bs/contact" : "/en/contact";
	const url = `${ORIGIN}${path}`;

	const title =
		lang === "bs"
			? "Kontakt — Ivan Mijić | Softverski inženjer"
			: "Contact — Ivan Mijić | Software Engineer";

	const description =
		lang === "bs"
			? "Kontaktirajte Ivana Mijića: medior softverski inženjer sa CTO iskustvom. Backend i full-stack razvoj, arhitektura sistema, DevOps, performanse i sigurnost."
			: "Contact Ivan Mijić: mid-level software engineer with CTO experience. Backend & full-stack engineering, systems architecture, DevOps, performance and security.";

	const keywords =
		lang === "bs"
			? "Ivan Mijić, kontakt, softverski inženjer, backend, full-stack, Laravel, Spring Boot, React, DevOps, CTO, konzultant"
			: "Ivan Mijić, contact, software engineer, backend, full-stack, Laravel, Spring Boot, React, DevOps, CTO, consultant";

	const ogImage = `${ORIGIN}/og/contact.jpg`;
	const locale = lang === "bs" ? "bs_BA" : "en_US";
	const altLocale = lang === "bs" ? "en_US" : "bs_BA";

	return [
		{ charSet: "utf-8" },
		{ title },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{
			name: "robots",
			content:
				"index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
		},
		{ name: "author", content: "Ivan Mijić" },
		{ name: "theme-color", content: "#FF601C" },
		{ tagName: "link", rel: "canonical", href: url },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en/contact`, hrefLang: "en" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/bs/contact`, hrefLang: "bs" },
		{ tagName: "link", rel: "alternate", href: `${ORIGIN}/en/contact`, hrefLang: "x-default" },
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Ivan Mijić Portfolio" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: ogImage },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: locale },
		{ property: "og:locale:alternate", content: altLocale },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: ogImage },
	];
};
