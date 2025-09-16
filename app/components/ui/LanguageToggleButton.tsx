import { useMemo, type MouseEventHandler } from "react";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";
import { ButtonSquircleContainer } from "../assets";

type Lang = "ba" | "en";

type Props = {
	width?: number;
	height?: number;
};

const pickLangFromPath = (pathname: string): Lang => {
	const seg = pathname.split("/").filter(Boolean)[0];
	return seg === "ba" ? "ba" : "en";
};

const buildPathWithLang = (pathname: string, to: Lang) => {
	const parts = pathname.split("/");
	const segs = parts.filter(Boolean);
	if (segs[0] === "ba" || segs[0] === "en") segs[0] = to;
	else segs.unshift(to);
	return "/" + segs.join("/");
};

const LanguageToggleButton = ({ width = 60, height = 60 }: Props) => {
	const location = useLocation();
	const navigate = useNavigate();

	const currentLang = useMemo<Lang>(
		() => pickLangFromPath(location.pathname),
		[location.pathname]
	);

	const go = (lang: Lang) => {
		if (typeof window !== "undefined") {
			try {
				localStorage.setItem("lang", lang);
			} catch { }
		}
		const nextPath = buildPathWithLang(location.pathname, lang);
		navigate({ pathname: nextPath, search: location.search, hash: location.hash });
	};

	const onClickBA: MouseEventHandler<HTMLSpanElement> = (e) => {
		e.preventDefault();
		if (currentLang !== "ba") go("ba");
	};

	const onClickEN: MouseEventHandler<HTMLSpanElement> = (e) => {
		e.preventDefault();
		if (currentLang !== "en") go("en");
	};

	const isActive = false;
	const fill = isActive ? "#FCFCFC" : undefined;
	const fillOpacity = isActive ? 1 : 1;

	return (
		<button
			type="button"
			aria-label="Language"
			className="inline-flex items-center justify-center"
			onClick={(e) => {
				e.preventDefault();
				go(currentLang === "en" ? "ba" : "en");
			}}
		>
			<ButtonSquircleContainer
				fill={fill}
				fillOpacity={fillOpacity}
				width={width}
				height={height}
			>
				<div className="flex items-center lg:gap-1 text-[0.75rem] font-semibold select-none">
					<span
						onClick={onClickBA}
						className={clsx(
							"tracking-wide",
							currentLang === "ba" ? "text-[#BDBDBD]" : "text-[#424242]"
						)}
					>
						BA
					</span>
					<span className="text-[#BDBDBD]">/</span>
					<span
						onClick={onClickEN}
						className={clsx(
							"tracking-wide",
							currentLang === "en" ? "text-[#BDBDBD]" : "text-[#424242]"
						)}
					>
						EN
					</span>
				</div>

				<span className="sr-only">
					Switch language (current {currentLang.toUpperCase()})
				</span>
			</ButtonSquircleContainer>
		</button>
	);
};

export default LanguageToggleButton;
