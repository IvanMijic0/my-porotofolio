import { useMemo } from "react";
import { Link } from "react-router";
import {
	ButtonSquircleContainer,
	Home,
	NotFoundSquircleContainer,
	MobileNotFoundSquircleContainer,
} from "~/components";
import { useIsMobile } from "~/hooks";
import { useTranslate } from "~/hooks";
import { I18nProvider } from "~/providers";

type Lang = "en" | "ba";

function detectLang(): Lang {
	if (typeof window !== "undefined") {
		const m = window.location.pathname.match(/^\/(en|ba)(\/|$)/);
		if (m) return m[1] as Lang;
		const stored = localStorage.getItem("lang");
		if (stored === "ba") return "ba";
	}
	return "en";
}

function FallbackInner() {
	const { t, makeHref } = useTranslate();
	const isMobile = useIsMobile();

	return (
		<div className="flex flex-col justify-center gap-8 lg:gap-28 px-4 lg:px-0 items-center h-full w-full">
			{!isMobile ? (
				<NotFoundSquircleContainer height={240} className="flex items-center justify-center text-center">
					<div className="flex flex-col justify-between h-full">
						<h1 className="text-8xl font-bold">
							{t("fallback.title.l1", "Page")}{" "}
							<span className="text-accent">{t("fallback.title.l2", "not")}</span>{" "}
							{t("fallback.title.l3", "found")}
						</h1>
						<p className="text-3xl font-extralight">
							{t("fallback.message", "Sorry, the page you’re looking for doesn’t exist.")}
						</p>
					</div>
				</NotFoundSquircleContainer>
			) : (
				<MobileNotFoundSquircleContainer height={280} className="flex items-center justify-center text-center">
					<div className="flex flex-col justify-center gap-4 items-center h-full">
						<h1 className="text-6xl font-bold">
							{t("fallback.title.l1", "Page")}{" "}
							<span className="text-accent">{t("fallback.title.l2", "not")}</span>{" "}
							{t("fallback.title.l3", "found")}
						</h1>
						<p className="text-xl w-2/3 font-extralight">
							{t("fallback.message", "Sorry, the page you’re looking for doesn’t exist.")}
						</p>
					</div>
				</MobileNotFoundSquircleContainer>
			)}

			<div className="flex flex-col gap-6 items-center">
				<Link to={makeHref("")} aria-current="page" className="inline-flex items-center justify-center">
					<ButtonSquircleContainer>
						<Home className="w-8 h-8" aria-hidden="true" focusable="false" />
						<span className="sr-only">{t("fallback.home", "Home")}</span>
					</ButtonSquircleContainer>
				</Link>
				<p className="text-lg text-center text-unfocus">{t("fallback.home", "Home")}</p>
			</div>
		</div>
	);
}

export default function Fallback() {
	const initialLang = useMemo(detectLang, []);
	return (
		<I18nProvider lang={initialLang}>
			<FallbackInner />
		</I18nProvider>
	);
}
export const meta = () => {
	const ORIGIN = import.meta.env.VITE_BASE_URL;
	const title = "404 Page Not Found | Ivan Mijić Portfolio";
	const description =
		"Sorry, the page you’re looking for doesn’t exist. Return to the home page of Ivan Mijić — Software Engineer and CTO.";
	const ogImage = `${ORIGIN}/og/404.jpg`;

	return [
		{ title },
		{ name: "description", content: description },
		{ name: "robots", content: "noindex,follow" },
		{ tagName: "link", rel: "canonical", href: ORIGIN },
		{ property: "og:type", content: "website" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: ORIGIN },
		{ property: "og:image", content: ogImage },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:site_name", content: "Ivan Mijić Portfolio" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: ogImage },
	];
};
