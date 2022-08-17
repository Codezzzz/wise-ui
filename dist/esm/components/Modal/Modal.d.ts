/// <reference types="react" />
export declare type ModalProps = {
    /**
     * Whether the overlay is visible or not.
     */
    visible: boolean;
    /**
     * Sets transitionType for modal appear & disappear.
     * Default is `pop`.
     */
    transitionType?: keyof typeof transitions;
    /**
     * By default, modal width depends on children's width and has 1.5rem padding.
     * To customize, set `className` to this component.
     */
    className?: string;
    /**
     * 모달 width, default 520px / 32.5rem
     */
    width?: number | string;
    children?: React.ReactNode;
};
declare const transitions: {
    readonly fade: {
        readonly from: {
            readonly opacity: 0;
        };
        readonly enter: {
            readonly opacity: 1;
        };
        readonly leave: {
            readonly opacity: 0;
        };
        readonly config: {
            readonly tension: 250;
            readonly friction: 18;
            readonly clamp: true;
        };
    };
    readonly pop: {
        readonly from: {
            readonly opacity: 0;
            readonly transform: "scale(0.9) translateY(100%)";
        };
        readonly enter: {
            readonly opacity: 1;
            readonly transform: "scale(1) translateY(0%)";
        };
        readonly leave: {
            readonly opacity: 0;
            readonly transform: "scale(0.9) translateY(100%)";
        };
        readonly config: {
            readonly tension: 200;
            readonly friction: 20;
        };
    };
};
declare function Modal({ visible, children, transitionType, className, width }: ModalProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Modal;
