// Menu amburguesa
const menu = document.querySelector('i');
const links = document.querySelector('nav');

menu.addEventListener("click", () =>{
    links.classList.toggle("mobile-menu")
});