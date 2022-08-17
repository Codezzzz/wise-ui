/** @jsxImportSource @emotion/react */
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import TextInput from "./Input";
import FlexDirection from "../FlexDirection";
import { Icon } from "../Icon";

export default {
	title: "components/Input",
	component: TextInput,
	decorators: [withKnobs]
};

export const Input = () => {
	const label = text("label", "라벨");
	const placeholder = text("placeholder", "Enter your email address.");
	const disabled = boolean("disabled", false);
	const width = text("width", "100%");
	const height = text("height", "44px");

	return (
		<TextInput
			label={label}
			placeholder={placeholder}
			disabled={disabled}
			width={width}
			height={height}
		/>
	);
};

Input.story = {
	name: "Default"
};

export const InputIcon = () => {
	return (
		<FlexDirection.Column gap="1rem">
			<TextInput
				label="Email"
				iconLeft={<Icon icon="email" />}
				iconRight={<Icon icon="question" />}
			/>

			<TextInput label="Email" iconRight={<Icon icon="question" />} />

			<TextInput
				label="Email"
				iconLeft={<Icon icon="email" />}
				iconRight={<Icon icon="question" />}
			/>

			<TextInput
				label="Email"
				iconLeft={<Icon icon="email" />}
				iconRight={<Icon icon="question" />}
				iconError={<Icon icon="inputError" />}
			/>
		</FlexDirection.Column>
	);
};
