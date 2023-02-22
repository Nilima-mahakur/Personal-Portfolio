const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY >0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}

const sr = ScrollReveal ({
    distance: '25px',
    duration: 1800,
    reset: true
})
sr.reveal('.home-text', {delay:190, origin:'bottom'})
sr.reveal('.about,.services,.portfolio,.experience,.contact', {delay:190, origin:'bottom'})