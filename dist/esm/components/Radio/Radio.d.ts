/// <reference types="react" />
declare type RadioSize = "sm" | "md" | "lg";
export declare type RadioProps = {
    /**
     * Setting Radio label
     */
    children: string;
    /**
     * Setting radio size
     */
    size?: RadioSize;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};
declare function Radio({ children, size, checked, onChange, disabled }: RadioProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Radio;
