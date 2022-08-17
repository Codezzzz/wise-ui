/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Radio from "./Radio";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import Button from "../Button";

export default {
	title: "components/Radio",
	component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => {
	const [selected, setSelected] = useState(false);
	useEffect(() => {
		setSelected(!!args.checked);
	}, [args.checked]);
	return (
		<div>
			<Radio
				{...args}
				checked={selected}
				onChange={e => setSelected(true)}
			/>

			<Button
				onClick={() => setSelected(false)}
				css={css`
					margin-top: 1rem;
				`}
			>
				Clear
			</Button>
		</div>
	);
};

export const Basic = Template.bind({});

Basic.args = {
	children: "Option 1",
	checked: false
};
