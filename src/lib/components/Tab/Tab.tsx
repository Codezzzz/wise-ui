/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { useTabGroup } from "../TabGroup/TabGroup";

export type TabsItemProps = {
	path: string;
	text: string;
};
export type TabProps = {
	children: React.ReactNode;
	active?: boolean;
	width?: number | string;
	theme?: "base" | "primary_underline" | "primary_base";
	value: number | string;
	onChange?: (id: number | string) => void;
};

function Tab({
	children,
	active,
	width = "fit-content",
	theme = "primary_underline",
	value,
	onChange
}: TabProps) {
	const { groupValue, onChangeValue } = useTabGroup();

	const isActive = active || value === groupValue;

	return (
		<span
			id={value.toString()}
			css={[tabStyle(theme), { width }]}
			className={`tab_item ${isActive ? "active" : ""}`}
			onClick={e => {
				onChange?.(value);
				onChangeValue?.(value);
			}}
		>
			{children}
		</span>
	);
}

export default Tab;

const tabStyle = (theme: "base" | "primary_underline" | "primary_base") => css`
	display: flex;
	position: relative;
	cursor: pointer;
	font-size: ${fontSize.sm};
	font-family: ${fontFamily.Medium};
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: ${colorPalette("gray500")};

	${theme === "base" &&
	css`
		padding: 8px 12px;
		height: 2.25rem;
	`}

	${theme === "primary_underline" &&
	css`
		height: 2.75rem;
	`}

	${theme === "primary_base" &&
	css`
		padding: 8px 12px;
		height: 2.25rem;
	`}
	
	&.active {
		${theme === "base" &&
		css`
			color: ${colorPalette("gray700")};
			background: #ffffff;
			box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
				0px 1px 2px rgba(16, 24, 40, 0.06);
			border-radius: 6px;
		`}

		${theme === "primary_underline" &&
		css`
			color: ${colorPalette("primary700")};
			&:after {
				content: "";
				width: 100%;
				position: absolute;
				bottom: 0;
				border-bottom: 2px solid ${colorPalette("primary700")};
			}
		`}

		${theme === "primary_base" &&
		css`
			color: ${colorPalette("primary700")};
			background: ${colorPalette("primary50")};
			border-radius: 6px;
		`}
	}
`;
