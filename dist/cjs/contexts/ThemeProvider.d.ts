/// <reference types="react" />
export declare type Theme = "light" | "dark" | "default";
interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme;
}
export declare function ThemeProvider({ children, initialTheme, }: ThemeProviderProps): JSX.Element;
export declare function useTheme(): {
    theme: Theme;
    isDarkTheme: boolean;
    setTheme(theme: Theme): void;
    toggle(): void;
};
export {};
