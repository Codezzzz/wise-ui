/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { FontFamilyKey } from "lib/styles/font";

import { colorPalette } from "lib/styles/palette";
export type TextProps = {
	as?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "p"
		| "span"
		| "div"
		| "label"
		| "strong"
		| "a";
	whiteSpace?: "pre" | "nowrap" | "pre-wrap" | "pre-line" | "normal";
	children: React.ReactNode;
	size?: string | number;
	weight?: 350 | 400 | 500 | 600 | 700;
	align?: "left" | "center" | "right";
	className?: string;
	truncate?: boolean;
	clamp?: number;
	color?: string;
	fontFamily?: FontFamilyKey;
	lineHeight?: string | number;
};

function Text({
	as = "div",
	whiteSpace,
	children,
	size = "1rem",
	weight = 350,
	align,
	className,
	truncate,
	clamp,
	color = "gray500",
	fontFamily,
	lineHeight,
	...rest
}: TextProps) {
	return jsx(
		as,
		{
			css: [
				css({
					whiteSpace,
					textAlign: align,
					fontWeight: weight,
					fontFamily: fontFamily,
					lineHeight: lineHeight
				}),
				textStyle,
				truncate && truncateStyle,
				clamp && clampStyle(clamp),
				{
					fontSize: size,
					color: colorPalette(color)
				}
			],

			className,
			rest
		},
		children
	);
}

export default Text;

const textStyle = css`
	margin: 0;
`;

const truncateStyle = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`;

const clampStyle = (lines: number) => css`
	display: -webkit-box;
	-webkit-line-clamp: ${lines};
	-webkit-box-orient: vertical;
	overflow: hidden;
`;
