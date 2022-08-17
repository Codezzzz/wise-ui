/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import moment from "moment";
import Button from "../Button";
import FlexDirection from "../FlexDirection";
export type DatePickerInfoProps = {
	startDate: moment.Moment | null;
	endDate: moment.Moment | null;
	returnToday: () => void;
	range: boolean;
};

function DatePickerInfo({
	startDate,
	endDate,
	returnToday,
	range
}: DatePickerInfoProps) {
	return (
		<div css={style}>
			<FlexDirection.Row gap="0.75rem">
				<div css={dateInfo}>
					{startDate
						? startDate?.format("YYYY-MM-DD")
						: moment().format("YYYY-MM-DD")}
				</div>

				{range && <div className="range_dash" />}
				{range && (
					<div css={dateInfo}>
						{endDate
							? endDate?.format("YYYY-MM-DD")
							: moment().format("YYYY-MM-DD")}
					</div>
				)}

				{!range && (
					<div>
						<Button
							theme="base"
							size="small"
							width="4.5625rem"
							onClick={returnToday}
						>
							Today
						</Button>
					</div>
				)}
			</FlexDirection.Row>
		</div>
	);
}

export default DatePickerInfo;

const style = css`
	padding: 0 24px;

	.range_dash {
		width: 9px;
		height: 40px;
		position: relative;
		&:after {
			content: "-";
			color: ${colorPalette("gray500")};
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;

const dateInfo = css`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	background: #ffffff;
	border: 1px solid ${colorPalette("gray300")};
	box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
	border-radius: 8px;
	padding: 10px 14px;
	font-size: ${fontSize.md};
	font-weight: 350;
	font-family: ${fontFamily.Normal};
	color: ${colorPalette("gray900")};
`;
