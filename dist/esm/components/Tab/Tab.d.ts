/// <reference types="react" />
export declare type TabsItemProps = {
    path: string;
    text: string;
};
export declare type TabProps = {
    children: React.ReactNode;
    active?: boolean;
    width?: number | string;
    theme?: "base" | "primary_underline" | "primary_base";
    value: number | string;
    onChange?: (id: number | string) => void;
};
declare function Tab({ children, active, width, theme, value, onChange }: TabProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Tab;
