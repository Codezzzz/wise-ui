/** @jsxImportSource @emotion/react */
import Tab from "./Tab";
import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
	title: "components/Tab",
	component: Tab
} as ComponentMeta<typeof Tab>;

export const Basic: ComponentStory<typeof Tab> = args => {
	const [value, setValue] = useState<number | string | null>(null);
	const onChange = (id: number | string) => {
		setValue(id);
	};

	return (
		<>
			<Tab
				value={1}
				active={value === 1}
				onChange={onChange}
				theme={args.theme}
			>
				My details1
			</Tab>
			<Tab
				value={2}
				active={value === 2}
				onChange={onChange}
				theme={args.theme}
			>
				My details2
			</Tab>
		</>
	);
};
