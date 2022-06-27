import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { spinnerRef } from '../utils/spinner';
import { modalMarkup } from '../markup/modal-markup';
import { escapePress } from '../service/escape-close-modal';

export function openModal(e) {
    e.preventDefault();
    try {
        let cardId = e.target.closest('.card').dataset.id;
        document.body.classList.add('show__modal');
        Loading.hourglass('Loading...', spinnerRef);
        modalMarkup(cardId);
        window.addEventListener('keydown', escapePress);
    }
    catch (error) {
        return;
    }
}