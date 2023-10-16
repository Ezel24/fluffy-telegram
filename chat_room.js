var firebaseConfig = {
    apiKey: "AIzaSyBJlgkA64Pd35T-jECG4J0z163ukYP6SCQ",
    authDomain: "qalluliput.firebaseapp.com",
    databaseURL: "https://qalluliput-default-rtdb.firebaseio.com",
    projectId: "qalluliput",
    storageBucket: "qalluliput.appspot.com",
    messagingSenderId: "1059793449893",
    appId: "1:1059793449893:web:1e64fc0969cef37e26ee4c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({purpose:"adding room name"});
      localStorage.setItem("room_name",roomname);
      window.location="chat_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick=redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML <=row;
 });});}
 function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("index.html");
      }
