import type { SVGProps } from "react";

const Home = (props: SVGProps<SVGSVGElement>) => (
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
			d="M30 13.476v15.156C30 30.502 28.516 32 26.666 32H20V18.528a1.67 1.67 0 0 0-1.667-1.684h-6.666A1.68 1.68 0 0 0 10 18.528V32H3.333C1.5 32 0 30.501 0 28.632V13.476c0-.993.433-1.937 1.183-2.576L12.85.796a3.325 3.325 0 0 1 4.316 0L28.833 10.9A3.32 3.32 0 0 1 30 13.476"
		></path>
	</svg>
);

export default Home;

