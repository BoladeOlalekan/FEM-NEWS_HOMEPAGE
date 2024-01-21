const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const nav = document.querySelector('nav');

menuOpen.addEventListener('click', () => {
    nav.classList.toggle('open-nav')
})

menuClose.addEventListener('click', () => {
    nav.classList.toggle('open-nav')
})

document.onclick = function(bodyClose){
    if (!menuOpen.contains(bodyClose.target) && !menuClose.contains(bodyClose.target)){
        nav.classList.remove('open-nav')
    }
}