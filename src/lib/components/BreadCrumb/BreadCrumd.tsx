/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon } from "../Icon";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexDirection from "../FlexDirection";

export type BreadCrumdData = {
	text: string;
	path: string;
	isHide?: boolean;
};

export type BreadCrumdProps = {
	maxContentLength?: number;
	breadCrumd: BreadCrumdData[];
};

function BreadCrumd({ maxContentLength = 6, breadCrumd }: BreadCrumdProps) {
	const [data, setData] = useState(breadCrumd);
	const navigate = useNavigate();
	const lastIndex = data.length - 1;

	const handleRoute = (path: string) => {
		navigate(path);
	};

	useEffect(() => {
		if (breadCrumd.length >= maxContentLength) {
			const fakeData = { text: "", path: "", isHide: true };
			const temp = [...data];

			temp.splice(2, 0, fakeData);

			const tt = temp.filter((item, index) => {
				return (
					index === 0 ||
					index === 1 ||
					index === 2 ||
					index === temp.length - 1
				);
			});

			console.log(tt);

			setData(tt);
		}
	}, [maxContentLength]);

	const handleShowRoute = () => {
		setData(breadCrumd);
	};
	return (
		<>
			<FlexDirection.Row gap="0.75rem">
				{data.map((item, index) => (
					<FlexDirection.Row
						gap="0.75rem"
						key={item.text}
						width="fit-content"
					>
						{!item.isHide ? (
							<div
								css={anchor(index === lastIndex)}
								onClick={() => handleRoute(item.path)}
							>
								{item.text}
							</div>
						) : (
							<div
								onClick={handleShowRoute}
								css={anchor(index === lastIndex)}
							>
								...
							</div>
						)}

						{lastIndex !== index && (
							<div css={iconWrapper}>
								<Icon icon="arrowRightSmall" />
							</div>
						)}
					</FlexDirection.Row>
				))}
			</FlexDirection.Row>
		</>
	);
}

export default BreadCrumd;

const anchor = (isCurrent: boolean) => css`
	cursor: pointer;
	font-style: normal;
	font-weight: 400;
	font-size: ${fontSize.sm};
	line-height: 20px;
	color: ${colorPalette("gray500")};

	${isCurrent &&
	css`
		color: ${colorPalette("primary700")};
	`}

	font-family : ${fontFamily.Medium};
`;

const iconWrapper = css`
	display: flex;
`;
