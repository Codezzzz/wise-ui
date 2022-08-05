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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon } from "../Icon";
import Button from "./Button";
export default {
    title: "components/Button",
    component: Button,
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    children: "Button",
    size: "small",
    disabled: false,
    theme: "primary",
    width: "100px",
};
Basic.argTypes = {
    onClick: { action: "clicked" },
};
export function Type() {
    return (_jsxs("div", __assign({ css: buttonWrapper }, { children: [_jsx(Button, { children: "PRIMARY" }), _jsx(Button, __assign({ theme: "base" }, { children: "SECONDARY" })), _jsx(Button, __assign({ theme: "error" }, { children: "TERTIARY" }))] })));
}
var buttonWrapper = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  & + & {\n    margin-top: 0.5rem;\n  }\n"], ["\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  & + & {\n    margin-top: 0.5rem;\n  }\n"])));
export var sizes = function () {
    return (_jsxs("div", __assign({ css: buttonWrapper }, { children: [_jsx(Button, __assign({ size: "small" }, { children: "BUTTON" })), _jsx(Button, __assign({ size: "medium" }, { children: "BUTTON" })), _jsx(Button, __assign({ size: "big" }, { children: "BUTTON" }))] })));
};
export var datePikcerButtonExample = function () {
    return (_jsx(Button, __assign({ width: "141px", theme: "base", size: "small", iconGap: "0.65625rem", icon: _jsx(Icon, { icon: "calendar" }) }, { children: "Select dates" })));
};
var templateObject_1;
