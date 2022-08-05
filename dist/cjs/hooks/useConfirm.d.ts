export declare type UseConfirmProps = {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};
export default function useConfirm({ message, onConfirm, onCancel }: UseConfirmProps): (() => void) | undefined;
