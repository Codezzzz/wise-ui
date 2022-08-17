/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./Modal";
export default {
	title: "components/Modal",
	component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Basic = Template.bind({});

Basic.args = {
	visible: true,
	children: <>test</>,
	transitionType: "pop"
};
