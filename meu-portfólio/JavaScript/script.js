const menuUl = document.getElementById("menuUl")
const menuBt = document.getElementById("menuHamburger")

menuBt.addEventListener('click', toggleMenu)

function toggleMenu() {
    const isActive = menuBt.classList.contains('activate')
    const isActiveUl = menuUl.classList.contains('activateUl')

    menuBt.classList.toggle('activate', !isActive)
    menuUl.classList.toggle('activateUl', !isActiveUl)

    menuUl.className = isActive && isActiveUl ? '' : 'activateUl'
}










// const menuUl = document.getElementById("menuUl")
// const menuBt = document.getElementById("menuHamburger")

// menuBt.addEventListener('click', toggleMenu)

// function toggleMenu() {
//     const isActive = menuBt.classList.contains('activate')

//     menuBt.classList.toggle('activate', !isActive)

//     menuUl.style.display = isActive ? 'none' : 'block'
// }








// const menuUl = document.getElementById("menuUl")
// const menuBt = document.getElementById("menuHamburger")
// const closeBt = document.getElementById("closeButton")
// const menuLines = document.querySelectorAll('.hamburgerLine')

// menuBt.addEventListener('click', toOpenMenu)

// // To open menu button
// function toOpenMenu() {
//     menuUl.style.display = "block"
//     // menuBt.style.display = "none"
//     // closeBt.style.display = "block"
// }

// // To close menu button
// function toCloseMenu() {
//     menuUl.style.display = "none"
//     // menuBt.style.display = "block"
//     // closeBt.style.display = "none"
// }

// document.addEventListener('click', function (event) {
//     if (event.target != menuBt && event.target != menuUl.contains /*&& menuBt.style.display === "none"*/) {
//         toCloseMenu()
//     }
// })

