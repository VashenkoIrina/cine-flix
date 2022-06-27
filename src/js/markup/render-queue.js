import { logoutBtn, galleryContainer } from '../utils/references';
import { getUserDataAllQueue } from '../api-fetch/get-from-database';
import { userId } from '../service/init-firebase';
import { changeMoviesArray } from '../markup/movies-array-change';
import { onRenderPagination } from '../markup/gallery-pagination';
import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { PARPAGE } from '../utils/constants'

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { spinnerRef } from '../utils/spinner';

let response;

export async function onRenderLibraryQueue(page) {
    await clearGalleryContainer();

    Loading.hourglass('Loading...', spinnerRef);

    let movies = [];
    const firebaseData = await getUserDataAllQueue(userId);
    if (firebaseData) movies = Object.values(firebaseData);

    const arrayLength = movies.length;

    const totalPages = Math.ceil(arrayLength / PARPAGE);

    response = {
        total_pages: totalPages,
        page: page,
    }

    const begin = (PARPAGE * page) - PARPAGE;
    const end = PARPAGE * page - 1;

    await changeMoviesArray(movies.slice(begin, end));
    await onRenderPagination(response);

    galleryContainer.setAttribute('data-set', 'queue');
}

export async function onRenderNextPageQueue(page) {
    response.page = Number(page);

    await onRenderLibraryQueue(page);
}

