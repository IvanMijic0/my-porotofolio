import type { SVGProps } from "react";

const Person = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="21"
		height="32"
		fill="none"
		viewBox="0 0 21 32"
	>
		<path
			fill="currentColor"
			d="M10.5 15.2c2.652 0 5.196.817 7.071 2.271s2.929 3.427 2.929 5.483V32h-6.667v-9.046c0-.685-.35-1.343-.976-1.828-.625-.484-1.473-.757-2.357-.757s-1.732.273-2.357.757c-.625.485-.976 1.143-.976 1.828V32H.5v-9.046c0-2.056 1.054-4.029 2.929-5.483s4.419-2.27 7.071-2.27"
		></path>
		<path fill="currentColor" d="M13.3 16.8H6.9V32h6.4z"></path>
		<path
			fill="currentColor"
			d="M14.1 16.8H7.7V32h6.4zM10.5 13.6a6.8 6.8 0 1 0 0-13.6 6.8 6.8 0 0 0 0 13.6"
		></path>
	</svg>
);

export default Person;

