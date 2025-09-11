import type { SVGProps } from "react";

const Origami = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="29"
		height="28"
		fill="none"
		viewBox="0 0 29 28"
	>
		<path
			fill="#FCFCFC"
			d="M15 14V2A1.5 1.5 0 0 1 16.5.5h9.446a1.5 1.5 0 0 1 .976 2.639l-7.044 6.037M15 27.5 3.879 16.379A3 3 0 0 1 3 14.258V5.622a1.503 1.503 0 0 1 2.56-1.06L27 26.013"
		></path>
		<path
			fill="#FCFCFC"
			d="m15.32 1.071 12.622 22.45a1.5 1.5 0 0 1-.25 1.798l-1.753 1.744a1.5 1.5 0 0 1-1.059.437H6.526a1.5 1.5 0 0 1-.937-.329L1.875 24.2a1.5 1.5 0 0 1 .946-2.672H15"
		></path>
		<path
			stroke="#FF601C"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 14V2A1.5 1.5 0 0 1 16.5.5h9.446a1.5 1.5 0 0 1 .976 2.639l-7.044 6.037M15 27.5 3.879 16.379A3 3 0 0 1 3 14.258V5.622a1.503 1.503 0 0 1 2.56-1.06L27 26.013"
		></path>
		<path
			stroke="#FF601C"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m15.32 1.071 12.622 22.45a1.5 1.5 0 0 1-.25 1.798l-1.753 1.744a1.5 1.5 0 0 1-1.059.437H6.526a1.5 1.5 0 0 1-.937-.329L1.875 24.2a1.5 1.5 0 0 1 .946-2.672l6.248.04"
		></path>
	</svg>
);

export default Origami;

