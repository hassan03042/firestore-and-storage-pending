import { auth, db, storage, onAuthStateChanged } from "./utility/utility.js";

// console.log(auth);
// console.log(db);
// console.log(storage);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
   window.location.href = '/auth/login/index.html'
  }
});
  