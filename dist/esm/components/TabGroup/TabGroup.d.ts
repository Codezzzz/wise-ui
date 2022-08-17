/// <reference types="react" />
interface TabGroupContextValue {
    groupValue: string | number | null;
    onChangeValue?(value: string | number): void;
}
export interface TabGroupProps extends TabGroupContextValue {
    children: React.ReactNode;
    direction?: "row" | "column";
    gap?: string | number;
}
declare function TabGroup({ onChangeValue, groupValue, children, direction, gap }: TabGroupProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default TabGroup;
export declare function useTabGroup(): TabGroupContextValue;
