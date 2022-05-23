var burger = document.querySelector("[data-burger]")
var mobile = document.querySelector("[data-mobile]")
var links = document.querySelectorAll("[data-mobile] li")

console.log(links)
burger.addEventListener("click", ()=>{
    burger.classList.toggle("toggle-burger-active")
    mobile.classList.toggle("mobile-nav-active")
})
function toggle() {
    burger.classList.toggle("toggle-burger-active")
    mobile.classList.toggle("mobile-nav-active")
}