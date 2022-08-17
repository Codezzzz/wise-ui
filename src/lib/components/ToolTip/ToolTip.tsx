/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import ReactTooltip from "react-tooltip";
import { v4 } from "uuid";

export type ToolTipProps = {
	/** unique id */
	id?: string;
	children?: React.ReactNode;
	theme?: "dark";
	text: string;
	placement?: "top" | "bottom" | "right" | "left";
	effect?: "float" | "solid";
	/** 글로벌 툴팁 사용 / 같은 tooltip 사용시 같은 아이디 부여하기 */
	global?: boolean;
};

function ToolTip({
	id = v4(),
	children,
	text,
	theme = "dark",
	placement = "bottom",
	effect = "solid",
	global = false
}: ToolTipProps) {
	const bg = theme === "dark" ? "#101828" : "#fff";
	const border = theme === "dark" ? "#101828" : "#F2F4F7";
	const textColor = theme === "dark" ? "#fff" : "#667085";

	return (
		<div css={style(theme, placement, border)}>
			{!global && <Content id={id}>{children}</Content>}
			<ReactTooltip
				id={id}
				place={placement}
				multiline={true}
				effect={effect}
				className="customeTheme"
				backgroundColor={bg}
				borderColor={border}
				textColor={textColor}
				html={true}
			>
				{text}
			</ReactTooltip>
		</div>
	);
}

function Content({ id, children }: { id: string; children?: React.ReactNode }) {
	return (
		<div
			css={css`
				width: fit-content;
			`}
			data-tip=""
			data-for={id}
		>
			{children}
		</div>
	);
}

ToolTip.Content = Content;
export default ToolTip;

const style = (
	theme: ToolTipProps["theme"],
	placement: ToolTipProps["placement"],
	borderColor: string
) => css`
	width: fit-content;
	height: fit-content;

	.customeTheme {
		border-radius: 8px;
		padding: 8px 12px;
		font-size: ${fontSize.xs};
		font-family: ${fontFamily.Medium};
		line-height: 18px;
		box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);

		/* border-${placement}-color: ${borderColor};
        
        ${theme === "dark" &&
		css`
				border-color: ${borderColor};
            &:before{
                
            }
                &:after {
                    border-${placement}-color: ${borderColor} !important;
                }
			`} */
	}
`;
