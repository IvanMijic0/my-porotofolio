import { Outlet } from "react-router";
import { memo } from "react";

const GridShell = memo(function GridShell() {
	return (
		<div className="grid h-full w-full grid-cols-12 gap-2">
			<Outlet />
		</div>
	);
});

export default GridShell;
