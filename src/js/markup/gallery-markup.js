import { galleryContainer } from '../utils/references';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export async function renderMovies(moviesArray) {
  const renderResult = await moviesArray
    .map(
      moviesArray =>
        `<li class="card" data-id = "${moviesArray.id}">
        <div class="card__container" data-id = "${moviesArray.id}">
          <img src="${moviesArray.poster_path}" alt="${moviesArray.title}" class="card__poster">
        
        </div>
        <div class="card__meta meta">
          <p class="meta__title">${moviesArray.title}</p>
          <ul class="meta__list list">
            <li class="meta__item meta__item--genres">${moviesArray.genres}</li>
            <li class="meta__item">${moviesArray.release_date}</li>
 
          </ul>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', renderResult);
  Loading.remove();
}
