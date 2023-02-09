
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAvQG-e1OoL_NI-Lpeo3vb8fUMWd80-hNI",
      authDomain: "kwitter-ab2dc.firebaseapp.com",
      databaseURL: "https://kwitter-ab2dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-ab2dc",
      storageBucket: "kwitter-ab2dc.appspot.com",
      messagingSenderId: "611033737744",
      appId: "1:611033737744:web:ddf1c7f7f9034a47327895"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("welcome").innerHTML="welcome "+ user_name;
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroom_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+ Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
}