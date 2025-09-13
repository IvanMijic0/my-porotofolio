import { useEffect, useState } from "react";

type Screens = {
	xxs: number; xs: number; sm: number; md: number; lg: number; xl: number; "2xl": number;
};

const SCREENS: Screens = { xxs: 280, xs: 400, sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };

const useIsMobile = (breakpoint: keyof Screens = "md", ssrFallback = false): boolean => {
	const bp = SCREENS[breakpoint];
	const query = `(max-width: ${bp - 1}px)`;

	const [isMobile, setIsMobile] = useState<boolean>(ssrFallback);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (typeof window === "undefined") return;

		const mql = window.matchMedia(query);
		const handler = () => setIsMobile(mql.matches);

		handler();

		if (typeof mql.addEventListener === "function") {
			mql.addEventListener("change", handler);
			return () => mql.removeEventListener("change", handler);
		} else {
			const prev = (mql as MediaQueryList).onchange;
			(mql as MediaQueryList).onchange = handler as (e: MediaQueryListEvent) => void;
			return () => { (mql as MediaQueryList).onchange = prev ?? null; };
		}
	}, [query]);

	return mounted ? isMobile : ssrFallback;
};

export default useIsMobile;
