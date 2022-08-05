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
import { Fragment as _Fragment, jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
/** 요소들의 flex 방향을 설정한다 */
function FlexDirection(_a) {
    var children = _a.children;
    return _jsx(_Fragment, { children: children });
}
function Row(_a) {
    var children = _a.children, gap = _a.gap, width = _a.width, justifyContent = _a.justifyContent, alignItems = _a.alignItems, className = _a.className;
    return (_jsx("div", __assign({ css: [
            directionStyle("row"),
            gapStyle("row", gap),
            { width: width, justifyContent: justifyContent, alignItems: alignItems },
        ], className: className }, { children: children })));
}
function Column(_a) {
    var children = _a.children, gap = _a.gap, width = _a.width, justifyContent = _a.justifyContent, alignItems = _a.alignItems, className = _a.className;
    return (_jsx("div", __assign({ css: [
            directionStyle("column"),
            gapStyle("column", gap),
            { width: width, justifyContent: justifyContent, alignItems: alignItems },
        ], className: className }, { children: children })));
}
FlexDirection.defaultProps = {
    gap: "1rem",
    width: "100%",
};
FlexDirection.Row = Row;
FlexDirection.Column = Column;
var gapStyle = function (direction, gap) {
    var marginType = direction === "row"
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          margin-left: ", ";\n        "], ["\n          margin-left: ", ";\n        "])), gap) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          margin-top: ", ";\n        "], ["\n          margin-top: ", ";\n        "])), gap);
    return css({
        "& > *:not(:first-of-type)": marginType,
    });
};
var directionStyle = function (direction) {
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: ", ";\n  "], ["\n    display: flex;\n    flex-direction: ", ";\n  "])), direction);
};
export { FlexDirection };
var templateObject_1, templateObject_2, templateObject_3;
