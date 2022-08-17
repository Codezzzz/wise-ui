/// <reference types="react" />
export declare type DialogProps = {
    visible: boolean;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    hideButtons?: boolean;
    cancelable?: boolean;
    cancelText: string;
    confirmText: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    /**
     * modal animation
     */
    transitionType?: "pop" | "fade";
    /**
     * 버튼 방향을 지정한다
     */
    buttonDirection?: "column" | "row";
    modalMainIcon?: React.ReactElement;
};
declare function Dialog({ visible, title, description, children, hideButtons, cancelable, cancelText, confirmText, onCancel, onConfirm, transitionType, buttonDirection, modalMainIcon }: DialogProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace Dialog {
    var defaultProps: {
        cancelText: string;
        confirmText: string;
    };
}
export default Dialog;
