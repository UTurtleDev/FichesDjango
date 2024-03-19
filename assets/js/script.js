const hamburger = document.querySelector("header")
const nav = document.querySelector("nav")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
    console.log("click")
})