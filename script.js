const desserts = JSON.parse(`[
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]`);

const products = document.querySelector(".products");
const media = window.matchMedia("(max-width: 800px)")
desserts.forEach((dessert, index) => {
    products.innerHTML += `
        <div class="product">
          <div class="image">
            <img class="img-border${index}" src="${media.matches ? dessert.image.mobile : dessert.image.desktop}" alt="${dessert.category}">
            <div class="add">
              <div class="to-cart js-to-cart js-dessert${index}">
                <img src="./assets/images/icon-add-to-cart.svg" alt="add-to-cart">
                Add to Cart
              </div>
              <div class="change js-change">
                <div class="quantity dec js-dec${index}">
                  <img src="./assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity">
                </div>
                <span class="current-quantity">1</span>
                <div class="quantity inc js-inc${index}">
                  <img src="./assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity">
                </div>
              </div>
            </div>
          </div>
          <div class="info">
            <p class="category">${dessert.category}</p>
            <p class="name">${dessert.name}</p>
            <p class="price">${"$" + dessert.price}</p>
          </div>
        </div>
        `;
});

const addToCart = document.querySelectorAll(".js-to-cart");
const empty = document.querySelector(".empty-car-text");
const items = document.querySelector(".items");
const order = document.querySelector(".order");

const change = document.querySelectorAll(".js-change");
const finalItems = document.querySelector(".final-items");
const finalTotalAmount = document.querySelector(".final-total-amount");

addToCart.forEach((_, i) => {
    addToCart[i].addEventListener("click", () => {
        desserts.forEach((dessert, index) => {
            if (addToCart[i].classList.contains(`js-dessert${index}`)) {
                items.innerHTML += `
                    <div class="item js-item${index}">
                        <div class="con">
                            <p class="item-name">${dessert.name}</p>
                            <p class="total"><span class="item-times"><span class="item-number-quantity js-q${index}">1</span>x</span> <span class="price-one">@ $${dessert.price}</span> <span class="price-all">$<span class="price-total js-t${index}">${dessert.price}</span></span></p>
                        </div>
                        <div class="delete js-delete js-delete${index}">
                            <img src="./assets/images/icon-remove-item.svg" alt="icon-remove-item">
                        </div>
                    </div>
                `;

                finalItems.innerHTML += `
                    <div class="final-item js-final-item${index}">
                        <div class="final-content">
                        <img src="${dessert.image.thumbnail}" alt="${dessert.name}">
                        <div class="final-details">
                            <p class="final-name">${dessert.name}</p>
                            <p><span class="final-q"><span class="final-quantity final-quantity${index}">${document.querySelector(`.js-q${index}`).innerHTML}</span>x</span> <span class="final-p">@ $<span class="final-price">${dessert.price}</span></span></p>
                        </div>
                        </div>
                        <p class="final-total-price final-total-price${index}">$${document.querySelector(`.js-t${index}`).innerHTML}</p>
                    </div>
                `;

                cartTotal();
                cartQuantity();
                deleteButtonClick();
                confirmOrder();
                newOrder();

                finalTotalAmount.innerHTML = document.querySelector(".dollars").innerHTML;

                addToCart[i].style.display = "none";
                change[i].style.display = "flex";
                document.querySelector(`.img-border${i}`).style.border = "2px solid hsl(14, 86%, 42%)";

                empty.style.display = "none";
                items.style.display = "block";
                order.style.display = "block";
            }
        })
    })
});

function cartTotal() {
    const total = document.querySelector(".dollars");
    const priceTotal = document.querySelectorAll(".price-total");

    let amount = 0;

    priceTotal.forEach(price => {
        amount += parseFloat(price.innerHTML);
    });

    total.innerHTML = "$" + amount;
}

function cartQuantity() {
    const cartQ = document.querySelector(".js-cart-quantity");
    const itemsQ = document.querySelectorAll(".item-number-quantity");

    let quantity = 0;

    itemsQ.forEach(item => {
        quantity += parseInt(item.innerHTML);
    });

    cartQ.innerHTML = quantity;

    if (quantity === 0) {
        empty.style.display = "flex";
        items.style.display = "none";
        order.style.display = "none";
    }
}

const increase = document.querySelectorAll(".inc");
const decrease = document.querySelectorAll(".dec");

const currentQuantity = document.querySelectorAll(".current-quantity");

increase.forEach((_, i) => {
    increase[i].addEventListener("click", () => {
        desserts.forEach((dessert, index) => {
            if (increase[i].classList.contains(`js-inc${index}`)) {
                currentQuantity[i].innerHTML = parseInt(currentQuantity[i].innerHTML) + 1;

                document.querySelector(`.js-q${i}`).innerHTML = currentQuantity[i].innerHTML;

                document.querySelector(`.final-quantity${i}`).innerHTML = document.querySelector(`.js-q${i}`).innerHTML;

                const tPrice = document.querySelector(`.js-t${i}`).innerHTML;
                document.querySelector(`.js-t${i}`).innerHTML = parseFloat(tPrice) + dessert.price;

                document.querySelector(`.final-total-price${i}`).innerHTML = "$" + document.querySelector(`.js-t${i}`).innerHTML;
            }

            cartTotal();
            cartQuantity();

            finalTotalAmount.innerHTML = document.querySelector(".dollars").innerHTML;
        });
    });
});

decrease.forEach((_, i) => {
    decrease[i].addEventListener("click", () => {
        desserts.forEach((dessert, index) => {
            if (decrease[i].classList.contains(`js-dec${index}`)) {
                if (parseInt(currentQuantity[i].innerHTML) === 1) {
                    change[i].style.display = "none";
                    addToCart[i].style.display = "flex";

                    document.querySelector(`.js-item${i}`).remove();
                    document.querySelector(`.img-border${i}`).style.border = "none";

                    document.querySelector(`.js-final-item${i}`).remove();
                } else {
                    currentQuantity[i].innerHTML = parseInt(currentQuantity[i].innerHTML) - 1;

                    document.querySelector(`.js-q${i}`).innerHTML = currentQuantity[i].innerHTML;

                    document.querySelector(`.final-quantity${i}`).innerHTML = document.querySelector(`.js-q${i}`).innerHTML;

                    const tPrice = document.querySelector(`.js-t${i}`).innerHTML;
                    document.querySelector(`.js-t${i}`).innerHTML = parseFloat(tPrice) - dessert.price;

                    document.querySelector(`.final-total-price${i}`).innerHTML = "$" + document.querySelector(`.js-t${i}`).innerHTML;
                }
            }

            cartTotal();
            cartQuantity();

            finalTotalAmount.innerHTML = document.querySelector(".dollars").innerHTML;
        });
    });
});

function deleteButtonClick() {
    const deleteButton = document.querySelectorAll(".js-delete");

    deleteButton.forEach((_, i) => {
        deleteButton[i].addEventListener("click", () => {
            desserts.forEach((_, index) => {
                if (deleteButton[i].classList.contains(`js-delete${index}`)) {
                    change[index].style.display = "none";
                    addToCart[index].style.display = "flex";

                    currentQuantity[index].innerHTML = 1;

                    document.querySelector(`.js-item${index}`).remove();
                    document.querySelector(`.img-border${index}`).style.border = "none";

                    document.querySelector(`.js-final-item${index}`).remove();
                }

                cartTotal();
                cartQuantity();

                finalTotalAmount.innerHTML = document.querySelector(".dollars").innerHTML;
            });
        });
    });
}

const confirmButton = document.querySelector(".js-confirm");
const confirmed = document.querySelector(".confirmed");

function confirmOrder() {
    confirmButton.addEventListener("click", () => {
        if (parseInt(document.querySelector(".js-cart-quantity").innerHTML) !== 0) {
            confirmed.style.display = "flex";
        }
    });
}

function newOrder() {
    const newOrderButton = document.querySelector(".js-new");
    const item = document.querySelectorAll(".item");
    const finalItem = document.querySelectorAll(".final-item");

    newOrderButton.addEventListener("click", () => {
        desserts.forEach((dessert, index) => {
            change[index].style.display = "none";
            addToCart[index].style.display = "flex";

            document.querySelector(`.img-border${index}`).style.border = "none";
        });

        item.forEach(it => {
            console.log(it);
            it.remove();
        });

        finalItem.forEach(it => {
            it.remove();
        });

        cartTotal();
        cartQuantity();

        empty.style.display = "flex";
        items.style.display = "none";
        order.style.display = "none";

        confirmed.style.display = "none";
    });
}