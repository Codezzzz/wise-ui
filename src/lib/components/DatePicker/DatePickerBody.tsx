/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useMemo } from "react";
import DatePickerItem from "./DatePickerItem";
export type DatePickerBodyProps = {
	date: moment.Moment;
	selectDate: moment.Moment | null;
	endDate: moment.Moment | null;
	handleDayClick: (current: moment.Moment) => void;
	handleDayMouseEvent: (current: moment.Moment | null) => void;
	hoverDate: moment.Moment | null;
};

function DatePickerBody({
	date,
	selectDate,
	endDate,
	handleDayClick,
	handleDayMouseEvent,
	hoverDate
}: DatePickerBodyProps) {
	const generate = useCallback(() => {
		const today = date;

		// startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
		// week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
		const startWeek = today.clone().startOf("month").week();

		// endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
		// 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
		// 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
		let endWeek =
			today.clone().endOf("month").week() === 1
				? 53
				: today.clone().endOf("month").week();

		let calendar = [];

		/** 주 갯수 통일  */
		if (startWeek - endWeek === -4) {
			endWeek += 1;
		}
		// 시작 주부터 마지막 주까지 +1 씩 증가시킴
		for (let week = startWeek; week <= endWeek; week++) {
			calendar.push(
				Array(7)
					.fill(0)
					.map((n, i) => {
						// 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기한다.
						const current = today
							.clone()
							.week(week)
							.startOf("week")
							.add(n + i + 1, "day"); // 월요일 부터 시작하기 위해 + 1

						return current;
					})
			);
		}
		return calendar;
	}, [date]);

	const calendars = useMemo(() => generate(), [generate]);

	return (
		<>
			{calendars.map((dates, index) => (
				<div key={index} css={dateWrapper}>
					{dates.map((item, index) => (
						<DatePickerItem
							key={index}
							date={item}
							today={date}
							selectDate={selectDate}
							endDate={endDate}
							handleDayClick={handleDayClick}
							handleDayMouseEvent={handleDayMouseEvent}
							hoverDate={hoverDate}
						/>
					))}
				</div>
			))}
		</>
	);
}

export default DatePickerBody;

const dateWrapper = css`
	display: flex;
`;
