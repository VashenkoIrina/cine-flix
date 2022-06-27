import { writeUserDataWatched, writeUserDataQueue } from '../api-fetch/add-to-database';
import { WATCHED, QUEUE } from '../utils/constants';
import { updateModalButtons } from '../markup/modal-markup'


function addMovieToDatabase(key, userId, muvieId, data, watchedBtn, queueBtn) {
  if (key === WATCHED) {
    if (watchedBtn.dataset.action === 'add') {
      writeUserDataWatched(userId, muvieId, data);
      writeUserDataQueue(userId, muvieId);
    }
    if (watchedBtn.dataset.action === 'remove') {
      writeUserDataWatched(userId, muvieId);
    }
  }
  else if (key === QUEUE) {
    if (queueBtn.dataset.action === 'add') {
      writeUserDataQueue(userId, muvieId, data);
      writeUserDataWatched(userId, muvieId);
    }
    if (queueBtn.dataset.action === 'remove') {
      writeUserDataQueue(userId, muvieId);
    }
  }
  updateModalButtons(muvieId, watchedBtn, queueBtn);
}

export {addMovieToDatabase}