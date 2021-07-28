//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCiQs0AMVtRpyUNiQ7gjIzO3eedrWAALTc",
    authDomain: "kwitter-7253e.firebaseapp.com",
    databaseURL: "https://kwitter-7253e-default-rtdb.firebaseio.com",
    projectId: "kwitter-7253e",
    storageBucket: "kwitter-7253e.appspot.com",
    messagingSenderId: "355221583182",
    appId: "1:355221583182:web:5b72b737267b676b0fda1f"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logOut(){
    window.location="index.html";//remove the local storage variable
}


 