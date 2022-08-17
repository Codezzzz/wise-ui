/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
export type LabelProps = {
	children: React.ReactNode; // Label Text
	required?: boolean;
};

function Label({ children, required = false }: LabelProps) {
	return (
		<label css={style}>
			<span>{children}</span>
			{required && <span className="required">*</span>}
		</label>
	);
}

export default Label;
const style = css`
	display: flex;
	align-items: center;
	color: ${colorPalette("gray700")};
	font-weight: 400;
	font-size: ${fontSize.sm};
	font-family: ${fontFamily.Medium};
	line-height: 20px;
	margin-bottom: 6px;
	span.required {
		color: ${colorPalette("primary600")};
		font-family: ${fontFamily.Medium};
		margin-left: 4px;
		font-size: ${fontSize.sm};
	}
`;
