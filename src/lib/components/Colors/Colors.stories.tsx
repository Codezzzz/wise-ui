/** @jsxImportSource @emotion/react */
import { withKnobs } from "@storybook/addon-knobs";
import Colors from "./Colors";

export default {
	title: "Colors",
	component: Colors,
	decorators: [withKnobs]
};

export const colors = () => {
	return <Colors />;
};
