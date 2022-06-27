import { closeModal } from "./close-modal";
export function backdropClick(event) {
    if (event.currentTarget === event.target) {
        closeModal();
    }
}