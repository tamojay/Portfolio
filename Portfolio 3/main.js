// Only for hamburger menu

const mainMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// For page loader

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
