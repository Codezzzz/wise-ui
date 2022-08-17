/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "lib/styles/palette";
import { useEffect, useRef, useState } from "react";

export type DividerProps = {
	children?: React.ReactNode;
	/** divider height / 기본 1px */
	height?: number | string;
};

function Divider({ children, height = "1px" }: DividerProps) {
	const [size, setSize] = useState({ width: 0, height: 0 });
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (ref.current && !!children) {
			setSize({
				width: ref.current.clientWidth,
				height: ref.current.clientHeight
			});
		}
	}, [children]);

	return (
		<div css={[style(!!children, size, height)]}>
			{children && (
				<span className="children_element" ref={ref}>
					{children}
				</span>
			)}
		</div>
	);
}

export default Divider;

const style = (
	isChildren: boolean,
	size: { width: number; height: number },
	height: string | number
) => css`
	width: 100%;
	position: relative;
	.children_element {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	${!isChildren &&
	css`
		width: 100%;
		height: ${height};
		background-color: ${colorPalette("gray200")};
	`}

	${isChildren &&
	css`
		height: ${size.height}px;
		position: relative;
		&:after {
			content: "";
			width: calc(50% - ${size.width / 2}px - 10px);
			height: ${height};
			background-color: ${colorPalette("gray200")};
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(0, -50%);
		}

		&:before {
			content: "";
			width: calc(50% - ${size.width / 2}px - 10px);
			height: ${height};
			background-color: ${colorPalette("gray200")};
			position: absolute;
			top: 50%;
			right: 0px;
			transform: translate(0, -50%);
		}
	`}
`;
