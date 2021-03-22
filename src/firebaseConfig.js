import firebase from '@firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuPuh5xsBQGjN9Mq-AgMtSLyz75UVOtWQ",
    authDomain: "reactfiap.firebaseapp.com",
    projectId: "reactfiap",
    storageBucket: "reactfiap.appspot.com",
    messagingSenderId: "998564201183",
    appId: "1:998564201183:web:91651bde9d7bd21ce49f6a",
    measurementId: "G-Z0D46BC5D3"
}

firebase.initializeApp(firebaseConfig)
export default firebase