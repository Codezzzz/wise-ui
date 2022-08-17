/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
export type BedgeProps = {
	theme?: "primary" | "base" | "error";
	backgroundColor?: string;
	color?: string;
	children: React.ReactNode;
	onClick?: () => void;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
};

function Bedge({
	theme = "primary",
	backgroundColor,
	color,
	children,
	onClick,
	icon,
	iconPosition = "right"
}: BedgeProps) {
	return (
		<span
			css={[
				style,
				themes[theme],
				{ backgroundColor, color },
				icon && { cursor: "pointer" }
			]}
			onClick={() => onClick?.()}
		>
			{icon && iconPosition === "left" && (
				<span css={iconStyle(iconPosition)}>{icon}</span>
			)}
			<span>{children}</span>
			{icon && iconPosition === "right" && (
				<span css={iconStyle(iconPosition)}>{icon}</span>
			)}
		</span>
	);
}

export default Bedge;

const style = css`
	display: inline-flex;
	width: fit-content;
	border-radius: 16px;
	font-size: ${fontSize.xs};
	font-family: ${fontFamily.Medium};
	padding: 2px 8px;
	line-height: 18px;
	height: 22px;
`;

const iconStyle = (position: "left" | "right") => css`
	display: flex;
	align-items: center;
	${position === "left"
		? css`
				margin-right: 6px;
		  `
		: css`
				margin-left: 6px;
		  `}
`;

const themes = {
	primary: css`
		background: ${colorPalette("primary50")};
		color: ${colorPalette("primary700")};
	`,
	base: css`
		background: ${colorPalette("gray100")};
		color: ${colorPalette("gray700")};
	`,
	error: css`
		background: ${colorPalette("error50")};
		color: ${colorPalette("error700")};
	`
};
