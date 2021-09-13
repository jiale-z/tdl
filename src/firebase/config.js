import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKa7_GIClSwyjbxaqYkmsMtYB9U4ZLdzQ",
    authDomain: "todolist-rnf.firebaseapp.com",
    databaseURL: "https://todolist-rnf-default-rtdb.firebaseio.com",
    projectId: "todolist-rnf",
    storageBucket: "todolist-rnf.appspot.com",
    messagingSenderId: "950403086552",
    appId: "1:950403086552:web:4b2bbadd9347e0a62e3fad",
    measurementId: "G-0X64QY1KM3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };