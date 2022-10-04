const navEmail = document.querySelector('.navbar-email');
const navMenu = document.querySelector('.desktop-menu');
const burgerMobileMen = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartNotif = document.querySelector('.navbar-shopping-cart');
const cartAside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMobileMen.addEventListener('click', toogleMobileMenu);
cartNotif.addEventListener('click', toggleCartAside);


function toggleDesktopMenu(){
    const isCartAsideClose = cartAside.classList.contains('inactive');

    if(!isCartAsideClose){
        cartAside.classList.add('inactive');
    }

    navMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isCartAsideClose = cartAside.classList.contains('inactive');

    if(!isCartAsideClose){
        cartAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    cartAside.classList.toggle('inactive');
}