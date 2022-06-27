import { WATCHED, QUEUE, imagesBaseUrl, imageNull } from '../utils/constants';
import { userId } from '../service/login';
import { getData } from '../api-fetch/get-film-api';
import { modalFilmContainer } from '../utils/references';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { addMovieToDatabase } from '../service/add-muvie-to-database';
import { getUserDataAllWatched, getUserDataAllQueue } from '../api-fetch/get-from-database';
import { closeBacdropClick } from '../service/close-backdrop-modal';

function modalMarkup(muvieId) {
    getData(muvieId).then(data => {
        let {
            poster_path,
            title,
            overview,
            vote_average,
            vote_count,
            popularity,
            original_title,
        } = data;
        let poster = `${imagesBaseUrl}${poster_path}`;
        let genres = data.genres.map(genre => genre.name).join(', ');

        if (poster_path === null) {
            poster = imageNull;
            genres = "Action";
            vote_average = (Math.random() * 4).toFixed(1);
            vote_count = (Math.random() * 400).toFixed(0);
        }

        let markup = `<div class="backdrop">
            <div class="modal">
                <button type="button" class="close__modal">
                </button>
                <div class="modal__wrapper">
                    <div class="modal__poster">
                        <img class="modal__image" src="${poster}" alt="${title}">
                    </div>
                        <div class="modal__about">
                            <h2 class="modal__title">${title}</h2>
                            <table class="modal__table">
                                <tbody>
                                    <tr>
                                    <td class="modal__key">Vote / Votes</td>
                                    <td class="modal__value"><span class="vote">${vote_average}</span> / ${vote_count}</td>
                                    </tr>
                                    <tr>
                                    <td class="modal__key">Popularity</td>
                                    <td class="modal__value">${popularity}</td>
                                    </tr>
                                    <tr>
                                    <td class="modal__key">Original Title</td>
                                    <td class="modal__value">${original_title}</td>
                                    </tr>
                                    <tr>
                                    <td class="modal__key">Genre</td>
                                    <td class="modal__value">${genres}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3 class="text__title">About</h3>
                            <p class="modal__text">${overview}</p>
                            <div class="modal__buttons">
                                <button class="modal__button watched__btn ${userId ? "" : "visually-hidden"}" type="button" >add to watched</button>
                                <button class="modal__button queue__btn ${userId ? "" : "visually-hidden"}" type="button" >add to queue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        modalFilmContainer.insertAdjacentHTML('beforeend', markup);
        Loading.remove();

        const closeModalBtn = document.querySelector('.close__modal');
        const backdrop = document.querySelector('.backdrop');
        closeBacdropClick(closeModalBtn, backdrop);


        const addToWatchedEl = document.querySelector('.watched__btn');
        addToWatchedEl.addEventListener('click', () => {
            addMovieToDatabase(WATCHED, userId, muvieId, data, addToWatchedEl, addToQueueEl);
        });

        const addToQueueEl = document.querySelector('.queue__btn');
        addToQueueEl.addEventListener('click', () => {
            console.log(userId)
            addMovieToDatabase(QUEUE, userId, muvieId, data, addToWatchedEl, addToQueueEl);
        });
        if (userId) {
            updateModalButtons(muvieId, addToWatchedEl, addToQueueEl);
        }

    });
}

async function updateModalButtons(muvieId, addToWatchedEl, addToQueueEl) {
    const watchedIdArr = await getUserDataAllWatched(userId).then(data => {
        if (!data) {
            return [];
        }
        return Object.keys(data);
    });

    const isWatched = watchedIdArr.includes(muvieId);
    addToWatchedEl.textContent = (isWatched) ? "remove from watched" : "add to watched";
    addToWatchedEl.dataset.action = (isWatched) ? "remove" : "add";

    const queueIdArr = await getUserDataAllQueue(userId).then(data => {
        if (!data) {
            return [];
        }
        return Object.keys(data);
    });

    const isQueue = queueIdArr.includes(muvieId);
    addToQueueEl.textContent = (isQueue) ? "remove from queue" : "add to queue";
    addToQueueEl.dataset.action = (isQueue) ? "remove" : "add";
}

export { modalMarkup, updateModalButtons }