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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState, } from "react";
import GlobalFontStyle from "../styles/GlobalFont";
import GlobalStyle from "../styles/GlobalStyle";
var ThemeContext = createContext(null);
function checkIsDarkTheme() {
    if (typeof window === "undefined")
        return false;
    var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark;
}
var useIsomorphicEffect = typeof window !== "undefined" ? useEffect : useLayoutEffect;
export function ThemeProvider(_a) {
    var children = _a.children, _b = _a.initialTheme, initialTheme = _b === void 0 ? "default" : _b;
    var _c = useState(initialTheme), theme = _c[0], setTheme = _c[1];
    var _d = useState(function () { return checkIsDarkTheme(); }), systemIsDark = _d[0], setSystemIsDark = _d[1];
    useIsomorphicEffect(function () {
        if (theme === "default")
            return;
        document.body.dataset.theme = theme;
    }, [theme]);
    useEffect(function () {
        var callback = function (e) {
            setSystemIsDark(e.matches);
        };
        var match = window.matchMedia("(prefers-color-scheme: dark)");
        match.addEventListener("change", callback);
        return function () {
            match.removeEventListener("change", callback);
        };
    }, []);
    var isDarkTheme = useMemo(function () {
        if (theme === "dark")
            return true;
        if (systemIsDark && theme === "default")
            return true;
        return false;
    }, [theme, systemIsDark]);
    var toggle = useCallback(function () {
        if (isDarkTheme) {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }, [isDarkTheme]);
    return (_jsxs(ThemeContext.Provider, __assign({ value: { theme: theme, setTheme: setTheme, isDarkTheme: isDarkTheme, toggle: toggle } }, { children: [children, _jsx(GlobalStyle, {}), _jsx(GlobalFontStyle, {})] })));
}
export function useTheme() {
    var value = useContext(ThemeContext);
    if (!value) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return value;
}
