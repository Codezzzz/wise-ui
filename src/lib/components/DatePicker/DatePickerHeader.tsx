/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon } from "../Icon";

export type DatePickerHeaderProps = {
	jumpToMonth: (month: number) => void;
	returnToday: () => void;
	date: moment.Moment;
};

function DatePickerHeader({
	jumpToMonth,
	returnToday,
	date
}: DatePickerHeaderProps) {
	return (
		<header css={style}>
			<div className="util-button">
				<span className="btn" onClick={() => jumpToMonth(0)}>
					<Icon icon="calendarLeft" />
				</span>

				<span onClick={returnToday}>{date.format("YYYY-MM")}</span>
				<span className="btn" onClick={() => jumpToMonth(1)}>
					<Icon icon="calendarRight" />
				</span>
			</div>
		</header>
	);
}

export default DatePickerHeader;

const style = css`
	padding: 26px 25px 10px 25px;

	.util-button {
		display: flex;
		justify-content: space-between;

		.btn {
			cursor: pointer;
		}
	}
`;
