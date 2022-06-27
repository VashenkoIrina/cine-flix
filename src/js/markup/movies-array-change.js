import { genresInfo } from '../utils/genres';
import {
  imagesBaseUrl,
  imageNull,
  noReleaseDate,
  patternReleaseDate,
  noGenres,
} from '../utils/constants.js';
import { renderMovies } from '../markup/gallery-markup';

export async function changeMoviesArray(movies) {
  let posterPath;
  let genres = [];
  let releaseDate;

  const moviesArray = await movies.map(movie => {
    const date = movie.release_date;

    if (date) {
      releaseDate = date.match(patternReleaseDate);
    } else {
      releaseDate = noReleaseDate;
    }

    let genresIds;

    if (movie.genre_ids) {
      genresIds = movie.genre_ids;
      if (genresIds.length > 1) {
        genres = genresIds
          .map(id => genresInfo.find(genre => genre.id === id).name)
          .join(', ');
      } else {
        genres = noGenres;
      }
    } else {
      genres = movie.genres;
      genres = genres.map(genre => genre.name).join(', ');
    }

    const poster = movie.poster_path;
    if (poster === null) {
      posterPath = `${imageNull}`;
    } else {
      posterPath = `${imagesBaseUrl}${poster}`;
    }

    return {
      id: movie.id,
      title: movie.title,
      genres: genres,
      poster_path: posterPath,
      release_date: releaseDate,
    };
  });

  renderMovies(moviesArray);
}
