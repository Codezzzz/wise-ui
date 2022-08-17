/// <reference types="react" />
import { IconType } from "../Icon/Icon";
export declare type DropDownProps = {
    children: React.ReactNode;
    overlay: React.ReactNode;
    position?: "left" | "right";
};
declare function DropDown({ children, overlay, position }: DropDownProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace DropDown {
    var Item: ({ text, active, onClick, icon, commend }: DropDownItemProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    var Header: ({ avatar, name, email }: DropDownHeaderProps) => import("@emotion/react/jsx-runtime").JSX.Element;
}
export declare type DropDownHeaderProps = {
    avatar?: string;
    name: string;
    email: string;
};
export declare type DropDownItemProps = {
    onClick?: () => void;
    text: React.ReactNode;
    active?: boolean;
    icon: IconType;
    commend?: string;
};
export default DropDown;
