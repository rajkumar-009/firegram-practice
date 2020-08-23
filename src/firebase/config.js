import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzNkI7ihBOe03eD4wt_pLYk6g5L68aKg0",
  authDomain: "firegram-app-56481.firebaseapp.com",
  databaseURL: "https://firegram-app-56481.firebaseio.com",
  projectId: "firegram-app-56481",
  storageBucket: "firegram-app-56481.appspot.com",
  messagingSenderId: "1020471968993",
  appId: "1:1020471968993:web:a4d8f226b340116b2623a0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// object for storage
const projectStorage = firebase.storage();
// object for firestore
const projectFirestore = firebase.firestore();
// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
