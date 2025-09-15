import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router";
import { HamburgerButton, Modal, ScrollUpOnMobile, Silk } from "~/components";
import { useIsMobile } from "~/hooks";
import { SiteConfig } from "~/config";
import clsx from "clsx";
import { ButtonSquircleContainer, Logo } from "~/components/assets";
import { Link } from "react-router";

const Layout = () => {
	const isMobile = useIsMobile("lg");
	const [isModalOpen, setModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const location = useLocation();
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 800);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative w-screen h-screen">
			<AnimatePresence>
				{isLoading && (
					<motion.div
						key="loader"
						className="fixed inset-0 z-[99999] flex items-center justify-center bg-black block lg:hidden"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<motion.div
							initial={{ scale: 0.9 }}
							animate={{ scale: [0.9, 1, 0.9] }}
							transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
						>
							<Logo className="w-20 h-20" />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="pointer-events-none fixed inset-0 -z-10">
				<Silk
					backgroundMode
					className="fixed inset-0"
					color="#292929"
					speed={1}
					scale={0.5}
					noiseIntensity={0.4}
				/>
			</div>

			<div className="relative z-10 h-full w-full">
				{isMobile && (
					<div className="fixed right-4 top-4 z-50">
						<HamburgerButton onClick={openModal} />
					</div>
				)}
				<Outlet />
				<ScrollUpOnMobile />
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ul className="grid grid-cols-3 w-1/2 gap-y-12 gap-x-6 pl-24">
					{SiteConfig.navElements.map(({ label, href, icon: Icon, accent }) => {
						const isActive = location.pathname === href;

						return (
							<li key={label} className="flex flex-col gap-6 items-center">
								<Link
									to={href}
									aria-current={isActive ? "page" : undefined}
									className="inline-flex items-center justify-center"
								>
									<ButtonSquircleContainer
										fillOpacity={isActive ? 1 : accent ? 0.8 : 1}
										fill={isActive ? "#FCFCFC" : accent ? "#FF601C80" : undefined}
									>
										<Icon
											className={clsx(
												"w-8 h-8",
												isActive
													? "text-black"
													: accent
														? "text-primary"
														: "text-unfocus"
											)}
											aria-hidden="true"
											focusable="false"
										/>
										<span className="sr-only">{label}</span>
									</ButtonSquircleContainer>
								</Link>

								<p
									className={clsx(
										"text-lg text-center",
										isActive
											? "text-black"
											: accent
												? "text-accent/80"
												: "text-unfocus"
									)}
								>
									{label.includes("Connect") ? (
										<>
											Let&apos;s<br />Connect
										</>
									) : label.includes("Work") ? (
										<>
											View<br />Work
										</>
									) : (
										label
									)}
								</p>
							</li>
						);
					})}
				</ul>
			</Modal>
		</div>
	);
};

export default Layout;
