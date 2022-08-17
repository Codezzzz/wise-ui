import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dialog from "./Dialog";
import { Icon } from "../Icon";
export default {
	title: "components/Dialog",
	component: Dialog,
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 600
		}
	}
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = args => <Dialog {...args} />;

export const Basic = Template.bind({});

Basic.args = {
	title: "프로젝트 생성",
	description: "Enter your password to make this change",
	visible: true,
	confirmText: "Confirm",
	cancelText: "Cancel",
	modalMainIcon: <Icon icon="projectModal" />
};

export const proejctCreate = () => {
	return (
		<Dialog
			title="프로젝트 생성"
			description="Enter your password to make this change"
			confirmText="프로젝트 생성"
			visible={true}
			cancelable={false}
			transitionType="pop"
			modalMainIcon={<Icon icon="projectModal" />}
		/>
	);
};

export const cancellable = () => {
	return (
		<Dialog
			title="포스트 삭제"
			description="포스트를 정말로 삭제하시겠습니까?"
			visible={true}
			confirmText="Confirm"
			cancelable
			transitionType="pop"
		/>
	);
};

export const customContent = () => {
	return (
		<Dialog visible={true} hideButtons transitionType="fade">
			Custom Content
		</Dialog>
	);
};
