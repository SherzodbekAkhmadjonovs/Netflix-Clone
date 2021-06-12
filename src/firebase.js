import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAU8DjQgJb8aVyTG0DVItyGZzzs_ZnkB_w",
    authDomain: "netflix-clone-80d21.firebaseapp.com",
    projectId: "netflix-clone-80d21",
    storageBucket: "netflix-clone-80d21.appspot.com",
    messagingSenderId: "185334280032",
    appId: "1:185334280032:web:01eb1b53c44ea1bc357805",
    measurementId: "G-FXJT7QWVQT"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  export default firebase;
  export {provider, auth}