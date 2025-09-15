import type { SVGProps } from "react";

const ExternalLink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		fill="none"
		viewBox="0 0 32 32"
	>
		<path
			stroke="#FCFCFC"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3.111"
			d="M30 17.556v9.333A3.11 3.11 0 0 1 26.889 30H5.11A3.11 3.11 0 0 1 2 26.889V5.11A3.11 3.11 0 0 1 5.111 2h9.333M30 2 16 16M20.667 2H30v9.333"
		></path>
	</svg>
);

export default ExternalLink;
