/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
export const HintMessage = styled.span`
	display: inline-block;
	margin-top: 0.375rem;
	color: ${colorPalette("gray500")};
	font-size: ${fontSize.sm};
	font-family: ${fontFamily.Normal};
	line-height: 20px;
	font-weight: 350;
	text-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px #f4ebff;
`;
