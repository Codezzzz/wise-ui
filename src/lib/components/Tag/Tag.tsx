/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { Icon } from "../Icon";
export type TagProps = {
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
	closeable?: boolean;
	onClick?: () => void;
};

function Tag({ size = "sm", children, closeable = false, onClick }: TagProps) {
	return (
		<span css={[style, sizes[size]]}>
			{children}

			{closeable && (
				<Icon
					icon="tagClose"
					size={iconSize[size]}
					css={[iconMargin[size]]}
					onClick={onClick}
				/>
			)}
		</span>
	);
}

export default Tag;

const style = css`
	width: fit-content;
	display: inline-flex;
	background: #ffffff;
	border: 1px solid ${colorPalette("gray300")};
	border-radius: 6px;
	font-family: ${fontFamily.Medium};
	border-radius: 6px;
	text-align: center;
	align-items: center;
	justify-content: center;
	color: #344054;
`;

const sizes = {
	sm: css`
		font-size: ${fontSize.xs};
		padding: 3px 8px;
		line-height: 18px;
	`,
	md: css`
		font-size: ${fontSize.sm};
		padding: 2px 9px;
		line-height: 20px;
	`,
	lg: css`
		font-size: ${fontSize.sm};
		padding: 4px 10px;
		line-height: 20px;
	`
};

const iconSize = {
	sm: "9px",
	md: "10px",
	lg: "11px"
};

const iconMargin = {
	sm: css`
		margin-left: 7px;
	`,
	md: css`
		margin-left: 8px;
	`,
	lg: css`
		margin-left: 9.5px;
	`
};
