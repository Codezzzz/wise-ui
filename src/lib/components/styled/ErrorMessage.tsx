/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
export const ErrorMessage = styled.span`
	display: inline-block;
	margin-top: 0.375rem;
	color: ${colorPalette("error500")};
	font-size: ${fontSize.sm};
	font-family: ${fontFamily.Normal};
	line-height: 20px;
	font-weight: 350;
`;
