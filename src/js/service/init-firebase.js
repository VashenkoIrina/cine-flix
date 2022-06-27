import { initializeApp } from 'firebase/app';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { logoutBtn } from '../utils/references';
// TODO: Replace the following with your app's Firebase project configuration
import { firebaseConfig } from './firebase-config';
const app = initializeApp(firebaseConfig);

const auth = getAuth();
let userId = '';

//Check logged user

onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = user.providerData[0].uid;
    console.log(userId)
    logoutBtn.classList.remove('visually-hidden');
  } else {
    logoutBtn.classList.add('visually-hidden');
  }
});

export { auth, userId }

