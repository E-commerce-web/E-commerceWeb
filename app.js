const menu = document.querySelector('.menu-icon');
const MenuItems = document.querySelector('#MenuItems');
const nav = document.querySelector('#navigation');



MenuItems.style.maxHeight = "0px"
menu.addEventListener('click', displayMenu);

function displayMenu(){
  if( MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
  }
  else{
    MenuItems.style.maxHeight = "0px";
  }
};


// function for product image//
var fullImage = document.getElementById('product-img');
var smallImage = document.getElementsByClassName('small-img');

smallImage[0].onclick = function (){
    fullImage.src = smallImage[0].src;
}

smallImage[1].onclick = function (){
    fullImage.src = smallImage[1].src;
}

smallImage[2].onclick = function (){
    fullImage.src = smallImage[2].src;
}

smallImage[3].onclick = function (){
    fullImage.src = smallImage[3].src;
}




