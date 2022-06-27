import { getDatabase, ref, child, get } from "firebase/database";

function getUserDataAllWatched(userId) {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `users/${userId}/watched`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

function getUserDataAllQueue(userId) {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `users/${userId}/queue`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export { getUserDataAllWatched, getUserDataAllQueue }
