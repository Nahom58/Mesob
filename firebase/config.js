// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHcsujBZnQXYiWy-rdNGUIU_mOEELr_mA",
    authDomain: "mesob-ee343.firebaseapp.com",
    projectId: "mesob-ee343",
    storageBucket: "mesob-ee343.appspot.com",
    messagingSenderId: "85309646392",
    appId: "1:85309646392:web:2f9ff5f3ce8123ee6d28cd",
    measurementId: "G-6MJW66S3TM"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get auth instance
const auth = getAuth(app);

// get firestore instance
const db = getFirestore(app);

// get collection reference
const colRef = collection(db, 'food_menus');

// get collection data
getDocs(colRef).then(
    (snapshot) => {
      let TodaysMenus = []
  
      snapshot.docs.forEach((doc) => {
        TodaysMenus.push({ ...doc.data(), id: doc.id })
      })

    })
    .catch(error => {
      console.log(error.message)
    })
  
 
export { auth, app, db };