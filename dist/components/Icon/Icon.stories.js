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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon, iconTypes } from "../Icon";
import UseCopyToClipboard from "../../hooks/useCopyToClipboard";
export default {
    component: Icon,
    title: "components/Icon",
};
export var icon = function () { return _jsx(Icon, { icon: "favorite" }); };
icon.story = {
    name: "Default",
};
export var customSize = function () { return _jsx(Icon, { icon: "favorite", size: "4rem" }); };
export var customColor = function () { return _jsx(Icon, { icon: "favorite", color: "red" }); };
export var customizedWithStyle = function () { return (_jsx(Icon, { icon: "favorite", css: { color: "red", width: "4rem" } })); };
export var listOfIcons = function () {
    var _a = UseCopyToClipboard(), value = _a[0], copy = _a[1];
    var temp = __spreadArray([], iconTypes, true);
    var handleCopy = function (icon) {
        copy("<Icon icon=\"".concat(icon, "\" />"));
    };
    return (_jsx("ul", __assign({ css: iconListStyle }, { children: temp.map(function (icon) { return (_jsxs("li", __assign({ onClick: function () { return handleCopy(icon); } }, { children: [_jsx(Icon, { icon: icon, size: "10px" }), icon] }), icon)); }) })));
};
var iconListStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  li {\n    box-sizing: border-box;\n    width: 25%;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 1rem;\n    }\n  }\n"], ["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  li {\n    box-sizing: border-box;\n    width: 25%;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 1rem;\n    }\n  }\n"])));
var templateObject_1;
