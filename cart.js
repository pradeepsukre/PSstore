function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");
let total = 0;

cartItems.innerHTML = "";

cart.forEach((item, index) => {

let li = document.createElement("li");

li.innerHTML = `
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">Remove</button>
`;

cartItems.appendChild(li);

total += item.price;

});

document.getElementById("total").innerText = total;

}

function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index, 1);

localStorage.setItem("cart", JSON.stringify(cart));

loadCart();

}

function checkout(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
alert("Cart is empty!");
return;
}

alert("Order placed successfully!");

localStorage.removeItem("cart");

loadCart();

}

loadCart();