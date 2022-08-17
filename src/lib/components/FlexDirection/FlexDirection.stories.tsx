/** @jsxImportSource @emotion/react */
import { radios, text, withKnobs } from "@storybook/addon-knobs";
import Button from "../Button";
import { FlexDirection } from "./FlexDirection";

export default {
	title: "components/Utils/FlexDirection",
	component: FlexDirection,
	decorators: [withKnobs]
};

export const flexDirection = () => {
	const direction = radios(
		"direction",
		{ Row: "row", Column: "column" },
		"row"
	);

	if (direction === "row")
		return (
			<FlexDirection.Row gap="1rem">
				<div>item1</div>
				<div>item2</div>
			</FlexDirection.Row>
		);
	return (
		<FlexDirection.Column gap="1rem">
			<div>item1</div>
			<div>item2</div>
		</FlexDirection.Column>
	);
};

export const example = () => {
	const direction = radios(
		"direction",
		{ Row: "row", Column: "column" },
		"row"
	);

	const gap = text("gap", "1rem");

	if (direction === "row") {
		return (
			<FlexDirection.Row gap={gap}>
				<Button>PRIMARY</Button>
				<Button>PRIMARY</Button>
				<Button>PRIMARY</Button>
			</FlexDirection.Row>
		);
	}
	return (
		<FlexDirection.Column gap={gap}>
			<Button>PRIMARY</Button>
			<Button>PRIMARY</Button>
			<Button>PRIMARY</Button>
		</FlexDirection.Column>
	);
};
flexDirection.story = { name: "Default" };
