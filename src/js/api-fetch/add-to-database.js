import { getDatabase, ref, set, push } from "firebase/database";

function writeUserDataWatched(userId, filmId, data = null) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId + '/watched/' + filmId), {
    ...data
  });
}

function writeUserDataQueue(userId, filmId, data = null) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId + '/queue/' + filmId), {
    ...data
  });
}

export { writeUserDataWatched, writeUserDataQueue }