import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwtAGgSAR3gzblQlPCctx49T4Mc1inKAM",
  authDomain: "netflix-clone-476da.firebaseapp.com",
  projectId: "netflix-clone-476da",
  storageBucket: "netflix-clone-476da.appspot.com",
  messagingSenderId: "999954542120",
  appId: "1:999954542120:web:e19aed8b80acc6d8a00f1d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;