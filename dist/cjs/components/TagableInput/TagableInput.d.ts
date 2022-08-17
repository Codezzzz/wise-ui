declare type TagType = {
    text: string;
    id: number;
};
export declare type TagableInputProps = {
    width?: number | string;
    height?: number | string;
    disabled?: boolean;
    message?: string;
    tags?: TagType[];
    placeholder?: string;
};
declare function TagableInput({ width, height, message, disabled, tags, placeholder }: TagableInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default TagableInput;
