import type { SVGProps } from "react";

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="51"
		height="49"
		fill="none"
		viewBox="0 0 51 49"
	>
		<path
			fill="currentColor"
			d="M35.7 15.3A15.3 15.3 0 0 1 51 30.6v17.85H40.8V30.6a5.1 5.1 0 0 0-10.2 0v17.85H20.4V30.6a15.3 15.3 0 0 1 15.3-15.3M10.2 17.85H0v30.6h10.2zM5.1 10.2A5.1 5.1 0 1 0 5.1 0a5.1 5.1 0 0 0 0 10.2"
		></path>
	</svg>
);

export default Linkedin;

