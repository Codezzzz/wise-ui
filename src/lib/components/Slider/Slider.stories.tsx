/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Space from "../Space";
import Slider, { SliderValue } from "./Slider";

export default {
	title: "components/Slider",
	component: Slider
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => {
	const handleOnChange = ({ min, max }: SliderValue) => {
		// console.log(min, max);
	};
	return (
		<div css={wrapper}>
			<div>
				[Nomal, one way, size]
				<Slider {...args} width="250px" onChange={handleOnChange} />
			</div>

			<div>
				[Nomal, one way]
				<Slider {...args} onChange={handleOnChange} />
			</div>
			<div>
				[Nomal, two way]
				<Slider {...args} isTwoWay onChange={handleOnChange} />
			</div>

			<div>
				[followBottom, one way ]
				<Slider
					{...args}
					type="followBottom"
					onChange={handleOnChange}
				/>
			</div>

			<div>
				[followBottom, two way ]
				<Slider
					{...args}
					isTwoWay
					type="followBottom"
					onChange={handleOnChange}
				/>
			</div>

			<div>
				[followTop, one way ]
				<Slider {...args} type="followTop" onChange={handleOnChange} />
			</div>

			<div>
				[followTop, two way ]
				<Slider
					{...args}
					isTwoWay
					type="followTop"
					onChange={handleOnChange}
				/>
			</div>

			<div>
				[set server data, one way ]
				<Slider
					{...args}
					isTwoWay
					type="followTop"
					onChange={handleOnChange}
					sliderValue={{ minVal: 20 }}
				/>
			</div>

			<div>
				[set server data, two way ]
				<Slider
					{...args}
					isTwoWay
					type="followTop"
					onChange={handleOnChange}
					sliderValue={{ minVal: 10, maxVal: 70 }}
				/>
			</div>
		</div>
	);
};

export const Basic = Template.bind({});

Basic.args = {
	min: 0,
	max: 100,
	width: "100%"
};

const wrapper = css`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	padding: 0 50px;

	& > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;
