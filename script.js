function nextpage(e){
    e.preventDefault();
    window.location.href='serverSelect/index.html';
}
document.getElementById("submitButton").addEventListener("click", nextpage);