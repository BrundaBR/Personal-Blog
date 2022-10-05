import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';import 'firebase/auth';
import "firebase/compat/storage";


const firebaseConfig={
apiKey: "AIzaSyCYL24HMH00tTADjruB8P8RRIFwP-04aCY",
  authDomain: "blog-69233.firebaseapp.com",
  projectId: "blog-69233",
  storageBucket: "blog-69233.appspot.com",
  messagingSenderId: "835347766519",
  appId: "1:835347766519:web:b789490db1c26be4ef47f2",
  measurementId: "G-RVKRZDNKDM"

};
const fb = firebase.initializeApp(firebaseConfig);
const store = firebase.storage();
export { store,fb };
