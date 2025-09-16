import { useEffect } from "react";
import { useNavigate } from "react-router";

const RedirectLang = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) || "en";
		const lang = stored === "ba" ? "ba" : "en";
		navigate(`/${lang}`, { replace: true });
	}, [navigate]);

	return null;
}

export default RedirectLang;
