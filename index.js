const navEmail = document.querySelector('.navbar-email');
const navMenu = document.querySelector('.desktop-menu');
const burgerMobileMen = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartNotif = document.querySelector('.navbar-shopping-cart');
const cartAside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const infoCardAside = document.querySelector('.product-detail-card');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMobileMen.addEventListener('click', toogleMobileMenu);
cartNotif.addEventListener('click', toggleCartAside);
/*
const infoCardImg = document.querySelector('.card-img');
infoCardImg.addEventListener('click', openInfoCardAside);
*/
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

function openInfoCardAside(){
    infoCardAside.classList.remove('inactive');
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
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imgCard = document.createElement('img');
        imgCard.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const infoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        infoDiv.appendChild(productPrice);
        infoDiv.appendChild(productName);

        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        figure.appendChild(figureImg);

        productInfo.appendChild(infoDiv);
        productInfo.appendChild(figure);

        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);

    }
}
renderProducts(productList);




