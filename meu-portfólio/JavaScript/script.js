const menuUl = document.getElementById("menuUl")
const menuBt = document.getElementById("menuHamburger")
const closeBt = document.getElementById("closeButton")

menuBt.addEventListener('click', toOpenMenu)

// To open menu button
function toOpenMenu() {
    menuUl.style.display = "block"
    menuBt.style.display = "none"
    closeBt.style.display = "block"
}

// To close menu button
function toCloseMenu() {
        menuUl.style.display = "none"
        menuBt.style.display = "block"
        closeBt.style.display = "none"
}

document.addEventListener('click', function (event){
    if (event.target != menuBt && event.target != menuUl.contains && menuBt.style.display === "none"){
        toCloseMenu()
    }
} )