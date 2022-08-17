/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import moment from "moment";
import { memo } from "react";
export type DatePickerItemProps = {
	date: moment.Moment;
	today: moment.Moment;
	selectDate: moment.Moment | null;
	endDate: moment.Moment | null;
	handleDayClick: (current: moment.Moment) => void;
	handleDayMouseEvent: (current: moment.Moment | null) => void;
	hoverDate: moment.Moment | null;
};

function DatePickerItem({
	date,
	today,
	selectDate,
	handleDayClick,
	handleDayMouseEvent,
	hoverDate,
	endDate
}: DatePickerItemProps) {
	const current = date.format("YYYYMMDD"); // 현재 아이템 요일
	const dateOfEnd = endDate ? endDate.format("YYYYMMDD") : ""; // 현재 선택된 마지막 날 : range mode
	const select = selectDate ? selectDate.format("YYYYMMDD") : ""; // 선택된 아이템 요일
	const hover = hoverDate ? hoverDate.format("YYYYMMDD") : ""; // 현재 hover 된 아이템

	const now = current === moment().format("YYYYMMDD");
	const isSelected = current === select || current === dateOfEnd;
	const isSelectedEnd = current === dateOfEnd;
	const isHoverd = current === hover; // 현재 hove 여부

	const disabledItem =
		hoverDate && selectDate ? hoverDate.diff(selectDate) > 0 : true; // 현재 선택된 날짜보다 뒷 날짜 선택 막기

	const isGrayed = date.format("MM") !== today.format("MM"); //현재 달 아닌경우 색변경

	let activeRange = false;
	let itemPosition = "";

	if (hoverDate || endDate) {
		/**
		 * 현재 선택된 아이템과, hover or enddate 사이 날짜 계산
		 */
		const rangeLastDate = endDate ? endDate : hoverDate;

		const selectOfHoverDate = Number(
			moment.duration(rangeLastDate?.diff(selectDate)).asDays().toFixed()
		);
		const selectBetweenHoverDate = Number(
			moment.duration(date.diff(selectDate)).asDays().toFixed()
		);

		if (
			selectBetweenHoverDate > -1 &&
			selectOfHoverDate >= selectBetweenHoverDate
		) {
			activeRange = true;
		}

		if (date.days() === 0) {
			// 일요일
			itemPosition = "end";
		} else if (date.days() === 1) {
			// 월요일
			itemPosition = "start";
		}
	}

	return (
		<div
			css={item(
				isSelected,
				isSelectedEnd,
				isGrayed,
				activeRange,
				itemPosition,
				isHoverd,
				disabledItem
			)}
			onClick={() => handleDayClick(date)}
			onMouseEnter={() => handleDayMouseEvent(date)}
			onMouseLeave={() => handleDayMouseEvent(null)}
		>
			<span>
				{date.format("D")}

				{now && <span></span>}
			</span>
		</div>
	);
}

export default memo(DatePickerItem);

const item = (
	isSelected: boolean,
	isSelectedEnd: boolean,
	isGrayed: boolean,
	activeRange: boolean,
	itemPosition: string,
	isHoverd: boolean,
	disabledItem: boolean | null
) => css`
	span {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 20px;
		font-size: ${fontSize.sm};
		font-family: ${fontFamily.Normal};
		color: ${colorPalette("gray700")};
		cursor: pointer;

		position: relative;

		& span {
			position: absolute;
			width: 5px;
			height: 5px;
			left: calc(50%);
			bottom: 2px;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			background: ${colorPalette("primary600")};

			${isSelected &&
			css`
				background: white;
			`}
		}
	}

	${!disabledItem &&
	css`
		span {
			cursor: not-allowed;
		}
	`}

	${isSelected &&
	css`
		span {
			background-color: ${colorPalette("primary600")};
			color: white;
			border-radius: 20px;
		}
	`}
	${!isSelected &&
	css`
		span {
			&:hover {
				background-color: ${colorPalette("gray50")};
				border-radius: 20px;
			}
		}
	`}

    ${!isSelected &&
	isGrayed &&
	css`
		span {
			color: ${colorPalette("gray500")};
		}
	`}


    ${activeRange &&
	css`
		background-color: ${colorPalette("gray50")};

		${isSelected &&
		css`
			border-radius: 20px 0 0 20px;
		`}

		${isSelectedEnd &&
		css`
			border-radius: 0 20px 20px 0;
		`}

		${!isSelected &&
		itemPosition === "start" &&
		css`
			border-radius: 20px 0 0 20px;
		`}

        ${!isSelected &&
		itemPosition === "end" &&
		css`
			border-radius: 0 20px 20px 0;
		`}

        ${isHoverd &&
		css`
			border-radius: 0 20px 20px 0;
		`}
	`}
`;
