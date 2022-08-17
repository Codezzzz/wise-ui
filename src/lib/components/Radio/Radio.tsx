/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "lib/styles/palette";
import { useState } from "react";

type RadioSize = "sm" | "md" | "lg";
export type RadioProps = {
	/**
	 * Setting Radio label
	 */
	children: string;
	/**
	 * Setting radio size
	 */
	size?: RadioSize;

	checked?: boolean;

	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

	disabled?: boolean;
};

function Radio({
	children,
	size = "sm",
	checked = false,
	onChange,
	disabled = false
}: RadioProps) {
	const [focused, setFocused] = useState(false);
	const isChecked = checked;
	return (
		<label css={wrapper(size, checked, disabled)}>
			<input
				type="radio"
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				checked={isChecked}
				onChange={e => {
					onChange?.(e);
				}}
				disabled={disabled}
			/>
			<span css={circle(checked, focused, disabled)}>
				<span css={smallDot(checked, disabled)}></span>
			</span>
			<span>{children}</span>
		</label>
	);
}

export default Radio;

const sizes = {
	sm: "1rem",
	md: "1.25rem",
	lg: "1.5rem"
};

const wrapper = (size: RadioSize, checked: boolean, disabled: boolean) => css`
	position: relative;
	font-size: ${sizes[size]};
	display: flex;
	align-items: center;

	input {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
		left: 0;
		top: 0;
	}

	cursor: pointer;

	${disabled &&
	css`
		cursor: not-allowed;
	`}

	${!checked &&
	!disabled &&
	css`
		&:hover {
			span:first-of-type {
				border-color: ${colorPalette("primary600")};
			}
		}
	`}

	&:focus {
		opacity: 0.4;
	}
`;

const circle = (checked: boolean, focused: boolean, disabled: boolean) => css`
	width: 1em;
	height: 1em;
	border-radius: 50%;
	border: 1px solid ${colorPalette("gray300")};
	display: block;
	margin-right: 5px;
	transition: 0.125s all ease-in;
	display: flex;
	align-items: center;
	justify-content: center;

	${checked &&
	css`
		border-color: ${colorPalette("primary600")};
		background: ${colorPalette("primary50")};
	`}

	${disabled &&
	css`
		border-color: ${colorPalette("gray300")};
		background: ${colorPalette("gray100")};
	`}

	${!disabled &&
	focused &&
	css`
		box-shadow: 0px 0px 0px 4px ${colorPalette("primary100")};
	`}
`;

const smallDot = (checked: boolean, disabled: boolean) => css`
	width: 0.5em;
	height: 0.5em;
	border-radius: 50%;
	transform: scale(0);
	transition: 0.125s all ease-in;
	${checked &&
	css`
		transform: scale(1);
		background: ${colorPalette("primary600")};
	`}

	${disabled &&
	css`
		background: ${colorPalette("gray300")};
	`}
`;
