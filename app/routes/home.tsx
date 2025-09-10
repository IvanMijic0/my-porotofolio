import { WideSquircleContainer } from "~/components";
import type { Route } from "./+types/home";

export const meta = ({ }: Route.MetaArgs) => {
	return [
		{ title: "Ivan Mijic Portofolio" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

import TwoColPage from "~/components/TwoColPage";
import { memo } from "react";

const HomeLeft = memo(function HomeLeft() {
	return (
		<div className="w-full flex justify-center items-center">
			<h2 className="text-white text-7xl font-semibold">Home Sidebar</h2>
		</div>
	);
});

const HomeRight = memo(function HomeRight() {
	return (
		<div>
			<h1 className="text-white text-8xl font-bold">Home</h1>
		</div>
	);
});

export default function Home() {
	return <TwoColPage left={<HomeLeft />} right={<HomeRight />} />;
}
