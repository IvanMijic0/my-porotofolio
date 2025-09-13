import { Person, Home, Phone, Origami, Services, Blog } from "~/components/assets";

const navElements = [
	{ label: "Home", href: "/en", icon: Home, active: true },
	{ label: "View Work", href: "/en/photography", icon: Origami, accent: true },
	{ label: "Let's Connect", href: "/en/contact", icon: Phone, accent: true },
	{ label: "Services", href: "/en/services", icon: Services },
	{ label: "About", href: "/en/about-me", icon: Person },
	{ label: "Blog", href: "/en/blog", icon: Blog },
]


export default {
	navElements
}
