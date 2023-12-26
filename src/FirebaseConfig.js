// import { configure } from '@testing-library/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const config = {
  apiKey: process.env.REACT_APP_API_Key , 
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_PROJECT_Id , 
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET , 
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID , 
  measurementId: process.env.REACT_APP_MEASUREMENT_ID ,
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


export default firebase;