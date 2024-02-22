let carts = document.querySelectorAll('.cartbutton');

let products =[
    {
        name: 'One Piece Nika Don Gear 5',
        tag: 'One Piece',
        price: 25,
        inCart: 0

    },
    {
        name: 'Uta Collection',
        tag: 'One Piece',
        price: 35,
        inCart: 0
    }
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cartnumber span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
  
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartnumber span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartnumber span').textContent =1;
    }

    setItems(product);
    
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.name] == undefined ) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    } else{
         product.inCart = 1;
         cartItems = {
             [product.name]: product
         }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
   // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost =parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(" .products container");
    if(cartItems && productContainer){
        console.log("running");
    }
}

onLoadCartNumbers(); 
displayCart();
