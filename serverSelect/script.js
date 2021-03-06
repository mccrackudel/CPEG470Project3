if(localStorage.getItem("authVal") == false){
  document.body.innerHTML = "";
  alert("You do not have access go back.");
}


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import * as fb from  "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
//firebase init
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
//dynamic server listings
const app = initializeApp(firebaseConfig);
let db = fb.getDatabase(app)
let titleRef =  fb.ref(db, "/");
var serverList = [];
fb.onValue(titleRef, ss=>{
  for(var item in ss.val()){
    if(item != "users"){
      serverList += item + " ";
    }
  }
  document.getElementById("serverList").innerHTML = serverList;
});
//goto next page
function nextpage(e){
    e.preventDefault();
    if(serverList.includes(document.getElementById("serverVal").value + " ") == false){
      alert("Not a valid Server!!!");
    }
    else if(document.getElementById("serverVal").value == "users" || document.getElementById("serverVal").value == "" ){
      alert("Access Denied.");
    }
    else{
      localStorage.setItem("serverVal", document.getElementById("serverVal").value +"/");
      window.location.href='../serverDisplay/index.html';
    }
}
document.getElementById("submitButton").addEventListener("click", nextpage);
