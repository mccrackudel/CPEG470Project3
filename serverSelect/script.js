
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
document.getElementById("test").addEventListener("click", tester);
function tester(e){
    e.preventDefault();
    //alert(database);
    document.getElementById("serverList").value = "database";

}

function nextpage(e){
    e.preventDefault();
    localStorage.setItem("serverVal", document.getElementById("serverVal").value);
    window.location.href='../serverDisplay/index.html';
}
document.getElementById("submitButton").addEventListener("click", nextpage);