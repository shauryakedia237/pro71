import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAA27hKDUu-dppkbnoFSzQELIszXc7tIv4",
  authDomain: "pro-71-8dbcb.firebaseapp.com",
  projectId: "pro-71-8dbcb",
  storageBucket: "pro-71-8dbcb.appspot.com",
  messagingSenderId: "956339555779",
  appId: "1:956339555779:web:866c07bb42a4ad06bd8176"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

