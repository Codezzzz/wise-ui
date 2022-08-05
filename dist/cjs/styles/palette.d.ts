import { ColorVariables } from "./colors";
export declare type Palette = "gray" | "error" | "primary" | "warning" | "success";
declare type Theme = "light" | "dark";
/**
 * light theme
 */
declare const palette: Record<Palette, ColorVariables>;
export declare const buildCssVariable: (theme: Theme) => string;
export declare const themes: {
    light: string;
    dark: string;
};
declare const colorPalette: (color: string) => string;
export { palette, colorPalette };
