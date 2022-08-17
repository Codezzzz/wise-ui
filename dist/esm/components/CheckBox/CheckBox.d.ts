/// <reference types="react" />
export declare type CheckBoxProps = {
    backgroundColor?: string;
    activeBorderColor?: string;
    borderColor?: string;
    strokeColor?: string;
    shadow?: string;
    isShadow?: boolean;
    checked?: boolean;
    children?: React.ReactNode;
    onChange?: () => void;
    disabled?: boolean;
};
declare function CheckBox({ backgroundColor, activeBorderColor, borderColor, strokeColor, shadow, isShadow, checked, children, onChange, disabled }: CheckBoxProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default CheckBox;
