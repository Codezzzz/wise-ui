import {
	ColorKey,
	ColorKeys,
	ColorVariables,
	error,
	gray,
	primary,
	warning,
	success
} from "./colors";

export type Palette = "gray" | "error" | "primary" | "warning" | "success";

type Theme = "light" | "dark";

/**
 * light theme
 */
const palette: Record<Palette, ColorVariables> = {
	gray,
	error,
	primary,
	warning,
	success
};

/**
 * dark theme
 */
const darkPalette: Record<Palette, ColorVariables> = {
	gray,
	error,
	primary,
	warning,
	success
};

const paletteKey = Object.keys(palette) as Palette[];

export const buildCssVariable = (theme: Theme) => {
	const reducePalete = paletteKey.map((item, index) => {
		const colors = theme === "light" ? palette[item] : darkPalette[item];

		return ColorKeys.map(colorKey => {
			return { key: item + colorKey, color: colors[colorKey] };
		});
	});

	type MergeType = { key: string; color: string };

	var merged: MergeType[] = reducePalete.flat(1);

	return merged
		.map(
			(item, index) => `--${item.key.replace(/_/, "-")}: ${item.color};`,
			"\n"
		)
		.join("\n");
};

export const themes = {
	light: buildCssVariable("light"),
	dark: buildCssVariable("dark")
};

const cssVar = (name: string) => `var(--${name.replace(/_/, "-")})`;

const colorPalette = (color: string) => {
	return cssVar(color);
};

export { palette, colorPalette };
