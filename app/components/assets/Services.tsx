import type { SVGProps } from "react";

const Services = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="32"
		fill="none"
		viewBox="0 0 30 32"
	>
		<path
			fill="currentColor"
			d="M29.25 22.333V9.667a3.17 3.17 0 0 0-1.583-2.74L16.583.595a3.17 3.17 0 0 0-3.166 0L2.333 6.928A3.17 3.17 0 0 0 .75 9.667v12.666a3.17 3.17 0 0 0 1.583 2.74l11.084 6.333a3.17 3.17 0 0 0 3.166 0l11.084-6.333a3.17 3.17 0 0 0 1.583-2.74"
		></path>
		<path
			fill="black"
			d="M15 22.334a6.333 6.333 0 1 0 0-12.667 6.333 6.333 0 0 0 0 12.667"
		></path>
	</svg>
);

export default Services;

