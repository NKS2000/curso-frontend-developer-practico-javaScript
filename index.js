const navEmail = document.querySelector('.navbar-email');
const navMenu = document.querySelector('.desktop-menu');
const burgerMobileMen = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartNotif = document.querySelector('.navbar-shopping-cart');
const cartAside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Laptop',
    price: '320',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'chair',
    price: '56',
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr){
    for(product of arr){
        const productCards = `<div class="product-card">
        <img src= ${product.image} class="product-img">
        <div class="product-info">
          <div>
            <p>${"$"+product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`
    
        cardContainer.innerHTML += productCards;
    }
}
renderProducts(productList);

