/// <reference types="react" />
import { UseFormRegisterReturn } from "react-hook-form";
export declare type InputProps = {
    /** text input 라벨 */
    label?: string;
    placeholder?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconError?: React.ReactNode;
    /** input 창 입력 방지 */
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    /** */
    register?: UseFormRegisterReturn;
    message?: string;
    type?: string;
    hint?: string;
    required?: boolean;
};
declare function Input({ label, placeholder, iconLeft, iconRight, iconError, disabled, width, height, register, message, type, hint, required }: InputProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace Input {
    var defaultProps: {
        placeholder: string;
    };
}
export default Input;
export declare const inputStyle: (message: string | undefined, disabled: boolean) => import("@emotion/react").SerializedStyles;
