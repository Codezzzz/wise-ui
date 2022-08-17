/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ErrorMessage, HintMessage } from "../styled";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { UseFormRegisterReturn } from "react-hook-form";
import { Icon } from "../Icon";
import Label from "../Label";
import Space from "../Space";

export type InputProps = {
	/** text input 라벨 */
	label?: string;
	placeholder?: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	iconError?: React.ReactNode;
	/** input 창 입력 방지 */
	disabled?: boolean;
	width?: number | string;
	height?: number | string;
	/** */
	register?: UseFormRegisterReturn;
	message?: string;
	type?: string;
	hint?: string;
	required?: boolean;
};

function Input({
	label,
	placeholder,
	iconLeft,
	iconRight,
	iconError = <Icon icon="inputError" />,
	disabled = false,
	width = "100%",
	height = "44px",
	register,
	message,
	type = "text",
	hint,
	required = false
}: InputProps) {
	return (
		<div css={inputStyle(message, disabled)}>
			{label && <Label required={required}>{label}</Label>}

			<div>
				<div className="input" css={[{ width }, { height }]}>
					{iconLeft && (
						<>
							{iconLeft}
							<Space type="right" gap="0.5625rem" />
						</>
					)}
					<input
						{...register}
						type={type}
						id={label}
						placeholder={placeholder}
						disabled={disabled}
					/>

					{iconRight && !message && (
						<>
							<Space type="left" gap="0.5625rem" />
							<span className="icon_right">{iconRight}</span>
						</>
					)}

					{message && iconError && (
						<>
							<Space type="left" gap="0.5625rem" />
							<span className="icon_right">{iconError}</span>
						</>
					)}
				</div>
			</div>
			{message && <ErrorMessage>{message}</ErrorMessage>}
			{!message && hint && <HintMessage>{hint}</HintMessage>}
		</div>
	);
}

export default Input;

Input.defaultProps = {
	placeholder: "Enter your email address."
};

export const inputStyle = (
	message: string | undefined,
	disabled: boolean
) => css`
	display: flex;
	flex-direction: column;
	width: 100%;
	.input {
		display: block;
		background: #fff;
		border: 1px solid ${colorPalette("gray300")};
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		border-radius: 8px;
		color: ${colorPalette("gray900")};
		display: flex;
		align-items: center;
		padding: 10px 14px;

		${!message &&
		css`
			&:focus-within {
				border: 1px solid ${colorPalette("primary300")};
				box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
					0px 0px 0px 4px #f4ebff;
			}
		`}

		${message &&
		css`
			border: 1px solid ${colorPalette("error300")};

			box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
				0px 0px 0px 4px #fee4e2;
		`}

		${disabled &&
		css`
			background: ${colorPalette("gray50")};
			border: 1px solid ${colorPalette("gray300")};
			box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
			color: ${colorPalette("gray500")};
		`}
	}

	input {
		width: 100%;
		border: transparent;
		outline: none;
		font-family: ${fontFamily.Normal};
		font-size: ${fontSize.md};
		text-align: left;
		text-overflow: ellipsis;
		-webkit-appearance: none;

		&::placeholder {
			color: ${colorPalette("gray500")};
		}
	}
`;

const noBorderRadius = (position: "left" | "right") => css`
	${position === "left"
		? css`
				border-top-left-radius: 0;
		  `
		: css`
				border-top-right-radius: 0;
		  `};
`;
