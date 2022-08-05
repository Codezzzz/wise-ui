var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as icons from "../../assets/icon/svg";
export var iconTypes = Object.keys(icons);
/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
var Icon = function (_a) {
    var icon = _a.icon, color = _a.color, size = _a.size, className = _a.className, rotate = _a.rotate, onClick = _a.onClick;
    var SVGIcon = icons[icon];
    var rotateDeg = "rotate(".concat(rotate, "deg)");
    return (_jsx(SVGIcon, { onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(e); }, css: [
            {
                width: size,
                minWidth: size,
                height: "auto",
                transform: rotateDeg,
                transition: "all 0.3s ease",
                marginTop: "2px",
            },
            onClick && { cursor: "pointer" },
            color && style(color),
        ], className: className }));
};
Icon.defaultProps = {
    rotate: "0",
};
export default Icon;
var style = function (color) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  path {\n    stroke: ", ";\n  }\n"], ["\n  path {\n    stroke: ", ";\n  }\n"])), color); };
var templateObject_1;
