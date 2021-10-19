function nextpage(e){
    e.preventDefault();
    localStorage.setItem("nameVal", document.getElementById("nameVal").value);
    window.location.href='serverSelect/index.html';
}
document.getElementById("submitButton").addEventListener("click", nextpage);