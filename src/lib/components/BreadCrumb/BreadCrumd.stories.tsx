/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BreadCrumd from "./BreadCrumd";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
	title: "components/BreadCrumd",
	component: BreadCrumd
} as ComponentMeta<typeof BreadCrumd>;

const Template: ComponentStory<typeof BreadCrumd> = args => {
	const data = [
		{ text: "Projects", path: "/project" },
		{ text: "Settings", path: "/settings" },
		{ text: "DashBoard", path: "/dashBoard" },
		{ text: "Team", path: "/Team" },
		{ text: "Team2", path: "/Team" },
		{ text: "Team3", path: "/Team" }
	];
	return (
		<div>
			<BreadCrumd breadCrumd={data} />
		</div>
	);
};

export const Basic = Template.bind({});
