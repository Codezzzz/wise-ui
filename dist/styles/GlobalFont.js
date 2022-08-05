var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import NotoSansBold from "./fonts/NotoSansCJKkr-Bold.otf";
import NotoSansRegular from "./fonts/NotoSansCJKkr-Regular.otf";
import NotoSansMedium from "./fonts/NotoSansCJKkr-Medium.otf";
import NotoSansDemiLight from "./fonts/NotoSansCJKkr-DemiLight.otf";
var style = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t@font-face {\n\t\tfont-family: \"Bold\";\n\t\tsrc: local(\"Bold\"), url(", ") format(\"woff\");\n\t\tfont-weight: 700;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"Regular\";\n\t\tsrc: local(\"Regular\"), url(", ") format(\"woff\");\n\t\tfont-weight: 350;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"Normal\";\n\t\tsrc: local(\"Regular\"), url(", ") format(\"woff\");\n\t\tfont-weight: 350;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"SemiBold\";\n\t\tsrc: local(\"SemiBold\"), url(", ") format(\"woff\");\n\t\tfont-weight: 500;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"Medium\";\n\t\tsrc: local(\"Medium\"), url(", ") format(\"woff\");\n\t\tfont-weight: 400;\n\t\tfont-display: swap;\n\t}\n"], ["\n\t@font-face {\n\t\tfont-family: \"Bold\";\n\t\tsrc: local(\"Bold\"), url(", ") format(\"woff\");\n\t\tfont-weight: 700;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"Regular\";\n\t\tsrc: local(\"Regular\"), url(", ") format(\"woff\");\n\t\tfont-weight: 350;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"Normal\";\n\t\tsrc: local(\"Regular\"), url(", ") format(\"woff\");\n\t\tfont-weight: 350;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"SemiBold\";\n\t\tsrc: local(\"SemiBold\"), url(", ") format(\"woff\");\n\t\tfont-weight: 500;\n\t\tfont-display: swap;\n\t}\n\n\t@font-face {\n\t\tfont-family: \"Medium\";\n\t\tsrc: local(\"Medium\"), url(", ") format(\"woff\");\n\t\tfont-weight: 400;\n\t\tfont-display: swap;\n\t}\n"])), NotoSansBold, NotoSansDemiLight, NotoSansDemiLight, NotoSansMedium, NotoSansRegular);
/**
 * 실제 폰트와 , 디자인상의 폰트명이 다름
 *
 * 디자인               폰트
 * Regaulr or Normal  DemiLight
 * Medium             Regular
 * SemiBold           Medium
 * Bold               Bold
 */
var GlobalFontStyle = function () { return _jsx(Global, { styles: style }); };
export default GlobalFontStyle;
var templateObject_1;
