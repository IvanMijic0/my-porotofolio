import { Silk } from "~/components";
import { Outlet } from "react-router";

const Layout = () => {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<div className="pointer-events-none absolute inset-0 z-10">
				<Silk backgroundMode className="fixed inset-0" color="#292929" speed={1} scale={0.5} noiseIntensity={0.4} />
			</div>

			<div className="relative z-10 h-full w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
