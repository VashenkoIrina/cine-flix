import { modalFilmContainer } from "../utils/references";
import { escapePress } from "./escape-close-modal";

export function closeModal() {
    window.removeEventListener('keydown', escapePress);
    document.body.classList.remove('show__modal');
    modalFilmContainer.innerHTML = '';
}