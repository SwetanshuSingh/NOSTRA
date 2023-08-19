// Storing shop items data


let basket = JSON.parse(localStorage.getItem("data")) || [];

// declaring varibles and selecting elements

const menu = document.getElementById('menu');
const nav = document.getElementById('nav-bar');
const navCloseBtn = document.getElementById('close');
const bonus = document.getElementById('bonus');
const bonusCloseBtn = document.getElementById('bonusCloseBtn');


// implementing logic for navbar and hamburger menu

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
};

if (navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};

if (bonusCloseBtn) {
    bonusCloseBtn.addEventListener('click', () => {
        bonus.classList.add('hidden');
    })
};


// displaying items on the shop page

try {
    let shopProducts = document.getElementById('shop-products');

    let generateShopProducts = () => {
        return (shopProducts.innerHTML = productsData.map((product) => {
            let {id, name, price, img} = product;
            return `<div class="pro" id="${id}">
        <img src="${img}" alt="shirt">
        <div class="des">
            <span>NOSTRA</span>
            <h5>${name}</h5>
            <div class="star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
            </div>
            <h4>${price}</h4>
        </div>
        <a href="#"><i onclick= "addToBag(${id})" class="ri-shopping-cart-fill"></i></a>
    </div>`
        }).join(''))
    };

    generateShopProducts();
}

catch (e) {
    console.log(e, 'this is not shop page');
}

// logic for adding items in cart

function addToBag(id) {
    let search = basket.find((item) => item.id === id);
    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }
    console.log(basket);
    localStorage.setItem("data",JSON.stringify(basket));
}

let circle = document.querySelector('.ri-checkbox-blank-circle-fill');
let shoppingCart = document.querySelector(".ri-shopping-cart-fill");
shoppingCart.addEventListener('click', () =>{
    circle.style.display = 'inline';
})


