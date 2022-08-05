var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "../../styles";
import { colorPalette } from "../../styles";
import FlexDirection from "../FlexDirection";
function Button(_a) {
    var children = _a.children, onClick = _a.onClick, theme = _a.theme, size = _a.size, disabled = _a.disabled, width = _a.width, type = _a.type, icon = _a.icon, _b = _a.iconGap, iconGap = _b === void 0 ? "0.764rem" : _b, _c = _a.iconPosition, iconPosition = _c === void 0 ? "left" : _c, backgroundColor = _a.backgroundColor, color = _a.color, borderColor = _a.borderColor, height = _a.height, fontFamily = _a.fontFamily, rest = __rest(_a, ["children", "onClick", "theme", "size", "disabled", "width", "type", "icon", "iconGap", "iconPosition", "backgroundColor", "color", "borderColor", "height", "fontFamily"]);
    return (_jsx("button", __assign({ type: type, css: [
            style,
            themes[theme],
            sizes[size],
            {
                width: width,
                backgroundColor: backgroundColor,
                color: color,
                borderColor: borderColor,
                height: height,
                fontFamily: fontFamily,
            },
        ], onClick: onClick, disabled: disabled }, rest, { children: icon ? (iconPosition === "left" ? (_jsxs(FlexDirection.Row, __assign({ gap: iconGap, alignItems: "center" }, { children: [_jsx("span", __assign({ style: { display: "flex" } }, { children: icon })), _jsx("span", { children: children })] }))) : (_jsxs(FlexDirection.Row, __assign({ gap: iconGap, alignItems: "center" }, { children: [_jsx("span", { children: children }), _jsx("span", __assign({ style: { display: "flex" } }, { children: icon }))] })))) : (children) })));
}
export default Button;
Button.defaultProps = {
    theme: "primary",
    size: "medium",
};
var style = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  border: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  font-style: normal;\n  line-height: 24px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n  &:disabled {\n    cursor: not-allowed;\n  }\n"], ["\n  outline: none;\n  border: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  font-style: normal;\n  line-height: 24px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])), colorPalette("primary600"));
var themes = {
    primary: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n    color: white;\n    font-family: ", ";\n    &:hover:enabled {\n    }\n    &:active:enabled {\n    }\n    &:disabled {\n      background: ", ";\n      border: 1px solid ", ";\n    }\n  "], ["\n    background: ", ";\n    color: white;\n    font-family: ", ";\n    &:hover:enabled {\n    }\n    &:active:enabled {\n    }\n    &:disabled {\n      background: ", ";\n      border: 1px solid ", ";\n    }\n  "])), colorPalette("primary600"), fontFamily.SemiBold, colorPalette("primary200"), colorPalette("primary200")),
    base: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background: white;\n    color: ", ";\n    border: 1px solid ", ";\n    font-family: ", ";\n    font-weight: 500;\n    line-height: 20px;\n    &:disabled {\n      border: 1px solid ", ";\n      color: ", ";\n    }\n  "], ["\n    background: white;\n    color: ", ";\n    border: 1px solid ", ";\n    font-family: ", ";\n    font-weight: 500;\n    line-height: 20px;\n    &:disabled {\n      border: 1px solid ", ";\n      color: ", ";\n    }\n  "])), colorPalette("gray700"), colorPalette("gray300"), fontFamily.Medium, colorPalette("gray200"), colorPalette("gray300")),
    error: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background: ", ";\n    border: 1px solid ", ";\n    color: white;\n    font-family: ", ";\n    font-weight: 500;\n    line-height: 20px;\n    &:hover:enabled {\n    }\n    &:active:enabled {\n    }\n    &:disabled {\n      opacity: 0.7;\n    }\n  "], ["\n    background: ", ";\n    border: 1px solid ", ";\n    color: white;\n    font-family: ", ";\n    font-weight: 500;\n    line-height: 20px;\n    &:hover:enabled {\n    }\n    &:active:enabled {\n    }\n    &:disabled {\n      opacity: 0.7;\n    }\n  "])), colorPalette("error600"), colorPalette("error600"), fontFamily.SemiBold),
};
var sizes = {
    small: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    height: 2.5rem;\n    font-size: ", ";\n  "], ["\n    height: 2.5rem;\n    font-size: ", ";\n  "])), fontSize.sm),
    medium: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    height: 2.75rem;\n    font-size: ", ";\n  "], ["\n    height: 2.75rem;\n    font-size: ", ";\n  "])), fontSize.md),
    big: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    height: 3rem;\n    font-size: ", ";\n  "], ["\n    height: 3rem;\n    font-size: ", ";\n  "])), fontSize.lg),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
