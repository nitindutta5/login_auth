import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBIq7n0WEAinQdOHfTl4JDVZXWwnpXmFsQ",
    authDomain: "login-f7f23.firebaseapp.com",
    projectId: "login-f7f23",
    storageBucket: "login-f7f23.appspot.com",
    messagingSenderId: "644372565900",
    appId: "1:644372565900:web:cdf0711959204bbbbc50a9",
    measurementId: "G-JFLWH1HN2Z"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire
