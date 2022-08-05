/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import { themes } from "./palette";

const style = css`
  ${emotionReset}
  *,
	::after,
	::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    ${themes.light}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${themes.dark}
    }
  }

  body[data-theme="light"] {
    ${themes.light};
  }

  body[data-theme="dark"] {
    ${themes.dark};
  }

  ul,
  li {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    color: #000;
  }

  a {
    list-style: none;
  }
  a:link {
    text-decoration: none;
  }
`;
const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
