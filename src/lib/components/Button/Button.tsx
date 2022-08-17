/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, FontFamilyKey, fontSize } from "../../styles";
import { colorPalette } from "../../styles";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import FlexDirection from "../FlexDirection";

interface ButtonProps
	extends Omit<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		"type"
	> {
	/** 버튼 안의 내용 */
	children: React.ReactNode;
	/** 클릭했을 때 호출할 함수 */
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	/** 버튼의 생김새를 설정합니다. */
	theme: "primary" | "error" | "base";
	/** 버튼의 크기를 설정합니다 */
	size: "small" | "medium" | "big";
	/** 버튼을 비활성화 시킵니다. */
	disabled?: boolean;
	/** 버튼의 너비를 임의로 설정합니다. */
	width?: string | number;
	type?: "button" | "submit" | "reset";
	icon?: React.ReactNode;
	iconGap?: string | number;
	iconPosition?: "left" | "right";
	/** custom bg */
	backgroundColor?: string;
	/** custom color */
	color?: string;
	/** custom border color */
	borderColor?: string;
	height?: string | number;
	fontFamily?: FontFamilyKey;
}

function Button({
	children,
	onClick,
	theme,
	size,
	disabled,
	width,
	type,
	icon,
	iconGap = "0.764rem",
	iconPosition = "left",
	backgroundColor,
	color,
	borderColor,
	height,
	fontFamily,
	...rest
}: ButtonProps) {
	return (
		<button
			type={type}
			css={[
				style,
				themes[theme],
				sizes[size],
				{
					width,
					backgroundColor,
					color,
					borderColor,
					height,
					fontFamily
				}
			]}
			onClick={onClick}
			disabled={disabled}
			{...rest}
		>
			{icon ? (
				iconPosition === "left" ? (
					<FlexDirection.Row
						gap={iconGap}
						alignItems="center"
						justifyContent="center"
					>
						<span style={{ display: "flex" }}>{icon}</span>
						<span>{children}</span>
					</FlexDirection.Row>
				) : (
					<FlexDirection.Row
						gap={iconGap}
						alignItems="center"
						justifyContent="center"
					>
						<span>{children}</span>
						<span style={{ display: "flex" }}>{icon}</span>
					</FlexDirection.Row>
				)
			) : (
				children
			)}
		</button>
	);
}

export default Button;

Button.defaultProps = {
	theme: "primary",
	size: "medium"
};

const style = css`
	outline: none;
	border: none;
	cursor: pointer;
	box-sizing: border-box;
	border-radius: 0.5rem;
	font-style: normal;
	line-height: 24px;
	font-weight: 500;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${colorPalette("primary600")};
	box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
	&:disabled {
		cursor: not-allowed;
	}
`;

const themes = {
	primary: css`
		background: ${colorPalette("primary600")};
		color: white;
		font-family: ${fontFamily.SemiBold};
		&:hover:enabled {
		}
		&:active:enabled {
		}
		&:disabled {
			background: ${colorPalette("primary200")};
			border: 1px solid ${colorPalette("primary200")};
		}
	`,

	base: css`
		background: white;
		color: ${colorPalette("gray700")};
		border: 1px solid ${colorPalette("gray300")};
		font-family: ${fontFamily.Medium};
		font-weight: 500;
		line-height: 20px;
		&:disabled {
			border: 1px solid ${colorPalette("gray200")};
			color: ${colorPalette("gray300")};
		}
	`,
	error: css`
		background: ${colorPalette("error600")};
		border: 1px solid ${colorPalette("error600")};
		color: white;
		font-family: ${fontFamily.SemiBold};
		font-weight: 500;
		line-height: 20px;
		&:hover:enabled {
		}
		&:active:enabled {
		}
		&:disabled {
			opacity: 0.7;
		}
	`
};

const sizes = {
	small: css`
		height: 2.5rem;
		font-size: ${fontSize.sm};
	`,
	medium: css`
		height: 2.75rem;
		font-size: ${fontSize.md};
	`,
	big: css`
		height: 3rem;
		font-size: ${fontSize.lg};
	`
};
