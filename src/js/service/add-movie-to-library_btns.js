import { getUserDataAllWatched, getUserDataAllQueue } from "../api-fetch/get-from-database";

const load = key => {
    try {
        if (key === "watched-movie-list") {
            return getUserDataAllWatched('116126857176505822881').then(data => {
                global.watchedCache = Object.values(data);
                return global.watchedCache
            });
        }

        if (key === "queue-movie-list") {
            return getUserDataAllQueue('116126857176505822881').then(data => {
                global.queueCache = Object.values(data);
                return global.queueCache
            });
        }
    } catch (err) {
        console.error('Get state error: ', err);
    }
};
export { load }