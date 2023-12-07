/*
* JS Computer builder
*
* @author Chema Sánchez <csanchez@barnatic.es>
*/

// Variable initialization
var products;
var shoppingCart;
var currentProduct;
var currentPrice;
var cartPrice;

// Updates total cart price when adding a product
function updateCartPrice(){
    cartPrice = parseFloat(document.getElementById("total-price").innerText);
    currentPrice = parseFloat(currentProduct.lastElementChild.lastElementChild.innerText);
    cartPrice = (cartPrice + currentPrice).toFixed(2);
    document.getElementById("total-price").innerText = cartPrice;
}

// Checks if there's already a product of this family in the cart
function familyInCart(){
    if(shoppingCart.children.length != 0){
        for(let item in shoppingCart.children){
            if(currentProduct.className == shoppingCart.children[item].className){
                return true;
            }
        }
    }
    return false;
}   

// Gets dragged product item
function getProduct(event){
    currentProduct = event.target;
}

// Drag start event, adds product only if there's none of its family already in the cart
function addProduct(event){
    if(familyInCart()){
        alert("There's already a " + currentProduct.className + " in the shopping cart.");
    }else{
        shoppingCart.append(currentProduct);
        updateCartPrice();
    }
}

/**
 * Starts events
 */
function loadedDOM(){
    shoppingCart=document.getElementById('cart-items');
    shoppingCart.addEventListener('dragover',event=>{event.preventDefault()});
    shoppingCart.addEventListener('drop', addProduct);

    products=document.getElementsByClassName('product');
    for(let item of products){
        item.addEventListener('dragstart', getProduct);
    }
}

// Starts events when DOM is loaded
document.addEventListener('DOMContentLoaded',loadedDOM);