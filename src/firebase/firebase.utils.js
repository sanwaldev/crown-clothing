import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyDWh_xsTjOe3oC1pP5HqWHXez0xTwQ0PzE",
    authDomain: "crown-db-161cc.firebaseapp.com",
    projectId: "crown-db-161cc",
    storageBucket: "crown-db-161cc.appspot.com",
    messagingSenderId: "583591276036",
    appId: "1:583591276036:web:646b0f25af7e6662dccf51"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;