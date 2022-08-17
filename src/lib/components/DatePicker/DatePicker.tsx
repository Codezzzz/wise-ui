/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "lib/styles/palette";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import Divider from "../Divider";
import FlexDirection from "../FlexDirection";
import Space from "../Space";
import DatePickerBody from "./DatePickerBody";
import DatePickerBottom from "./DatePickerBottom";
import DatePickerHeader from "./DatePickerHeader";
import DatePickerInfo from "./DatePickerInfo";
import DatePickerWeek from "./DatePickerWeek";

export type DatePickerData = {
	startDate: moment.Moment | null;
	endDate: moment.Moment | null;
};

export type DatePickerProps = {
	/** Datepicker range 모드 */
	range?: boolean;
	/** Datepicker 데이터 get 액션 */
	onChange?: ({ startDate, endDate }: DatePickerData) => void;
	/** Datepicker 취소 액션 */
	handleCancel?: () => void;
	open?: boolean;
};

function DatePicker({
	range = true,
	onChange,
	handleCancel,
	open = false
}: DatePickerProps) {
	const [date, setdate] = useState<moment.Moment>(() => moment());
	const [selectDate, setSelectDate] = useState<moment.Moment | null>(null);
	const [endDate, setEndDate] = useState<moment.Moment | null>(null);
	const [hoverDate, setHoverDate] = useState<moment.Moment | null>(null);

	// func

	const handleDayClick = useCallback(
		(current: moment.Moment) => {
			//setdate(current);
			if (range) {
				if (selectDate && endDate == null) {
					if (current.diff(selectDate) > 0) {
						setEndDate(current);
						setHoverDate(null);
					}
				} else if (endDate) {
					setEndDate(null);
					setSelectDate(current);

					setHoverDate(null);
				} else {
					setSelectDate(current);
				}
			} else {
				setSelectDate(current);
			}
		},
		[endDate, range, selectDate]
	);

	const returnToday = () => setdate(moment());
	const jumpToMonth = (num: number) =>
		num
			? setdate(date.clone().add(30, "day"))
			: setdate(date.clone().subtract(30, "day"));

	const handleDayMouseEvent = (current: moment.Moment | null) => {
		if (!endDate && range) {
			setHoverDate(current);
		}
	};

	const handleApply = () => {
		onChange?.({ startDate: selectDate, endDate });
	};

	const handleCancelBtn = () => {
		handleCancel?.();
		setHoverDate(null);
		setEndDate(null);
		setSelectDate(null);
		setdate(moment());
	};

	if (!open) return <></>;
	return (
		<div css={wrapper}>
			<DatePickerHeader
				date={date}
				returnToday={returnToday}
				jumpToMonth={jumpToMonth}
			/>
			<Space type="top" gap="1.5rem" />
			<DatePickerInfo
				startDate={selectDate}
				endDate={endDate}
				returnToday={returnToday}
				range={range}
			/>
			<Space type="top" gap="1rem" />
			<FlexDirection.Row justifyContent="center" width="100%">
				<Space type="left_right" gap="0.625rem">
					<DatePickerWeek />

					<DatePickerBody
						date={date}
						selectDate={selectDate}
						endDate={endDate}
						handleDayClick={handleDayClick}
						handleDayMouseEvent={handleDayMouseEvent}
						hoverDate={hoverDate}
					/>
				</Space>
			</FlexDirection.Row>

			<Space type="top" gap="1.5rem" />

			<Divider height="2px" />

			<Space type="top" gap="1.5rem" />

			<DatePickerBottom
				handleApply={handleApply}
				handleCancelBtn={handleCancelBtn}
			/>

			<Space type="top" gap="1rem" />
		</div>
	);
}

export default DatePicker;

const wrapper = css`
	position: absolute;
	z-index: 9999;
	width: 328px;
	background: white;
	border: 1px solid ${colorPalette("gray100")};
	border-radius: 8px;
	box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
		0px 8px 8px -4px rgba(16, 24, 40, 0.03);
`;
