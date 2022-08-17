import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button";
import ButtonGroup from "./ButtonGroup";

export default {
	title: "components/ButtonGroup",
	component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = args => (
	<ButtonGroup {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
	children: (
		<>
			<Button theme="error">취소</Button>
			<Button>확인</Button>
		</>
	),
	direction: "row",
	gap: "0.5rem"
};

export const rightAlign = () => {
	return (
		<ButtonGroup rightAlign>
			<Button theme="error">취소</Button>
			<Button>확인</Button>
		</ButtonGroup>
	);
};

export const column = () => {
	return (
		<ButtonGroup direction="column">
			<Button>CLICK ME</Button>
			<Button>CLICK ME</Button>
		</ButtonGroup>
	);
};

export const customGap = () => {
	return (
		<ButtonGroup gap="1rem">
			<Button theme="error">취소</Button>
			<Button>확인</Button>
		</ButtonGroup>
	);
};

export const customGapColumn = () => {
	return (
		<ButtonGroup direction="column" gap="1rem">
			<Button>CLICK ME</Button>
			<Button>CLICK ME</Button>
		</ButtonGroup>
	);
};
