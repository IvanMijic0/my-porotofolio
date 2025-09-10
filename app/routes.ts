import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	route("", "routes/layout.tsx", [
		route("", "routes/grid-shell.tsx", [
			index("routes/home.tsx"),
			route("*", "routes/fallback.tsx"),
		]),
	]),
] satisfies RouteConfig;
