

const navmenu = document.getElementsByClassName("nav__menu")[0]
const bar = document.getElementsByClassName("nav__item")[0]

navmenu.addEventListener("click", () =>{
       bar.classList.toggle("active")
     })