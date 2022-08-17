/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Type = "right" | "left" | "top" | "bottom" | "top_bottom" | "left_right";
export type SpaceProps = {
	type: Type;
	gap: string | number;
	children?: React.ReactNode;
};

function Space({ type, gap, children }: SpaceProps) {
	return (
		<div css={[createStyle(type, gap), { boxSizing: "border-box" }]}>
			{children}
		</div>
	);
}

export default Space;

const createStyle = (type: Type, gap: string | number) => {
	if (
		type === "right" ||
		type === "left" ||
		type === "top" ||
		type === "bottom"
	) {
		const val = `padding-${type} : ${gap}`;
		return css(val);
	} else if (type === "top_bottom") {
		return css`
			padding-top: ${gap};
			padding-bottom: ${gap};
		`;
	} else {
		return css`
			padding-left: ${gap};
			padding-right: ${gap};
		`;
	}
};
