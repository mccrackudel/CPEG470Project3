function nextpage(e){
    e.preventDefault();
    window.location.href='../serverDisplay/index.html';
}
document.getElementById("submitButton").addEventListener("click", nextpage);