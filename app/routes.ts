import { route, index, type RouteConfig } from "@react-router/dev/routes";

export default [
	route("", "routes/layout.tsx", [
		route(":lang", "routes/grid-shell.tsx", [
			index("routes/home.tsx"),
			route("projects", "routes/projects.tsx"),
			route("contact", "routes/contact.tsx"),
			route("services", "routes/services.tsx"),
			route("about-me", "routes/about-me.tsx"),
			route("blog", "routes/blog.tsx"),
			route("*", "routes/fallback.tsx"),
		]),
	]),
] satisfies RouteConfig;
