import type { SVGProps } from "react";

const Mail = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="57"
		height="41"
		fill="none"
		viewBox="0 0 57 41"
	>
		<path
			fill="currentColor"
			d="M48.9 0H8.1A5.1 5.1 0 0 0 3 5.1v30.6a5.1 5.1 0 0 0 5.1 5.1h40.8a5.1 5.1 0 0 0 5.1-5.1V5.1A5.1 5.1 0 0 0 48.9 0"
		></path>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="5.1"
			d="M54 7.65 31.073 22.254a5.1 5.1 0 0 1-5.123 0L3 7.65"
		></path>
	</svg>
);

export default Mail;

