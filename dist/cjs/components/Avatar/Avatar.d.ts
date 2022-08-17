export declare type AvatarProps = {
    size?: AvatarSizeType;
    /** 아바타 이미지 */
    url: string;
    /** on 아이콘 visible 여부 */
    on?: boolean;
    /** Avatar group에 사용 되는 uniqe 값 */
    idx?: number;
};
export declare type AvatarSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "xl2";
declare function Avatar({ size, url, on, idx }: AvatarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Avatar;
export declare const avaterSizes: {
    xs: import("@emotion/react").SerializedStyles;
    sm: import("@emotion/react").SerializedStyles;
    md: import("@emotion/react").SerializedStyles;
    lg: import("@emotion/react").SerializedStyles;
    xl: import("@emotion/react").SerializedStyles;
    xl2: import("@emotion/react").SerializedStyles;
};
