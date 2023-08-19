let cartData = JSON.parse(localStorage.getItem("data")) || [];
let cart = document.querySelector('#cart');


let generateCartItems = () => {
    if (cartData.length !== 0) {
        return cart.innerHTML = cartData.map((x) => {
            let { id, item } = x
            let search = productsData.find((y) => y.id === id) || [];

            return `
            <hr>
            <div class="cart-product">
            <i onclick="removeItem(${id})" class="ri-close-circle-line"></i>
            <div class="product-img">
                <img src="${search.img}" alt="item">
            </div>
            <div class="product-details">
                <h4>${search.name}</h4>
                <h5>Rs.450</h5>
                <div class="change-qty">
                    <i onclick="decrement(${id})" class="ri-subtract-line"></i>
                    <p id=${id}>${item}</p>
                    <i onclick="increment(${id})" class="ri-add-line"></i>
                </div>
            </div>
        </div>`
        }).join('')
    }
    else {

    }
};

console.log(cartData);

let bagAmount = document.querySelector("#bag-amount");
let totalAmount = document.querySelector('#total-amount');

generateCartItems();


let increment = (id) => {
    let search = cartData.find((x) => x.id === id);
    if (search.id === id) {
        search.item += 1;
    }



    //console.log(cartData);
    update(id)
};
let decrement = (id) => {
    let search = cartData.find((x) => x.id === id);
    if (search.item === 0) return;
    if (search.id === id) {
        search.item -= 1;
    }



    //console.log(cartData);
    update(id)
};
let update = (id) => {
    let search = cartData.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    let totalItems = cartTotal();

    if (totalItems === 0) {
        bagAmount.innerText = 0;
        totalAmount.innerText = 0;
    }
    else {
        bagAmount.innerText = totalItems * 450;
        totalAmount.innerText = (totalItems * 450) + 50 + 100;
    }

};

let cartTotal = () => {
    let itemTotal = cartData.map((product) => {
        return product.item;
    }).reduce((first, second) => {
        return first + second;
    })
    return itemTotal;
}

let removeItem = (id) => {
    cartData = cartData.filter((x) => x.id !== id);
    generateCartItems();
    let totalItems = cartTotal();

    if (totalItems === 0) {
        bagAmount.innerText = 0;
        totalAmount.innerText = 0;
    }
    else {
        bagAmount.innerText = totalItems * 450;
        totalAmount.innerText = (totalItems * 450) + 50 + 100;
    }
    
    localStorage.setItem("data", JSON.stringify(basket));
}

let totalItems = cartTotal();

    if (totalItems === 0) {
        bagAmount.innerText = 0;
        totalAmount.innerText = 0;
    }
    else {
        bagAmount.innerText = totalItems * 450;
        totalAmount.innerText = (totalItems * 450) + 50 + 100;
    }





