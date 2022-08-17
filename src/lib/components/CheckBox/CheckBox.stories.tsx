/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CheckBox from "./CheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";

export default {
	title: "components/CheckBox",
	component: CheckBox
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = args => {
	const [isChecked, setIsChecked] = useState(args.checked);

	const onChange = () => {
		setIsChecked(!isChecked);
	};

	useEffect(() => {
		setIsChecked(!!args.checked);
	}, [args.checked]);

	return (
		<div>
			<CheckBox {...args} checked={isChecked} onChange={onChange}>
				자동로그인
			</CheckBox>
		</div>
	);
};

export const Basic = Template.bind({});
