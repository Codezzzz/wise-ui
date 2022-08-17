/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "lib/styles/palette";
export type ToggleButtonProps = {
	checked?: boolean;
	onChange?: () => void;
	disabled?: boolean;
};

function ToggleButton({
	checked = false,
	onChange,
	disabled = false
}: ToggleButtonProps) {
	return (
		<label css={style(checked, disabled)}>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => {
					onChange?.();
				}}
				disabled={disabled}
			/>
		</label>
	);
}

export default ToggleButton;

const style = (checked: boolean, disabled: boolean) => css`
	width: 36px;
	height: 20px;
	display: block;
	border-radius: 12px;
	background-color: ${colorPalette("gray100")};
	position: relative;
	cursor: pointer;
	transition: background-color 0.3s linear;

	${disabled &&
	css`
		cursor: not-allowed;
	`}
	input {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
		left: 0;
		top: 0;
	}

	${checked &&
	css`
		background-color: ${colorPalette("primary600")};

		${disabled &&
		css`
			background-color: ${colorPalette("primary200")};
		`}
	`}

	&:before {
		content: "";
		width: 1rem;
		height: 1rem;
		background-color: white;
		box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
			0px 1px 2px rgba(16, 24, 40, 0.06);
		position: absolute;
		border-radius: 50px;
		top: 50%;
		left: 10px;
		transform: translate(-50%, -50%);
		transition: all 0.2s ease-in-out;
		${!checked &&
		css`
			left: 10px;
		`}

		${checked &&
		css`
			left: 26px;
		`}
	}
`;
