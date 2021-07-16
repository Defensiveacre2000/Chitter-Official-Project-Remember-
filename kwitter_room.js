var firebaseConfig = {
apiKey: "AIzaSyDw_cadBfgKi7RLK2zfXd2R3h0Fdf4y-0s",
authDomain: "chitter-32db5.firebaseapp.com",
databaseURL: "https://chitter-32db5-default-rtdb.firebaseio.com",
projectId: "chitter-32db5",
storageBucket: "chitter-32db5.appspot.com",
messagingSenderId: "133133713770",
appId: "1:133133713770:web:87ec9a00f73c202ddf6513"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function AddRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "Adding Room name"
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+ Room_names + " onclick='Redirect(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML = row;
function Redirect(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
function lg()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
});});}
getData();