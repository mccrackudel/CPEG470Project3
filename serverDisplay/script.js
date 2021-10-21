if(localStorage.getItem("authVal") == false){
  document.body.innerHTML = "";
  alert("You do not have access go back.");
}

const username = localStorage.getItem("nameVal");
const server = localStorage.getItem("serverVal");
document.getElementById("serverName").innerHTML = "Server: " + server;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import * as fb from  "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJFmJSQEeZXx0qequ9i6_3JEgs66wsDX0",
  authDomain: "chatroom-fed7d.firebaseapp.com",
  databaseURL: "https://chatroom-fed7d-default-rtdb.firebaseio.com",
  projectId: "chatroom-fed7d",
  storageBucket: "chatroom-fed7d.appspot.com",
  messagingSenderId: "880533252950",
  appId: "1:880533252950:web:7f4dacbaf1208220da04f7"
};
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();


document.getElementById("submitButton").addEventListener("click", sendMessage );
//document.getElementById("serverSelect").addEventListener("click", changeServer);
/*
function changeServer(e){
    e.preventDefault();
    server = document.getElementById("serverText").value();
    window.location.reload();
}
*/
function sendMessage(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const messageInput = document.getElementById("textBox");
    const message = messageInput.value;
  
    messageInput.value = "";
  
    document
      .getElementById("chatBox")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    // create db collection and send in the data
    database.ref(server + timestamp).set({
      username,
      message,
    });
  }

 const fetchChat = database.ref(server);

  fetchChat.on("child_added", function (snapshot){
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("chatBox").innerHTML += message;
  });