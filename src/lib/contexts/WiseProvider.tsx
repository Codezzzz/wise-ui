import { ThemeProvider } from "./ThemeProvider";

export type WiseProviderProps = {
  children: React.ReactNode;
};

function WiseProvider({ children }: WiseProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default WiseProvider;
