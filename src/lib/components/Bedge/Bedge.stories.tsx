/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { colorPalette } from "lib/styles/palette";
import FlexDirection from "../FlexDirection";
import { Icon } from "../Icon";
import Bedge from "./Bedge";

export default {
	title: "components/Bedge",
	component: Bedge
} as ComponentMeta<typeof Bedge>;

const Template: ComponentStory<typeof Bedge> = args => {
	return (
		<FlexDirection.Column gap="2rem">
			<Bedge {...args}>Label</Bedge>

			<Bedge
				{...args}
				theme="base"
				icon={
					<Icon
						icon="close"
						size="6px"
						color={colorPalette("gray500")}
					/>
				}
			>
				New feature
			</Bedge>

			<Bedge
				{...args}
				theme="primary"
				icon={
					<Icon
						icon="close"
						size="6px"
						color={colorPalette("primary500")}
					/>
				}
			>
				New feature
			</Bedge>

			<Bedge
				{...args}
				theme="error"
				icon={
					<Icon
						icon="close"
						size="6px"
						color={colorPalette("error500")}
					/>
				}
			>
				New feature
			</Bedge>

			<Bedge
				{...args}
				theme="error"
				iconPosition="left"
				icon={
					<Icon
						icon="close"
						size="6px"
						color={colorPalette("error500")}
					/>
				}
			>
				New feature
			</Bedge>
		</FlexDirection.Column>
	);
};

export const Basic = Template.bind({});
