import { closeModal } from "./close-modal";

export function escapePress(event) {
    const ESC_KEY_CODE = 'Escape';
    const escape = event.code === ESC_KEY_CODE;

    if (escape) {
        closeModal();
    }
}