import type { SVGProps } from "react";

const Phone = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		fill="none"
		viewBox="0 0 32 32"
	>
		<path
			fill="currentColor"
			stroke="#FF601C"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M18.748 22.852a1.5 1.5 0 0 0 1.82-.454l.532-.698a3 3 0 0 1 2.4-1.2H28a3 3 0 0 1 3 3V28a3 3 0 0 1-3 3A27 27 0 0 1 1 4a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-1.2 2.4l-.702.527a1.5 1.5 0 0 0-.438 1.849 21 21 0 0 0 9.588 9.576"
		></path>
	</svg>
);

export default Phone;

