const fontSize = {
	D2xl: "4.5rem",
	Dxl: "3.75rem",
	Dlg: "3rem",
	Dmd: "2.25rem",
	Dsm: "1.875rem",
	Dxs: "1.5rem",
	xl: "1.25rem",
	lg: "1.125rem",
	md: "1rem",
	sm: "0.875rem",
	xs: "0.75rem"
} as const;

const fontFamily: FontFamilyType = {
	Bold: "Bold",
	Medium: "Medium",
	SemiBold: "SemiBold",
	Regular: "Regular",
	Normal: "Normal"
};

export type FontFamilyType = {
	Bold: string;
	Medium: string;
	SemiBold: string;
	Regular: string;
	Normal: string;
};

export type FontFamilyKey = keyof FontFamilyType;

export { fontSize, fontFamily };
