/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";

export type CheckBoxProps = {
	backgroundColor?: string;
	activeBorderColor?: string;
	borderColor?: string;
	strokeColor?: string;
	shadow?: string;
	isShadow?: boolean;
	checked?: boolean;
	children?: React.ReactNode;
	onChange?: () => void;
	disabled?: boolean;
};

function CheckBox({
	backgroundColor = "#F9F5FF",
	activeBorderColor = "#7F56D9",
	borderColor = "#D0D5DD",
	strokeColor = "#7F56D9",
	shadow = "#f4ebff",
	isShadow = false,
	checked = false,
	children,
	onChange,
	disabled = false
}: CheckBoxProps) {
	return (
		<label
			css={style(
				backgroundColor,
				activeBorderColor,
				borderColor,
				isShadow,
				shadow,
				checked,
				disabled
			)}
		>
			<input
				type="checkbox"
				onChange={() => {
					onChange?.();
				}}
				disabled={disabled}
			/>
			<svg
				className={`checkbox ${checked ? "checkbox--active" : ""}`}
				aria-hidden="true"
				width="16"
				height="16"
				viewBox="2 2 12 12"
				fill="none"
			>
				<path
					d="M12 5L6.5 10.5L4 8"
					strokeWidth="1.6666"
					stroke={checked ? strokeColor : "none"}
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span>{children}</span>
		</label>
	);
}

export default CheckBox;

const style = (
	backgroundColor: string,
	activeBorderColor: string,
	borderColor: string,
	isShadow: boolean,
	shadow: string,
	isChecked: boolean,
	disabled: boolean
) => css`
	cursor: pointer;

	${disabled &&
	css`
		cursor: not-allowed;
	`}
	display: flex;

	span {
		font-weight: 400;
		font-size: ${fontSize.sm};
		line-height: 20px;
		color: ${colorPalette("gray700")};
		font-family: ${fontFamily.Medium};
		margin-left: 8px;
	}

	input[type="checkbox"] {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.checkbox {
		display: inline-block;
		height: 16px;
		width: 16px;
		background: #fff;
		border: 2px ${borderColor} solid;
		border-radius: 4px;
		display: flex;
		align-items: center;
		margin-top: 2px;
	}

	${isChecked &&
	isShadow &&
	css`
		.checkbox {
			box-shadow: 0px 0px 0px 4px ${shadow};
		}
	`}
	.checkbox--active {
		border-color: ${activeBorderColor};
		background: ${backgroundColor};
	}

	${isChecked &&
	disabled &&
	css`
		path {
			stroke: ${colorPalette("gray300")};
		}

		.checkbox--active {
			border-color: ${colorPalette("gray300")};
			background: ${colorPalette("gray100")};
		}
	`}
`;
