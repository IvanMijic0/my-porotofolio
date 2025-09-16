import type { SVGProps } from "react";

const Contact = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="51"
		height="51"
		fill="none"
		viewBox="0 0 51 51"
	>
		<path
			fill="#D9D9D9"
			d="M30.172 37.148a2.55 2.55 0 0 0 3.093-.772l.905-1.186a5.1 5.1 0 0 1 4.08-2.04h7.65a5.1 5.1 0 0 1 5.1 5.1v7.65a5.1 5.1 0 0 1-5.1 5.1A45.9 45.9 0 0 1 0 5.1 5.1 5.1 0 0 1 5.1 0h7.65a5.1 5.1 0 0 1 5.1 5.1v7.65a5.1 5.1 0 0 1-2.04 4.08l-1.193.895a2.55 2.55 0 0 0-.745 3.144 35.7 35.7 0 0 0 16.3 16.28"
		></path>
	</svg>
);

export default Contact;
