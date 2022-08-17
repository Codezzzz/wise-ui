/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagableInput from "./TagableInput";
export default {
	title: "components/TagableInput",
	component: TagableInput
} as ComponentMeta<typeof TagableInput>;

export const Basic: ComponentStory<typeof TagableInput> = args => {
	return (
		<div css={wrapper}>
			<TagableInput />

			<TagableInput
				tags={[
					{ id: 1, text: "동의어1" },
					{ id: 2, text: "동의어2" }
				]}
			/>
		</div>
	);
};

const wrapper = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
