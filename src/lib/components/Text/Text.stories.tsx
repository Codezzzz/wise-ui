/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./Text";

export default {
	title: "components/Text",
	component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => {
	return (
		<div>
			<Text {...args}>Test Text</Text>
		</div>
	);
};

export const Basic = Template.bind({});
