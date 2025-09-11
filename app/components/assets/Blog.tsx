import type { SVGProps } from "react";

const Blog = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="35"
		height="34"
		fill="none"
		viewBox="0 0 35 34"
	>
		<path
			fill="currentColor"
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M24.222 32.524a1.63 1.63 0 0 1-2.303 0l-2.582-2.583a1.63 1.63 0 0 1 0-2.302l9.095-9.095a1.63 1.63 0 0 1 2.303 0l2.582 2.582a1.63 1.63 0 0 1 0 2.302z"
		></path>
		<path
			fill="currentColor"
			d="m27.393 18.6-2.2-10.998a1.6 1.6 0 0 0-1.194-1.242L3.77 1.045a1.6 1.6 0 0 0-1.931 1.931l5.315 20.23A1.6 1.6 0 0 0 8.395 24.4l10.998 2.2"
		></path>
		<path
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="m27.393 18.6-2.2-10.998a1.6 1.6 0 0 0-1.194-1.242L3.77 1.045a1.6 1.6 0 0 0-1.931 1.931l5.315 20.23A1.6 1.6 0 0 0 8.395 24.4l10.998 2.2"
		></path>
		<path fill="currentColor" d="m1.793 1 11.733 11.733z"></path>
		<path
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="m1.793 1 11.733 11.733"
		></path>
		<path
			fill="currentColor"
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M16.193 19.134a3.733 3.733 0 1 0 0-7.467 3.733 3.733 0 0 0 0 7.467"
		></path>
	</svg>
);

export default Blog;

