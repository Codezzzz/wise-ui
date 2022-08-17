/// <reference types="react" />
export declare type DividerProps = {
    children?: React.ReactNode;
    /** divider height / 기본 1px */
    height?: number | string;
};
declare function Divider({ children, height }: DividerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Divider;
