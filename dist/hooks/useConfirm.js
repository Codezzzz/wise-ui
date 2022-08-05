export default function useConfirm(_a) {
    var message = _a.message, onConfirm = _a.onConfirm, onCancel = _a.onCancel;
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    var confirmAction = function () {
        if (window.confirm(message)) {
            onConfirm();
        }
        else {
            onCancel();
        }
    };
    return confirmAction;
}
