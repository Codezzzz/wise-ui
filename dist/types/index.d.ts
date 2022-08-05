import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import * as React$1 from 'react';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

declare type ColorVariables = {
    "25": string;
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
};
declare type ColorKey = keyof ColorVariables;
declare type ColorPalette = Record<ColorKey, string>;
declare const gray: ColorPalette;
declare const error: ColorPalette;
declare const primary: ColorPalette;
declare const warning: ColorPalette;
declare const success: ColorPalette;
declare const ColorKeys: (keyof ColorVariables)[];

declare type Palette = "gray" | "error" | "primary" | "warning" | "success";
declare type Theme$1 = "light" | "dark";
/**
 * light theme
 */
declare const palette: Record<Palette, ColorVariables>;
declare const buildCssVariable: (theme: Theme$1) => string;
declare const themes: {
    light: string;
    dark: string;
};
declare const colorPalette: (color: string) => string;

declare const fontSize: {
    readonly D2xl: "4.5rem";
    readonly Dxl: "3.75rem";
    readonly Dlg: "3rem";
    readonly Dmd: "2.25rem";
    readonly Dsm: "1.875rem";
    readonly Dxs: "1.5rem";
    readonly xl: "1.25rem";
    readonly lg: "1.125rem";
    readonly md: "1rem";
    readonly sm: "0.875rem";
    readonly xs: "0.75rem";
};
declare const fontFamily: FontFamilyType;
declare type FontFamilyType = {
    Bold: string;
    Medium: string;
    SemiBold: string;
    Regular: string;
    Normal: string;
};
declare type FontFamilyKey = keyof FontFamilyType;

declare const mediaQuery: (maxWidth: number) => string;

interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "type"> {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: "primary" | "error" | "base";
    /** 버튼의 크기를 설정합니다 */
    size: "small" | "medium" | "big";
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    iconGap?: string | number;
    iconPosition?: "left" | "right";
    /** custom bg */
    backgroundColor?: string;
    /** custom color */
    color?: string;
    /** custom border color */
    borderColor?: string;
    height?: string | number;
    fontFamily?: FontFamilyKey;
}
declare function Button({ children, onClick, theme, size, disabled, width, type, icon, iconGap, iconPosition, backgroundColor, color, borderColor, height, fontFamily, ...rest }: ButtonProps): _emotion_react_jsx_runtime.JSX.Element;
declare namespace Button {
    var defaultProps: {
        theme: string;
        size: string;
    };
}

var _path$w, _defs;

function _extends$w() { _extends$w = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$w({
    width: 190,
    height: 28,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _path$w || (_path$w = /*#__PURE__*/React$1.createElement("path", {
    fill: "url(#logo_svg__a)",
    d: "M.5 0h189v28H.5z"
  })), _defs || (_defs = /*#__PURE__*/React$1.createElement("defs", null, /*#__PURE__*/React$1.createElement("pattern", {
    id: "logo_svg__a",
    patternContentUnits: "objectBoundingBox",
    width: 1,
    height: 1
  }, /*#__PURE__*/React$1.createElement("use", {
    xlinkHref: "#logo_svg__b",
    transform: "matrix(.00113 0 0 .00763 -.002 0)"
  })), /*#__PURE__*/React$1.createElement("image", {
    id: "logo_svg__b",
    width: 887,
    height: 131,
    xlinkHref: "data:image/png;base64,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"
  }))));
};

var _path$v;

function _extends$v() { _extends$v = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

var SvgBot = function SvgBot(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$v({
    width: 18,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$v || (_path$v = /*#__PURE__*/React$1.createElement("path", {
    d: "M7 10.667s1.094 1.25 2.917 1.25c1.822 0 2.916-1.25 2.916-1.25M12.208 6.5h.008m-4.591 0h.008m2.284 9.167a7.083 7.083 0 1 0-6.714-4.82c.09.268.135.401.143.504a.75.75 0 0 1-.023.271c-.026.1-.082.204-.194.412l-1.363 2.523c-.194.36-.292.54-.27.679.02.12.09.227.195.29.12.074.323.053.73.011l4.268-.441c.129-.014.194-.02.252-.018a.753.753 0 0 1 .156.02c.057.014.13.042.274.097.79.305 1.648.472 2.546.472ZM12.625 6.5a.417.417 0 1 1-.834 0 .417.417 0 0 1 .834 0Zm-4.583 0a.417.417 0 1 1-.834 0 .417.417 0 0 1 .834 0Z",
    stroke: "#fff",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$u, _path2$1, _path3$1, _path4;

function _extends$u() { _extends$u = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

var SvgGoogle = function SvgGoogle(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$u({
    xmlns: "http://www.w3.org/2000/svg",
    width: 48,
    height: 48
  }, props), _path$u || (_path$u = /*#__PURE__*/React$1.createElement("path", {
    fill: "#FFC107",
    d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React$1.createElement("path", {
    fill: "#FF3D00",
    d: "m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/React$1.createElement("path", {
    fill: "#4CAF50",
    d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
  })), _path4 || (_path4 = /*#__PURE__*/React$1.createElement("path", {
    fill: "#1976D2",
    d: "M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
  })));
};

var _path$t;

function _extends$t() { _extends$t = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

var SvgConversation = function SvgConversation(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$t({
    width: 20,
    height: 21,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$t || (_path$t = /*#__PURE__*/React$1.createElement("path", {
    d: "M6 16h8M9.018 1.764 2.235 7.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65C1 8.704 1 8.991 1 9.565V16.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C2.52 20 3.08 20 4.2 20h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 18.48 19 17.92 19 16.8V9.565c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z",
    stroke: "#D0D5DD",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$s;

function _extends$s() { _extends$s = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

var SvgProject = function SvgProject(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$s({
    width: 22,
    height: 22,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$s || (_path$s = /*#__PURE__*/React$1.createElement("path", {
    d: "m1 11 9.642 4.821c.131.066.197.098.266.111.06.012.123.012.184 0 .069-.013.135-.045.266-.11L21 11M1 16l9.642 4.821c.131.066.197.098.266.111.06.012.123.012.184 0 .069-.013.135-.045.266-.11L21 16M1 6l9.642-4.821c.131-.066.197-.099.266-.111a.5.5 0 0 1 .184 0c.069.012.135.045.266.11L21 6l-9.642 4.821c-.131.066-.197.098-.266.111a.501.501 0 0 1-.184 0c-.069-.013-.135-.045-.266-.11L1 6Z",
    stroke: "#D0D5DD",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$r;

function _extends$r() { _extends$r = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

var SvgStatistics = function SvgStatistics(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$r({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$r || (_path$r = /*#__PURE__*/React$1.createElement("path", {
    d: "M6 13v2m4-6v6m4-10v10m-8.2 4h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 16.72 19 15.88 19 14.2V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 1 15.88 1 14.2 1H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C1 3.28 1 4.12 1 5.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C3.28 19 4.12 19 5.8 19Z",
    stroke: "#D0D5DD",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$q;

function _extends$q() { _extends$q = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

var SvgFavorite = function SvgFavorite(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$q({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path$q || (_path$q = /*#__PURE__*/React$1.createElement("path", {
    d: "m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"
  })));
};

var _path$p;

function _extends$p() { _extends$p = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$p({
    width: 14,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$p || (_path$p = /*#__PURE__*/React$1.createElement("path", {
    d: "M13 1 1 13M1 1l12 12",
    stroke: "#667085",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$o;

function _extends$o() { _extends$o = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

var SvgArrowUp = function SvgArrowUp(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$o({
    width: 12,
    height: 8,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$o || (_path$o = /*#__PURE__*/React$1.createElement("path", {
    d: "m11 6.5-5-5-5 5",
    stroke: "#D0D5DD",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$n;

function _extends$n() { _extends$n = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

var SvgArrowDown = function SvgArrowDown(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$n({
    width: 12,
    height: 8,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$n || (_path$n = /*#__PURE__*/React$1.createElement("path", {
    d: "m1 1.5 5 5 5-5",
    stroke: "#D0D5DD",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$m;

function _extends$m() { _extends$m = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

var SvgArrowRightSmall = function SvgArrowRightSmall(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$m({
    width: 6,
    height: 10,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$m || (_path$m = /*#__PURE__*/React$1.createElement("path", {
    d: "m1 9 4-4-4-4",
    stroke: "#D0D5DD",
    strokeWidth: 1.333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$l;

function _extends$l() { _extends$l = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$l({
    width: 18,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$l || (_path$l = /*#__PURE__*/React$1.createElement("path", {
    d: "M12.333 5v-.667c0-.933 0-1.4-.181-1.756a1.667 1.667 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H8.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756V5m1.666 4.583v4.167m3.334-4.167v4.167M1.5 5h15m-1.667 0v9.333c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093c-.534.272-1.235.272-2.635.272H7.167c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093c-.272-.534-.272-1.235-.272-2.635V5",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$k;

function _extends$k() { _extends$k = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

var SvgPencil = function SvgPencil(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$k({
    width: 19,
    height: 19,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$k || (_path$k = /*#__PURE__*/React$1.createElement("path", {
    d: "M1.397 15.096c.038-.344.057-.517.11-.678.045-.143.11-.278.193-.404.094-.141.216-.264.461-.509L13.167 2.5A2.357 2.357 0 1 1 16.5 5.833L5.495 16.84c-.245.245-.368.367-.51.46a1.668 1.668 0 0 1-.404.195c-.16.052-.333.07-.677.11l-2.82.313.313-2.82Z",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$j;

function _extends$j() { _extends$j = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

var SvgSortDescend = function SvgSortDescend(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$j({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$j || (_path$j = /*#__PURE__*/React$1.createElement("path", {
    d: "M8 1v14m0 0 7-7m-7 7L1 8",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$i;

function _extends$i() { _extends$i = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

var SvgSortAscend = function SvgSortAscend(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$i({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$i || (_path$i = /*#__PURE__*/React$1.createElement("path", {
    d: "M8 15V1m0 0L1 8m7-7 7 7",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$h;

function _extends$h() { _extends$h = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

var SvgPrev = function SvgPrev(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$h({
    width: 14,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$h || (_path$h = /*#__PURE__*/React$1.createElement("path", {
    d: "M12.833 7H1.167m0 0L7 12.833M1.167 7 7 1.167",
    stroke: "#344054",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$g;

function _extends$g() { _extends$g = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

var SvgNext = function SvgNext(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$g({
    width: 14,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$g || (_path$g = /*#__PURE__*/React$1.createElement("path", {
    d: "M1.167 7h11.666m0 0L7 1.167M12.833 7 7 12.833",
    stroke: "#344054",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$f;

function _extends$f() { _extends$f = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

var SvgCalendar = function SvgCalendar(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$f({
    width: 18,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$f || (_path$f = /*#__PURE__*/React$1.createElement("path", {
    d: "M16.5 8.333h-15m10.833-6.666V5M5.667 1.667V5M5.5 18.333h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.534.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273h-7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C1.5 5.233 1.5 5.933 1.5 7.333v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272Z",
    stroke: "#344054",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$e;

function _extends$e() { _extends$e = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

var SvgCalendarLeft = function SvgCalendarLeft(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$e({
    width: 8,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$e || (_path$e = /*#__PURE__*/React$1.createElement("path", {
    d: "m6.5 11-5-5 5-5",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$d;

function _extends$d() { _extends$d = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

var SvgCalendarRight = function SvgCalendarRight(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$d({
    width: 8,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$d || (_path$d = /*#__PURE__*/React$1.createElement("path", {
    d: "m1.5 11 5-5-5-5",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$c;

function _extends$c() { _extends$c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var SvgTagClose = function SvgTagClose(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$c({
    width: 8,
    height: 8,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$c || (_path$c = /*#__PURE__*/React$1.createElement("path", {
    d: "m6.5 1.5-5 5m0-5 5 5",
    stroke: "#98A2B3",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$b;

function _extends$b() { _extends$b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$b({
    width: 18,
    height: 18,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$b || (_path$b = /*#__PURE__*/React$1.createElement("path", {
    d: "m16.5 16.5-2.917-2.917m2.084-5a7.083 7.083 0 1 1-14.167 0 7.083 7.083 0 0 1 14.167 0Z",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$a;

function _extends$a() { _extends$a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var SvgInputError = function SvgInputError(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$a({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$a || (_path$a = /*#__PURE__*/React$1.createElement("path", {
    d: "M8 5.333V8m0 2.667h.007M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z",
    stroke: "#F04438",
    strokeWidth: 1.333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$9;

function _extends$9() { _extends$9 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var SvgQuestion = function SvgQuestion(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$9({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React$1.createElement("path", {
    d: "M6.06 6a2 2 0 0 1 3.887.667c0 1.333-2 2-2 2M8 11.333h.007M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z",
    stroke: "#98A2B3",
    strokeWidth: 1.333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$8;

function _extends$8() { _extends$8 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$8({
    width: 16,
    height: 11,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React$1.createElement("path", {
    d: "M14.667 1 5.5 10.167 1.333 6",
    stroke: "#7F56D9",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$7;

function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgDropdown = function SvgDropdown(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$7({
    width: 12,
    height: 8,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React$1.createElement("path", {
    d: "m1 1.5 5 5 5-5",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$6;

function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgEmail = function SvgEmail(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$6({
    width: 20,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React$1.createElement("path", {
    d: "M1.667 3.833 8.47 8.596c.55.386.826.579 1.126.653.265.066.542.066.806 0 .3-.074.575-.267 1.126-.653l6.804-4.763M5.667 14.667h8.666c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092c.272-.535.272-1.235.272-2.635V5.333c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.092c-.534-.273-1.235-.273-2.635-.273H5.667c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092c-.272.535-.272 1.235-.272 2.635v5.334c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092c.535.273 1.235.273 2.635.273Z",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$5;

function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var SvgBell = function SvgBell(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$5({
    width: 18,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React$1.createElement("path", {
    d: "M6.795 17.5A3.32 3.32 0 0 0 9 18.333a3.32 3.32 0 0 0 2.205-.833M14 6.667a5 5 0 0 0-10 0c0 2.575-.65 4.338-1.375 5.504-.612.984-.918 1.476-.907 1.613.012.152.044.21.167.3.11.083.609.083 1.606.083h11.018c.997 0 1.496 0 1.606-.082.123-.091.155-.15.167-.301.012-.137-.294-.63-.907-1.613C14.65 11.005 14 9.241 14 6.667Z",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$4;

function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var SvgContact = function SvgContact(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$4({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React$1.createElement("path", {
    d: "M4.167 7.5v5H2.5c-.667 0-.833-.556-.833-.833V8.333c0-.277.166-.833.833-.833h1.667Zm0 0c0-2.917 2.083-5.833 5.833-5.833s5.833 2.916 5.833 5.833m0 0v5m0-5H17.5c.278 0 .833.167.833.833v3.334c0 .277-.166.833-.833.833h-1.667m0 0c0 1.25-.833 5.833-5.833 5.833M7.5 12.5c1.842 1.111 3.158 1.111 5 0",
    stroke: "#667085",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$3;

function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgModify = function SvgModify(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$3({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React$1.createElement("path", {
    d: "M9.167 3.333h-3.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092c-.272.535-.272 1.235-.272 2.635v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.534.272 1.235.272 2.635.272h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.535.273-1.235.273-2.635v-3.5m-10 2.5h1.395c.408 0 .612 0 .803-.046.17-.04.333-.108.482-.2.168-.102.312-.246.6-.535l7.97-7.969a1.768 1.768 0 0 0-2.5-2.5l-7.97 7.97c-.288.287-.432.432-.535.6-.091.149-.158.311-.2.482-.045.191-.045.395-.045.803v1.395Z",
    stroke: "#98A2B3",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$2;

function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgMore = function SvgMore(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$2({
    width: 4,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React$1.createElement("path", {
    d: "M2 8.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM2 3a.833.833 0 1 0 0-1.667A.833.833 0 0 0 2 3ZM2 14.667A.833.833 0 1 0 2 13a.833.833 0 0 0 0 1.667Z",
    stroke: "#98A2B3",
    strokeWidth: 1.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$1, _path2, _path3;

function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgProjectModal = function SvgProjectModal(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends$1({
    width: 56,
    height: 56,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React$1.createElement("path", {
    d: "M4 28C4 14.745 14.745 4 28 4s24 10.745 24 24-10.745 24-24 24S4 41.255 4 28Z",
    fill: "#F4EBFF"
  })), _path2 || (_path2 = /*#__PURE__*/React$1.createElement("path", {
    d: "M30 18.27v4.13c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M32 29h-8m8 4h-8m2-8h-2m6-7h-5.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C20 20.28 20 21.12 20 22.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C22.28 38 23.12 38 24.8 38h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C36 35.72 36 34.88 36 33.2V24l-6-6Z",
    stroke: "#7F56D9",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3 || (_path3 = /*#__PURE__*/React$1.createElement("path", {
    d: "M28 48C16.954 48 8 39.046 8 28H0c0 15.464 12.536 28 28 28v-8Zm20-20c0 11.046-8.954 20-20 20v8c15.464 0 28-12.536 28-28h-8ZM28 8c11.046 0 20 8.954 20 20h8C56 12.536 43.464 0 28 0v8Zm0-8C12.536 0 0 12.536 0 28h8C8 16.954 16.954 8 28 8V0Z",
    fill: "#F9F5FF"
  })));
};

var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFolder = function SvgFolder(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends({
    width: 22,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React$1.createElement("path", {
    d: "m12 5-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C9.1 1 8.74 1 8.022 1H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1 2.52 1 3.08 1 4.2V5m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 7.28 21 8.12 21 9.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 19 17.88 19 16.2 19H5.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C1 16.72 1 15.88 1 14.2V5Z",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/**
 * Main
 */

declare namespace icons {
  export {
    SvgLogo as logo,
    SvgBot as bot,
    SvgGoogle as google,
    SvgConversation as conversation,
    SvgProject as project,
    SvgStatistics as statistics,
    SvgFavorite as favorite,
    SvgClose as close,
    SvgArrowUp as arrowUp,
    SvgArrowDown as arrowDown,
    SvgArrowRightSmall as arrowRightSmall,
    SvgTrash as trash,
    SvgPencil as pencil,
    SvgSortDescend as sortDescend,
    SvgSortAscend as sortAscend,
    SvgPrev as prev,
    SvgNext as next,
    SvgCalendar as calendar,
    SvgCalendarLeft as calendarLeft,
    SvgCalendarRight as calendarRight,
    SvgTagClose as tagClose,
    SvgInputError as inputError,
    SvgSearch as search,
    SvgQuestion as question,
    SvgCheck as check,
    SvgDropdown as dropdown,
    SvgEmail as email,
    SvgBell as bell,
    SvgContact as contact,
    SvgModify as modify,
    SvgMore as more,
    SvgProjectModal as projectModal,
    SvgFolder as folder,
  };
}

declare type IconType = keyof typeof icons;
declare const iconTypes: IconType[];
declare type IconProps = {
    /** 사용 할 아이콘 타입 */
    icon: IconType;
    /** 아이콘 색상 */
    color?: string;
    /** 아이콘 크기 */
    size?: string | number;
    /** 아이콘 rotate 값 */
    rotate?: string;
    className?: string;
    onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};
/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
declare const Icon: {
    ({ icon, color, size, className, rotate, onClick }: IconProps): _emotion_react_jsx_runtime.JSX.Element;
    defaultProps: {
        rotate: string;
    };
};

declare type FlexDirectionProps = {
    children: React.ReactNode;
    /** 아이템과 아이템에 간격을 설정합니다. */
    gap?: number | string;
    width?: number | string;
    justifyContent?: "center" | "flex-end" | "flex-start" | "end" | "space-between" | "space-around";
    alignItems?: string;
    className?: string;
};
/** 요소들의 flex 방향을 설정한다 */
declare function FlexDirection({ children }: FlexDirectionProps): _emotion_react_jsx_runtime.JSX.Element;
declare namespace FlexDirection {
    var defaultProps: {
        gap: string;
        width: string;
    };
    var Row: ({ children, gap, width, justifyContent, alignItems, className, }: FlexDirectionProps) => _emotion_react_jsx_runtime.JSX.Element;
    var Column: ({ children, gap, width, justifyContent, alignItems, className, }: FlexDirectionProps) => _emotion_react_jsx_runtime.JSX.Element;
}

declare type Theme = "light" | "dark" | "default";
declare function useTheme(): {
    theme: Theme;
    isDarkTheme: boolean;
    setTheme(theme: Theme): void;
    toggle(): void;
};

declare type WiseProviderProps = {
    children: React.ReactNode;
};
declare function WiseProvider({ children }: WiseProviderProps): JSX.Element;

declare type UseConfirmProps = {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};
declare function useConfirm({ message, onConfirm, onCancel }: UseConfirmProps): (() => void) | undefined;

declare type CopiedValue = string | null;
declare type CopyFn = (text: string) => Promise<boolean>;
declare function useCopyToClipboard(): [CopiedValue, CopyFn];

declare type UseOutSideClickProps = {
    callback: () => void;
};
/**
 * 해당 엘리먼트를 제외한 부분 클릭 체크
 */
declare function UseOutSideClick({ callback }: UseOutSideClickProps): React$1.MutableRefObject<null>[];

export { Button, ColorKey, ColorKeys, ColorPalette, ColorVariables, FlexDirection, FontFamilyKey, FontFamilyType, Icon, icons as IconSvg, Palette, WiseProvider, buildCssVariable, colorPalette, error, fontFamily, fontSize, gray, iconTypes, mediaQuery, palette, primary, success, themes, useConfirm, useCopyToClipboard, UseOutSideClick as useOutSideClick, useTheme, warning };
