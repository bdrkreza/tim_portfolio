const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyATUY37XDwP_MeaMS0TWdNyjN3ZGj4SjLA",
  authDomain: "rezaul-karim.firebaseapp.com",
  projectId: "rezaul-karim",
  storageBucket: "rezaul-karim.appspot.com",
  messagingSenderId: "819159883125",
  appId: "1:819159883125:web:f12524c35427083377073c",
  measurementId: "G-BRZ56FSQ0P",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("project");
module.exports = User;
