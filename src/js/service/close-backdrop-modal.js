import { closeModal } from "./close-modal";
import { backdropClick } from "./backdrop-modal-close";

export function closeBacdropClick(closeModalBtn, backdrop) {
    closeModalBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', backdropClick);
}