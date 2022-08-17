/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";

export default {
	title: "components/Label",
	component: Label
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => {
	return (
		<div>
			<Label {...args}>Label</Label>
		</div>
	);
};

export const Basic = Template.bind({});
