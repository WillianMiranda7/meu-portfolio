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




// Skills scripts

// Variável para manter o controle da habilidade ativa atual
let activeSkill = null;

// Função para alternar a classe 'active' nas habilidades
function toggleSkill(skillId) {
    const skillElement = document.getElementById(skillId);
    
    // Verifique se há uma habilidade ativa atualmente
    if (activeSkill && activeSkill !== skillElement) {
        // Feche a habilidade ativa atual
        activeSkill.classList.remove('active');
    }

    // Alternar a habilidade atual
    skillElement.classList.toggle('active');
    
    // Atualizar a habilidade ativa atual
    activeSkill = skillElement.classList.contains('active') ? skillElement : null;
}

// Adicione event listeners para os elementos de imagem
document.getElementById('photoHtml').addEventListener('click', () => toggleSkill('skillHtml'));
document.getElementById('photoCss').addEventListener('click', () => toggleSkill('skillCss'));
document.getElementById('photoJs').addEventListener('click', () => toggleSkill('skillJs'));
document.getElementById('photoWp').addEventListener('click', () => toggleSkill('skillWp'));






































// Skills scripts

// const htmlPhoto = document.getElementById('photoHtml')
// const txtHtml = document.getElementById('skillHtml')

// htmlPhoto.addEventListener('click', openSkill)

// function openSkill() {
//     const isActiveHtml = txtHtml.classList.contains('txtHtml')
    
//     txtHtml.classList.toggle('txtHtml', !isActiveHtml)
    
//     txtHtml.className = isActiveHtml ? '' : 'txtHtml'
// }