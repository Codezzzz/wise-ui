/** @jsxImportSource @emotion/react */

import Tab from "../Tab";
import { useEffect, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabGroup from "./TabGroup";
export default {
	title: "components/TabGroup",
	component: TabGroup
} as ComponentMeta<typeof TabGroup>;

export const Basic: ComponentStory<typeof TabGroup> = args => {
	const [value, setValue] = useState<string | number | null>(1);

	useEffect(() => {
		if (args.groupValue) {
			setValue(args.groupValue);
		}
	}, [args.groupValue]);

	return (
		<>
			<TabGroup
				{...args}
				groupValue={value}
				onChangeValue={value => setValue(Number(value))}
			>
				<Tab value={1}>My details1</Tab>
				<Tab value={2}>My details1</Tab>
				<Tab value={3}>My details1</Tab>
			</TabGroup>

			<TabGroup
				{...args}
				groupValue={value}
				onChangeValue={value => setValue(Number(value))}
			>
				<Tab theme="primary_base" value={1}>
					My details1
				</Tab>
				<Tab theme="primary_base" value={2}>
					My details1
				</Tab>
				<Tab theme="primary_base" value={3}>
					My details1
				</Tab>
			</TabGroup>
		</>
	);
};
