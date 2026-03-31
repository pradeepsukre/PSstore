function searchProduct(){

let input = document.getElementById("searchBar").value.toLowerCase();

let products = document.getElementsByClassName("product");

for(let i=0;i<products.length;i++){

let productName = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(productName.includes(input)){
products[i].style.display = "block";
}
else{
products[i].style.display = "none";
}

}

}

function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart!");

}