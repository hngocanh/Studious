document.getElementById('darkMode').addEventListener("click",function(){

    let a = document.querySelector("#darkMode i");
    let body = document.body;
    body.classList.toggle('dark')
    a.classList.toggle("fa-moon");
    a.classList.toggle("fa-sun")
})