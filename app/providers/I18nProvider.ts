import { createElement, useEffect, type ReactNode } from "react";
import { I18nCtx } from "~/context";
import { translate, type Lang } from "~/i18n/i18n";

const I18nProvider = ({
	lang,
	children,
}: {
	lang: Lang;
	children: ReactNode;
}) => {
	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			/^\/(en|ba)(\/|$)/.test(window.location.pathname)
		) {
			localStorage.setItem("lang", lang);
		}
	}, [lang]);
	const t = (key: string, fallback?: string) => translate(lang, key, fallback);

	const makeHref = (path: string) => {
		const clean = path.startsWith("/") ? path : `/${path}`;
		return `/${lang}${clean}`;
	};

	const setLang = (newLang: Lang) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("lang", newLang);
			const current = window.location.pathname.replace(/^\/(en|ba)/, "");
			const { search, hash } = window.location;
			window.location.href = `/${newLang}${current}${search}${hash}`;
		}
	};

	const value: Ctx = { lang, t, makeHref, setLang };

	return createElement(I18nCtx.Provider, { value }, children as any);
};

export default I18nProvider;
