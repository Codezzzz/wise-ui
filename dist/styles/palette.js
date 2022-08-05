import { ColorKeys, error, gray, primary, warning, success } from "./colors";
/**
 * light theme
 */
var palette = {
    gray: gray,
    error: error,
    primary: primary,
    warning: warning,
    success: success
};
/**
 * dark theme
 */
var darkPalette = {
    gray: gray,
    error: error,
    primary: primary,
    warning: warning,
    success: success
};
var paletteKey = Object.keys(palette);
export var buildCssVariable = function (theme) {
    var reducePalete = paletteKey.map(function (item, index) {
        var colors = theme === "light" ? palette[item] : darkPalette[item];
        return ColorKeys.map(function (colorKey) {
            return { key: item + colorKey, color: colors[colorKey] };
        });
    });
    var merged = reducePalete.flat(1);
    return merged
        .map(function (item, index) { return "--".concat(item.key.replace(/_/, "-"), ": ").concat(item.color, ";"); }, "\n")
        .join("\n");
};
export var themes = {
    light: buildCssVariable("light"),
    dark: buildCssVariable("dark")
};
var cssVar = function (name) { return "var(--".concat(name.replace(/_/, "-"), ")"); };
var colorPalette = function (color) {
    return cssVar(color);
};
export { palette, colorPalette };
