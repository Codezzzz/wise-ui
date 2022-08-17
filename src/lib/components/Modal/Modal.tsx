/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { animated, useTransition } from "react-spring";
import Overlay from "../Overlay";
import Portal from "../Portal";

export type ModalProps = {
	/**
	 * Whether the overlay is visible or not.
	 */
	visible: boolean;
	/**
	 * Sets transitionType for modal appear & disappear.
	 * Default is `pop`.
	 */
	transitionType?: keyof typeof transitions;
	/**
	 * By default, modal width depends on children's width and has 1.5rem padding.
	 * To customize, set `className` to this component.
	 */
	className?: string;
	/**
	 * 모달 width, default 520px / 32.5rem
	 */
	width?: number | string;
	children?: React.ReactNode;
};

const transitions = {
	fade: {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			tension: 250,
			friction: 18,
			clamp: true
		}
	},
	pop: {
		from: { opacity: 0, transform: "scale(0.9) translateY(100%)" },
		enter: { opacity: 1, transform: "scale(1) translateY(0%)" },
		leave: {
			opacity: 0,
			transform: "scale(0.9) translateY(100%)"
		},
		config: {
			tension: 200,
			friction: 20
		}
	}
} as const;

function Modal({
	visible,
	children,
	transitionType = "pop",
	className,
	width = "32.5rem"
}: ModalProps) {
	const transition = useTransition(visible, {
		...transitions[transitionType],
		reverse: visible
	});
	return (
		<Portal>
			<Overlay visible={visible} />
			{transition((animatedStyle, item) =>
				item ? (
					<div css={styles.positioner}>
						<animated.div
							style={animatedStyle}
							css={[styles.modal, { width }]}
							className={className}
						>
							{children}
						</animated.div>
					</div>
				) : null
			)}
		</Portal>
	);
}

export default Modal;

const styles = {
	positioner: css`
		position: fixed;
		left: 50%;
		top: 50%;
		z-index: 20;
		transform: translate(-50%, -50%);
	`,
	modal: css`
		padding: 1.5rem;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
			0px 8px 8px -4px rgba(16, 24, 40, 0.03);
		border-radius: 12px;
	`
};
