/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { colorPalette } from "lib/styles/palette";
import { useState } from "react";
import Button from "../Button";
import { Icon } from "../Icon";
import DatePicker, { DatePickerData } from "./DatePicker";

export default {
	title: "DatePicker",
	component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => {
	return (
		<div>
			<DatePicker open={true} range={args.range} />
		</div>
	);
};

export const Example = () => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState("Select Dates");
	const handleApply = ({ startDate, endDate }: DatePickerData) => {
		if (startDate) {
			setDate(startDate.format("YYYY-MM-DD"));
		}

		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div css={test}>
			<Button
				width="141px"
				theme="base"
				size="small"
				iconGap="0.65625rem"
				color={colorPalette("gray500")}
				fontFamily="SemiBold"
				onClick={() => setOpen(true)}
				icon={<Icon icon="calendar" color={colorPalette("gray700")} />}
			>
				{date}
			</Button>
			<DatePicker
				onChange={handleApply}
				handleCancel={handleCancel}
				open={open}
			/>
		</div>
	);
};

export const Basic = Template.bind({});
const test = css`
	position: relative;
`;
