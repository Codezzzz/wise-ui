/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
export type DatePickerWeekProps = {};

function DatePickerWeek({}: DatePickerWeekProps) {
	return (
		<div css={weekStyle}>
			{["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"].map(el => (
				<div key={el}>
					<span className="month_text">{el}</span>
				</div>
			))}
		</div>
	);
}

export default DatePickerWeek;
const weekStyle = css`
	display: flex;

	.month_text {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${fontSize.sm};
		font-weight: 400;
		color: ${colorPalette("gray700")};
		font-family: ${fontFamily.Medium};
	}
`;
