import {
	useCallback,
	useEffect,
	useRef,
	type ReactNode,
	memo,
	type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ModalSquircleContainer } from "../assets";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	ariaLabel?: string;
	className?: string;
	height?: number | string;
	aspectRatio?: number;
	fit?: "contain" | "cover";
	fill?: string;
	fillOpacity?: number;
	stroke?: string;
	strokeOpacity?: number;
	radius?: number;
	strokeWidth?: number;
};

const Modal = memo(function Modal({
	isOpen,
	onClose,
	children,
	ariaLabel = "Dialog",
	className,
	height,
	aspectRatio,
	fit,
	fill = "#252525",
	fillOpacity = 0.9,
	stroke = "#454545",
	strokeOpacity = 1,
	radius = 53.5,
	strokeWidth = 1,
}: ModalProps) {
	const portalRoot =
		typeof document !== "undefined"
			? (document.getElementById("modal-root") as HTMLElement | null)
			: null;

	const previouslyFocused = useRef<HTMLElement | null>(null);
	const dialogRef = useRef<HTMLDivElement>(null);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (!isOpen || typeof document === "undefined") return;

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		previouslyFocused.current = (document.activeElement as HTMLElement) ?? null;

		const container = dialogRef.current;
		if (container) {
			const focusable = container.querySelector<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			(focusable ?? container).focus?.({ preventScroll: true });
		}

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = originalOverflow;
			previouslyFocused.current?.focus?.();
		};
	}, [isOpen, handleKeyDown]);

	const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) onClose();
	};

	if (!portalRoot) return null;

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div

					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm isolate"
					onMouseDown={onBackdropClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25 }}
				>
					<motion.div
						ref={dialogRef}
						role="dialog"
						aria-modal="true"
						aria-label={ariaLabel}
						tabIndex={-1}
						className="relative z-10 max-w-[min(92vw,860px)] w-full px-4"
						onMouseDown={(e) => e.stopPropagation()}
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.25 }}
					>
						<div className="absolute -top-12 left-1/2 -translate-x-1/2 text-4xl font-light">
							Menu
						</div>

						<ModalSquircleContainer
							height={height}
							aspectRatio={aspectRatio}
							fit={fit}
							fill={fill}
							fillOpacity={fillOpacity}
							stroke={stroke}
							strokeOpacity={strokeOpacity}
							radius={radius}
							strokeWidth={strokeWidth}
							className="shadow-2xl"
						>
							<div className={clsx("p-6 sm:p-8 h-full flex justify-center items-center ", className)}>{children}</div>
						</ModalSquircleContainer>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		portalRoot
	);
});

export default Modal;
