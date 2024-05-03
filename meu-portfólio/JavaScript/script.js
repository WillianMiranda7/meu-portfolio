// To open menu button
function toOpenMenu() {
    let menuUl = document.getElementById("menuUl")
    let menuBt = document.getElementById("menuHamburger")
    let closeBt = document.getElementById("closeButton")
    
    menuUl.style.display = "block"
    menuBt.style.display = "none"
    closeBt.style.display = "block"
}

// To close menu button
function toCloseMenu() {
    let menuUl = document.getElementById("menuUl")
    let menuBt = document.getElementById("menuHamburger")
    let closeBt = document.getElementById("closeButton")
    
    menuUl.style.display = "none"
    menuBt.style.display = "block"
    closeBt.style.display = "none"
}