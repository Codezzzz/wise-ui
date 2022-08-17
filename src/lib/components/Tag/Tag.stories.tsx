/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "./Tag";
export default {
	title: "components/Tag",
	component: Tag
} as ComponentMeta<typeof Tag>;

export const Basic: ComponentStory<typeof Tag> = args => {
	return (
		<div css={wrapper}>
			<Tag>Label</Tag>

			<Tag size="md">Label</Tag>

			<Tag size="lg">Label</Tag>

			<Tag closeable>Label</Tag>

			<Tag size="md" closeable>
				Label
			</Tag>

			<Tag size="lg" closeable>
				Label
			</Tag>
		</div>
	);
};

const wrapper = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
