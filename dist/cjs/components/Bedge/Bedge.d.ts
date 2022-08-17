/// <reference types="react" />
export declare type BedgeProps = {
    theme?: "primary" | "base" | "error";
    backgroundColor?: string;
    color?: string;
    children: React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
};
declare function Bedge({ theme, backgroundColor, color, children, onClick, icon, iconPosition }: BedgeProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Bedge;
