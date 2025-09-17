import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useParams, NavLink } from "react-router";
import { HamburgerButton, LanguageToggleButton, Modal, ScrollUpOnMobile, Silk } from "~/components";
import { useIsMobile } from "~/hooks";
import { SiteConfig } from "~/config";
import clsx from "clsx";
import { ButtonSquircleContainer, Logo } from "~/components/assets";
import { NavHelper } from "~/helpers";

const LOADER_MS = 200;

const Layout = () => {
	const isMobile = useIsMobile("lg");
	const location = useLocation();

	const [isModalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const [isLoading, setIsLoading] = useState(true);
	const [visiblePath, setVisiblePath] = useState(location.pathname);

	useEffect(() => {
		const t = setTimeout(() => setIsLoading(false), LOADER_MS);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		if (isModalOpen) setModalOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (!isMobile) {
			setVisiblePath(location.pathname);
			return;
		}

		if (location.pathname !== visiblePath) {
			setIsLoading(true);
			const t = setTimeout(() => {
				setVisiblePath(location.pathname);
				setIsLoading(false);
			}, LOADER_MS);
			return () => clearTimeout(t);
		}
	}, [location.pathname, visiblePath, isMobile]);

	const shouldRenderOutlet = !isMobile || (!isLoading && location.pathname === visiblePath);

	return (
		<div className="relative w-screen h-screen">
			<AnimatePresence>
				{isLoading && (
					<motion.div
						key="loader"
						className="fixed inset-0 z-[99999] flex items-center justify-center bg-black lg:hidden"
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

				{shouldRenderOutlet ? <Outlet /> : null}
				<ScrollUpOnMobile />
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ul className="grid grid-cols-3 gap-y-12 gap-x-10 w-full">
					{SiteConfig.useNavElements().map(({ label, path, icon: Icon, accent, special }) => {
						const { lang: langParam } = useParams();
						const lang = (langParam === "ba" || langParam === "en") ? langParam : "en";
						const to = NavHelper.normalize(`/${lang}${path ? `/${path}` : ""}`);

						return (
							<li key={label} className="flex flex-col gap-4 items-center">
								<NavLink
									to={to}
									end={path === ""}
									className="inline-flex items-center justify-center"
									onClick={closeModal}
								>
									{({ isActive }: { isActive: boolean }) => {
										const isSpecial = special && isActive

										return (
											<ButtonSquircleContainer
												width={60}
												height={60}
												fillOpacity={isActive ? 1 : accent ? 0.8 : 1}
												fill={
													isSpecial
														? "#FF601C"
														: isActive
															? "#FCFCFC"
															: accent
																? "#FF601C80"
																: undefined
												}
											>
												<Icon
													className={clsx(
														"w-6 h-6",
														isSpecial
															? "text-white"
															: isActive
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
										);
									}}
								</NavLink>
								<NavLink to={to} end={path === ""} onClick={closeModal}>
									{({ isActive }) => (
										<p
											className={clsx(
												"text-sm text-center",
												(label.includes("Connect") || label.includes("Work")) && isActive
													? "text-accent"
													: isActive
														? "text-[#BDBDBD]"
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
									)}
								</NavLink>
							</li>
						);
					})}
					<li className="flex flex-col gap-4 items-center">
						<LanguageToggleButton width={60} height={60} />
						<p className="text-sm text-center text-unfocus">Language</p>
					</li>
				</ul>
			</Modal>
		</div>
	);
};

export default Layout;
