/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import Space from "../Space";
import ToggleButton from "./ToggleButton";

export default {
	title: "components/ToggleButton",
	component: ToggleButton
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = args => {
	const [isChecked, setIsChecked] = useState(args.checked);

	const onChange = () => {
		setIsChecked(!isChecked);
	};

	useEffect(() => {
		setIsChecked(!!args.checked);
	}, [args.checked]);

	return (
		<div>
			[normal]
			<ToggleButton
				checked={isChecked}
				disabled={args.disabled}
				onChange={onChange}
			/>
			<Space type="top" gap="2rem" />
			[disabled]
			<ToggleButton checked={true} disabled onChange={onChange} />
		</div>
	);
};

export const Basic = Template.bind({});
