var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import { themes } from "./palette";
var style = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  *,\n\t::after,\n\t::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  * {\n    box-sizing: inherit;\n  }\n  input,\n  button,\n  textarea {\n    font-family: inherit;\n  }\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n\n  body {\n    ", "\n  }\n\n  @media (prefers-color-scheme: dark) {\n    body {\n      ", "\n    }\n  }\n\n  body[data-theme=\"light\"] {\n    ", ";\n  }\n\n  body[data-theme=\"dark\"] {\n    ", ";\n  }\n\n  ul,\n  li {\n    padding: 0;\n    margin: 0;\n  }\n\n  ul li {\n    list-style: none;\n  }\n\n  a {\n    color: #000;\n  }\n\n  a {\n    list-style: none;\n  }\n  a:link {\n    text-decoration: none;\n  }\n"], ["\n  ", "\n  *,\n\t::after,\n\t::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  * {\n    box-sizing: inherit;\n  }\n  input,\n  button,\n  textarea {\n    font-family: inherit;\n  }\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n\n  body {\n    ", "\n  }\n\n  @media (prefers-color-scheme: dark) {\n    body {\n      ", "\n    }\n  }\n\n  body[data-theme=\"light\"] {\n    ", ";\n  }\n\n  body[data-theme=\"dark\"] {\n    ", ";\n  }\n\n  ul,\n  li {\n    padding: 0;\n    margin: 0;\n  }\n\n  ul li {\n    list-style: none;\n  }\n\n  a {\n    color: #000;\n  }\n\n  a {\n    list-style: none;\n  }\n  a:link {\n    text-decoration: none;\n  }\n"])), emotionReset, themes.light, themes.dark, themes.light, themes.dark);
var GlobalStyle = function () { return _jsx(Global, { styles: style }); };
export default GlobalStyle;
var templateObject_1;
