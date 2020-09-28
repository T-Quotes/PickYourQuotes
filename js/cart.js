/* global Cart */
'use strict';

function loadCart() {
  var cartOrders = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  let counterElm=document.getElementById('itemCount');
  localStorage.setItem('counter',cart.items.length);
  counterElm.textContent=`${localStorage.getItem('counter')}`;
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbodyElm=table.getElementsByTagName('tbody')[0];
  tbodyElm.innerHTML='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  tbodyElm=table.getElementsByTagName('tbody')[0];

  // TODO: Iterate over the items in the cart
  for(let i=0; i<cart.items.length;i++)
  { 
    let product=cart.items[i].product;
    let quantity=cart.items[i].quantity;
    new CartItem (product,quantity);
  
  // TODO: Create a TR
  let trElm=document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tdElmLink=document.createElement('td');
  tdElmLink.textContent='X'  ;
  tdElmLink.id=`${i}`;
  let tdElmQuantity=document.createElement('td');
  tdElmQuantity.textContent=`${cart.items[i].quantity}` 

  let tdElmItem=document.createElement('td');
  tdElmItem.textContent=`${cart.items[i].product}` 

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tbodyElm.appendChild(trElm);
  trElm.appendChild(tdElmLink);
  trElm.appendChild(tdElmQuantity);
  trElm.appendChild(tdElmItem);
  }
  table.style.display='block';
}

function removeItemFromCart(event) {
  tbodyElm=table.getElementsByTagName('tbody')[0];
  let trElm=tbodyElm.getElementsByTagName('tr')
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  for (let i =0; i<trElm.length;i++){
    trElm[i].getElementsByTagName('td')[0];
    if( event.target.id ==trElm[i].firstChild.id){
      cart.removeItem(i);
          // TODO: Save the cart back to local storage
      cart.saveToLocalStorage();
      // TODO: Re-draw the cart table
      renderCart();
  }
  }

  
}

// This will initialize the page and draw the cart on screen
renderCart();
