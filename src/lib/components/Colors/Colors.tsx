import styled from "@emotion/styled";
import { useCopyToClipboard } from "../../hooks";
import { ColorKeys } from "lib/styles/colors";
import { mediaQuery } from "lib/styles/media";
import { Palette, palette } from "lib/styles/palette";

export type ColorsProps = {};

function Colors({}: ColorsProps) {
	const [value, copy] = useCopyToClipboard();

	const paletteKey = Object.keys(palette) as Palette[];

	return (
		<>
			{paletteKey.map((item, index_) => {
				const colors = palette[item];

				return (
					<div key={item}>
						<Title>[ {item} ]</Title>
						<Wrapper>
							{ColorKeys.map(item => (
								<ColorItem key={item} color={colors[item]}>
									<button
										onClick={() => copy(colors[item])}
									></button>
									<Color color={"#fff"}>
										<span>{item}</span>
										<span>{colors[item]}</span>
									</Color>
								</ColorItem>
							))}
						</Wrapper>
					</div>
				);
			})}
		</>
	);
}

export default Colors;

type ColorProps = {
	color: string;
};

const Title = styled.div`
	font-size: 1.2rem;
	margin: 20px 0px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	display: grid;
	grid-template-columns: repeat(11, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	justify-items: stretch;
	align-items: stretch;

	${mediaQuery(920)} {
		grid-template-columns: repeat(8, 1fr);
	}

	${mediaQuery(620)} {
		grid-template-columns: repeat(6, 1fr);
	}

	${mediaQuery(560)} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const ColorItem = styled.div<ColorProps>`
	background-color: ${props => props.color};
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	text-align: left;
	box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
		0px 4px 6px -2px rgba(16, 24, 40, 0.03);
	border-radius: 8px;
	position: relative;

	button {
		width: 100%;
		height: 100px;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		cursor: pointer;
	}
`;

const Color = styled.div<ColorProps>`
	background-color: ${props => props.color};
	padding: 10px;
	border-radius: 0 0 8px 8px;
	color: #101828;
	display: flex;
	flex-direction: column;
	font-size: 0.7rem;

	& span:first-of-type {
		margin-bottom: 4px;
		font-size: 0.8rem;
		font-weight: 500;
	}
`;
