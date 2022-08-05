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
import { radios, text, withKnobs } from "@storybook/addon-knobs";
import Button from "../Button";
import { FlexDirection } from "./FlexDirection";
export default {
    title: "components/Utils/FlexDirection",
    component: FlexDirection,
    decorators: [withKnobs],
};
export var flexDirection = function () {
    var direction = radios("direction", { Row: "row", Column: "column" }, "row");
    if (direction === "row")
        return (_jsxs(FlexDirection.Row, __assign({ gap: "1rem" }, { children: [_jsx("div", { children: "item1" }), _jsx("div", { children: "item2" })] })));
    return (_jsxs(FlexDirection.Column, __assign({ gap: "1rem" }, { children: [_jsx("div", { children: "item1" }), _jsx("div", { children: "item2" })] })));
};
export var example = function () {
    var direction = radios("direction", { Row: "row", Column: "column" }, "row");
    var gap = text("gap", "1rem");
    if (direction === "row") {
        return (_jsxs(FlexDirection.Row, __assign({ gap: gap }, { children: [_jsx(Button, { children: "PRIMARY" }), _jsx(Button, { children: "PRIMARY" }), _jsx(Button, { children: "PRIMARY" })] })));
    }
    return (_jsxs(FlexDirection.Column, __assign({ gap: gap }, { children: [_jsx(Button, { children: "PRIMARY" }), _jsx(Button, { children: "PRIMARY" }), _jsx(Button, { children: "PRIMARY" })] })));
};
flexDirection.story = { name: "Default" };
