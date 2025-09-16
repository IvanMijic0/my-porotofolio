import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useParams,
} from "react-router";
import type { Route } from "./+types/root";
import { type PropsWithChildren } from "react";

import "./app.css";
import { I18nProvider } from "./providers";

export const links: Route.LinksFunction = () => [
	{ rel: "preload", as: "font", href: "/fonts/roboto.woff2", type: "font/woff2", crossOrigin: "anonymous" },
];

export const Layout = ({ children }: PropsWithChildren) => (
	<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<Meta />
			<Links />
		</head>
		<body>
			<div id="modal-root"></div>
			{children}
			<ScrollRestoration />
			<Scripts />
		</body>
	</html>
);

const App = () => {
	const { lang: langParam } = useParams();
	const lang = langParam === "ba" ? "ba" : "en";

	return <I18nProvider lang={lang}><Outlet /></I18nProvider>;
}
export default App;

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
};
