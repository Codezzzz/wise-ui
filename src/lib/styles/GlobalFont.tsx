/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Bold";
    src: local("Bold"), url("./fonts/NotoSansCJKkr-Bold.otf") format("woff");
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Regular";
    src: local("Regular"),
      url("./fonts/NotoSansCJKkr-DemiLight.otf") format("woff");
    font-weight: 350;
    font-display: swap;
  }

  @font-face {
    font-family: "Normal";
    src: local("Regular"),
      url("./fonts/NotoSansCJKkr-DemiLight.otf") format("woff");
    font-weight: 350;
    font-display: swap;
  }

  @font-face {
    font-family: "SemiBold";
    src: local("SemiBold"),
      url("./fonts/NotoSansCJKkr-Medium.otf") format("woff");
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Medium";
    src: local("Medium"),
      url("./fonts/NotoSansCJKkr-Regular.otf") format("woff");
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
