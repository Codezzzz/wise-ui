/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip from "./ToolTip";

export default {
	title: "components/ToolTip",
	component: Tooltip
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = args => {
	return (
		<div css={wrapper}>
			<Tooltip text="안녕하세요." placement="top">
				<div>top</div>
			</Tooltip>

			<Tooltip text="안녕하세요.">
				<div>Bottom</div>
			</Tooltip>

			<Tooltip text="안녕하세요." placement="right">
				<div>right</div>
			</Tooltip>

			<Tooltip text="안녕하세요." placement="left">
				<div>left</div>
			</Tooltip>

			<Tooltip text="안녕하세요.<br> 반값습니다. 처음입니다.">
				<div>줄바꿈 테스트</div>
			</Tooltip>

			<div>
				<h1>Global Test</h1>
				<Tooltip.Content id="TEST">GlobalTest1</Tooltip.Content>
				<Tooltip.Content id="TEST">GlobalTest2</Tooltip.Content>
				<Tooltip text="안녕하세요.<br>" global id="TEST" />
			</div>
		</div>
	);
};

const wrapper = css`
	display: flex;
	gap: 1rem;
	margin: 0 auto;
	padding: 2rem;

	h1 {
		font-weight: bold;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;
