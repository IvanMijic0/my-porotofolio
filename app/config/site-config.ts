import { Person, Home, Phone, Origami, Services } from "~/components/assets";
import { useTranslate } from "~/hooks";

const useNavElements = () => {
	const { t, makeHref } = useTranslate();

	return [
		{ label: t("nav.home", "Home"), path: "", icon: Home, active: true, href: makeHref("") },
		{ label: t("nav.work", "View Work"), path: "projects", icon: Origami, accent: true, href: makeHref("projects"), special: true },
		{ label: t("nav.connect", "Let's Connect"), path: "contact", icon: Phone, accent: true, href: makeHref("contact"), special: true },
		{ label: t("nav.services", "Services"), path: "services", icon: Services, href: makeHref("services") },
		{ label: t("nav.about", "About"), path: "about-me", icon: Person, href: makeHref("about-me") },
	];
};

export default { useNavElements };

