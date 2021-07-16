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
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class'btn btn-warning' id=" + firebase_message_id + " value = " + like + " onclick='updatelike('this.id')'>";
span_width_tag = "<span class='glyphicon glyhicon-thumbs-up'> like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_width_tag;
document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();
//get data ends
function updatelike(message_id)
{
console.log("clicked on like button:" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});
}
//updatelike ends
function lg()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}
//function lg ends
function Send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}