import Button from "../Button";
import FlexDirection from "../FlexDirection";
import Space from "../Space";

export type DatePickerBottomProps = {
	handleApply: () => void;
	handleCancelBtn: () => void;
};

function DatePickerBottom({
	handleApply,
	handleCancelBtn
}: DatePickerBottomProps) {
	return (
		<Space type="left_right" gap="1rem">
			<FlexDirection.Row gap="0.75rem">
				<Button
					theme="base"
					width="100%"
					height="2.5rem"
					onClick={handleCancelBtn}
				>
					Cancel
				</Button>
				<Button width="100%" height="2.5rem" onClick={handleApply}>
					Apply
				</Button>
			</FlexDirection.Row>
		</Space>
	);
}

export default DatePickerBottom;
