var nav = document.querySelector(".ham-nav")
var header = document.querySelector("header")
nav.addEventListener("click", function(){
    header.classList.toggle("open")
})