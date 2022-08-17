/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { animated, useTransition } from "react-spring";

export type OverlayProps = {
	visible?: boolean;
};

function Overlay({ visible }: OverlayProps) {
	const transitions = useTransition(visible, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0, pointerEvents: "none" },
		reverse: visible
	});

	return transitions((styles, item) =>
		item ? (
			<animated.div style={styles} css={overlayStyle}></animated.div>
		) : null
	);
}

export default Overlay;

const overlayStyle = css`
	left: 0;
	top: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 10;
`;
