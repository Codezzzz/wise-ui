/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider from "./Divider";

export default {
	title: "components/Divider",
	component: Divider
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => {
	return (
		<div>
			<Divider height={args.height}>sdfsf</Divider>
		</div>
	);
};

export const Basic = Template.bind({});
