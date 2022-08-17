/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import NotoSansBold from "./fonts/NotoSansCJKkr-Bold.otf";
import NotoSansRegular from "./fonts/NotoSansCJKkr-Regular.otf";
import NotoSansMedium from "./fonts/NotoSansCJKkr-Medium.otf";
import NotoSansDemiLight from "./fonts/NotoSansCJKkr-DemiLight.otf";
const style = css`
  @font-face {
    font-family: "Bold";
    src: local("Bold"), url(${NotoSansBold}) format("woff");
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Regular";
    src: local("Regular"), url(${NotoSansDemiLight}) format("woff");
    font-weight: 350;
    font-display: swap;
  }

  @font-face {
    font-family: "Normal";
    src: local("Regular"), url(${NotoSansDemiLight}) format("woff");
    font-weight: 350;
    font-display: swap;
  }

  @font-face {
    font-family: "SemiBold";
    src: local("SemiBold"), url(${NotoSansMedium}) format("woff");
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Medium";
    src: local("Medium"), url(${NotoSansRegular}) format("woff");
    font-weight: 400;
    font-display: swap;
  }
`;

/**
 * 실제 폰트와 , 디자인상의 폰트명이 다름
 *
 * 디자인               폰트
 * Regaulr or Normal  DemiLight
 * Medium             Regular
 * SemiBold           Medium
 * Bold               Bold
 */

const GlobalFontStyle = () => <Global styles={style} />;

export default GlobalFontStyle;
