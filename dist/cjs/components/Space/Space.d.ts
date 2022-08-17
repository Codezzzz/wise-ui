/// <reference types="react" />
declare type Type = "right" | "left" | "top" | "bottom" | "top_bottom" | "left_right";
export declare type SpaceProps = {
    type: Type;
    gap: string | number;
    children?: React.ReactNode;
};
declare function Space({ type, gap, children }: SpaceProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Space;
