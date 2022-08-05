import { FontFamilyKey } from "../../styles";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "type"> {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: "primary" | "error" | "base";
    /** 버튼의 크기를 설정합니다 */
    size: "small" | "medium" | "big";
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    iconGap?: string | number;
    iconPosition?: "left" | "right";
    /** custom bg */
    backgroundColor?: string;
    /** custom color */
    color?: string;
    /** custom border color */
    borderColor?: string;
    height?: string | number;
    fontFamily?: FontFamilyKey;
}
declare function Button({ children, onClick, theme, size, disabled, width, type, icon, iconGap, iconPosition, backgroundColor, color, borderColor, height, fontFamily, ...rest }: ButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace Button {
    var defaultProps: {
        theme: string;
        size: string;
    };
}
export default Button;
