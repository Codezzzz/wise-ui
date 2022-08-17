/// <reference types="react" />
import { FontFamilyKey } from "lib/styles/font";
export declare type TextProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label" | "strong" | "a";
    whiteSpace?: "pre" | "nowrap" | "pre-wrap" | "pre-line" | "normal";
    children: React.ReactNode;
    size?: string | number;
    weight?: 350 | 400 | 500 | 600 | 700;
    align?: "left" | "center" | "right";
    className?: string;
    truncate?: boolean;
    clamp?: number;
    color?: string;
    fontFamily?: FontFamilyKey;
    lineHeight?: string | number;
};
declare function Text({ as, whiteSpace, children, size, weight, align, className, truncate, clamp, color, fontFamily, lineHeight, ...rest }: TextProps): import("react").DetailedReactHTMLElement<{
    css: (false | 0 | import("@emotion/react").SerializedStyles | {
        fontSize: string | number;
        color: string;
    } | undefined)[];
    className: string | undefined;
    rest: {};
}, HTMLElement>;
export default Text;
