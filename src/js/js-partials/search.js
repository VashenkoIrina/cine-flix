import { inputForm, galleryContainer, arrowBtn, headerError } from '../utils/references';
import MoviesApiService from '../api-fetch/fetch-films';
import { changeMoviesArray } from '../markup/movies-array-change';
import { onRenderPagination } from '../markup/gallery-pagination';

import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { loadTrandingPage } from '../js-partials/tranding-gallery';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

inputForm.addEventListener('submit', searchSubmit);

const moviesApiService = new MoviesApiService();

async function searchSubmit(event) {
    event.preventDefault();


    const value = event.target.querySelector('.header__input').value.trim();
    moviesApiService.resetPage();


    if (!value) {
        loadTrandingPage();
        Notiflix.Notify.warning('Write the name of the movie');
    } else {
        moviesApiService.query = value;
        moviesApiService.search();
        await onRender();
    }
}

async function errorS(response) {
    if (!response.total_results) {
        headerError.textContent =
            'Search result not successful. Enter the correct movie name and';
        arrowBtn.classList.add('visually-hidden');
    }


    const movies = response.results;
    await changeMoviesArray(movies);
    await onRenderPagination(response);
}

export async function loadSelectedSearchPage(page) {

    moviesApiService.setPage(page);

    await onRender();
}

async function onRender() {
    await clearGalleryContainer();

    arrowBtn.classList.remove('visually-hidden');
    const response = await moviesApiService.fetchMovies();

    galleryContainer.setAttribute('data-set', 'search');
    await errorS(response);

}


