import type { SVGProps } from "react";

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="22"
		height="22"
		fill="none"
		viewBox="0 0 22 22"
	>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 11 11 21 1 11M11 1v20"
		></path>
	</svg>
);

export default ArrowDown;
