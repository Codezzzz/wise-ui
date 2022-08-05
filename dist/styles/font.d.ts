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
export declare type FontFamilyType = {
    Bold: string;
    Medium: string;
    SemiBold: string;
    Regular: string;
    Normal: string;
};
export declare type FontFamilyKey = keyof FontFamilyType;
export { fontSize, fontFamily };
