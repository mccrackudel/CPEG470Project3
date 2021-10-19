function nextpage(e){
    e.preventDefault();
    localStorage.setItem("serverVal", document.getElementById("serverVal").value);
    window.location.href='../serverDisplay/index.html';
}
document.getElementById("submitButton").addEventListener("click", nextpage);