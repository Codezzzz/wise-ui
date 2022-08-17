/// <reference types="react" />
export declare type TagProps = {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    closeable?: boolean;
    onClick?: () => void;
};
declare function Tag({ size, children, closeable, onClick }: TagProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Tag;
