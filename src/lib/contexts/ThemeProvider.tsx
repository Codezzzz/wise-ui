import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import GlobalFontStyle from "../styles/GlobalFont";
import GlobalStyle from "../styles/GlobalStyle";

export type Theme = "light" | "dark" | "default";

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
}

const ThemeContext =
  createContext<{
    theme: Theme;
    isDarkTheme: boolean;
    setTheme(theme: Theme): void;
    toggle(): void;
  } | null>(null);

function checkIsDarkTheme() {
  if (typeof window === "undefined") return false;
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return systemPrefersDark;
}
const useIsomorphicEffect =
  typeof window !== "undefined" ? useEffect : useLayoutEffect;

export function ThemeProvider({
  children,
  initialTheme = "default",
}: ThemeProviderProps) {
  const [theme, setTheme] =
    useState<"light" | "dark" | "default">(initialTheme);
  const [systemIsDark, setSystemIsDark] = useState(() => checkIsDarkTheme());

  useIsomorphicEffect(() => {
    if (theme === "default") return;
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const callback = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    const match = window.matchMedia("(prefers-color-scheme: dark)");

    match.addEventListener("change", callback);

    return () => {
      match.removeEventListener("change", callback);
    };
  }, []);

  const isDarkTheme = useMemo(() => {
    if (theme === "dark") return true;
    if (systemIsDark && theme === "default") return true;
    return false;
  }, [theme, systemIsDark]);

  const toggle = useCallback(() => {
    if (isDarkTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkTheme, toggle }}>
      {children}
      <GlobalStyle />
      <GlobalFontStyle />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return value;
}
