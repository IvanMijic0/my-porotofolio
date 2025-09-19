import { Outlet } from "react-router";
import { memo } from "react";

const GridShell = memo(function GridShell() {
	return (
		<div className="grid w-full lg:grid-cols-12 gap-0 lg:gap-2">
			<Outlet />
		</div>
	);
});

export default GridShell;
