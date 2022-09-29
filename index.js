const navEmail = document.querySelector('.navbar-email');
const navMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    navMenu.classList.toggle('inactive');
}