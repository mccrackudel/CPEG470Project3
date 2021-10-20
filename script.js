
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import * as rtdb from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import * as fbauth from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJFmJSQEeZXx0qequ9i6_3JEgs66wsDX0",
    authDomain: "chatroom-fed7d.firebaseapp.com",
    databaseURL: "https://chatroom-fed7d-default-rtdb.firebaseio.com",
    projectId: "chatroom-fed7d",
    storageBucket: "chatroom-fed7d.appspot.com",
    messagingSenderId: "880533252950",
    appId: "1:880533252950:web:7f4dacbaf1208220da04f7"
  };
const app = initializeApp(firebaseConfig);
let db = rtdb.getDatabase(app);
let auth = fbauth.getAuth(app);

let renderUser = function(userObj){
    $("#app").html(JSON.stringify(userObj));
    $("#app").append(`<button type="button" id="logout">Logout</button>`);
    $("#logout").on("click", ()=>{
      fbauth.signOut(auth);
    })
  }
  
  fbauth.onAuthStateChanged(auth, user => {
        if (!!user){
          $("#login").hide();
          $("#app").show();
          renderUser(user);
          let flagRef = rtdb.ref(db, "/flag");
          console.log("here");
  rtdb.onValue(flagRef, ss=>{
    alert(ss.val());
  })
        } else {
          $("#login").show();
          $("#app").html("");
        }
  });

  let rulesRef = rtdb.ref(db, "/rules");
  rtdb.onValue(rulesRef, ss=>{
    let rules = ss.val();
    if (!!rules){
      $("#rules").html(rules);
    }
  })
  
  
  $("#register").on("click", ()=>{
    let email = $("#regemail").val();
    let p1 = $("#regpass1").val();
    let p2 = $("#regpass2").val();
    if (p1 != p2){
      alert("Passwords don't match");
      return;
    }
    fbauth.createUserWithEmailAndPassword(auth, email, p1).then(somedata=>{
      let uid = somedata.user.uid;
      let userRoleRef = rtdb.ref(db, `/users/${uid}/roles/user`);
      rtdb.set(userRoleRef, true);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  });
  
  
  $("#login").on("click", ()=>{
    let email = $("#logemail").val();
    let pwd = $("#logpass").val();
    fbauth.signInWithEmailAndPassword(auth, email, pwd).then(
      somedata=>{
        console.log(somedata);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });

//auth end
function nextpage(e){
    e.preventDefault();
    localStorage.setItem("nameVal", document.getElementById("nameVal").value);
    window.location.href='serverSelect/index.html';
}
document.getElementById("submitButton").addEventListener("click", nextpage);