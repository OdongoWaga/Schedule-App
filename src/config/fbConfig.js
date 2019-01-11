import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBR_XPq5gFLsjSMjRXoaSHzP2kBHGn26GA",
    authDomain: "schedule-cec53.firebaseapp.com",
    databaseURL: "https://schedule-cec53.firebaseio.com",
    projectId: "schedule-cec53",
    storageBucket: "schedule-cec53.appspot.com",
    messagingSenderId: "802768383226"
  };

  firebase.initializeApp(config); 
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;