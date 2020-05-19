import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6IMu9dUDQ--ZB20SdNQ2xwANBtFiUFYg",
  authDomain: "todo-app-22c86.firebaseapp.com",
  databaseURL: "https://todo-app-22c86.firebaseio.com",
  projectId: "todo-app-22c86",
  storageBucket: "todo-app-22c86.appspot.com",
  messagingSenderId: "707495013523",
  appId: "1:707495013523:web:7c896558c4d6d01bbef166",
});

const db = firebaseApp.firestore();

export default db;
