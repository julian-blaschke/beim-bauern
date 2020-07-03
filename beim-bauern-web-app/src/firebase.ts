import firebase from "firebase/app";
import "firebase/firestore";
import config from "./firebase.config";

//initialize app
const app = firebase.initializeApp(config);
const firestore = app.firestore();

export { app, firestore };
