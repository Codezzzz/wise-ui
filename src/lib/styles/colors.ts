export type ColorVariables = {
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

export type ColorKey = keyof ColorVariables;

export type ColorPalette = Record<ColorKey, string>;

const gray: ColorPalette = {
	"25": "#FCFCFD",
	"50": "#F9FAFB",
	"100": "#F2F4F7",
	"200": "#EAECF0",
	"300": "#D0D5DD",
	"400": "#98A2B3",
	"500": "#667085",
	"600": "#475467",
	"700": "#344054",
	"800": "#1D2939",
	"900": "#101828"
};

const error: ColorPalette = {
	"25": "#FFFBFA",
	"50": "#FEF3F2",
	"100": "#FEE4E2",
	"200": "#FECDCA",
	"300": "#FDA29B",
	"400": "#F97066",
	"500": "#F04438",
	"600": "#D92D20",
	"700": "#B42318",
	"800": "#912018",
	"900": "#7A271A"
};

const primary: ColorPalette = {
	"25": "#FCFAFF",
	"50": "#F9F5FF",
	"100": "#F4EBFF",
	"200": "#E9D7FE",
	"300": "#D6BBFB",
	"400": "#B692F6",
	"500": "#9E77ED",
	"600": "#7F56D9",
	"700": "#6941C6",
	"800": "#53389E",
	"900": "#42307D"
};

const warning: ColorPalette = {
	"25": "#FFFCF5",
	"50": "#FFFAEB",
	"100": "#FEF0C7",
	"200": "#FEDF89",
	"300": "#FEC84B",
	"400": "#FDB022",
	"500": "#F79009",
	"600": "#DC6803",
	"700": "#B54708",
	"800": "#93370D",
	"900": "#7A2E0E"
};

const success: ColorPalette = {
	"25": "#F6FEF9",
	"50": "#ECFDF3",
	"100": "#D1FADF",
	"200": "#A6F4C5",
	"300": "#6CE9A6",
	"400": "#32D583",
	"500": "#12B76A",
	"600": "#039855",
	"700": "#027A48",
	"800": "#05603A",
	"900": "#054F31"
};

export const ColorKeys = Object.keys(error) as ColorKey[];

export { gray, error, primary, warning, success };
