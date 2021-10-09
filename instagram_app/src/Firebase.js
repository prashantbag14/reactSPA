import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCqS9gZnS6FyrgHWw0ECCZ71-cq6pCcqrg",
    authDomain: "instagram-clone-994c8.firebaseapp.com",
    databaseURL: "https://instagram-clone-994c8-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-994c8",
    storageBucket: "instagram-clone-994c8.appspot.com",
    messagingSenderId: "488175853230",
    appId: "1:488175853230:web:becec1df69b3d66e3cd73f",
    measurementId: "G-BPZ2S35VZC"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;