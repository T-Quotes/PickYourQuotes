'use strict';

const tableTitles = ['Remove', 'Color', 'Size', 'Quantity', 'Price'];
// eslint-disable-next-line no-undef
let cart = getCartLocalStorage();
const tableEle = document.getElementById('table-cart');

function cartRender() {
  document.getElementById('itemCount').textContent=`(${cart.Orders.length})`;
  //Create Table
  const thead = document.createElement('thead');
  tableEle.appendChild(thead);
  const tHeadEl = tableEle.firstElementChild;
  const trEl = document.createElement('tr');
  tHeadEl.appendChild(trEl);
  const tr = tHeadEl.firstElementChild;
  // tHeader fill
  for (var i = 0; i <= 4; i++) {
    let thEl = document.createElement('th');
    tr.appendChild(thEl);
    thEl.textContent = tableTitles[i];
  }

  let tBody = document.createElement('tbody');
  tableEle.appendChild(tBody);
  let tbodyElm = tableEle.lastElementChild;
  // tBody fill
  for (var d = 0; d < cart.Orders.length; d++) {

    let trEl = document.createElement('tr');
    tbodyElm.appendChild(trEl);

    for (let i = 0; i < 5; i++) {
      let tdElm = document.createElement('td');
      trEl.appendChild(tdElm);
      if (i === 0) {
        tdElm.textContent = 'X';
        tdElm.id = d;
      }
      else if (i === 1)
        tdElm.textContent = cart.Orders[d].color;
      else if (i === 2)
        tdElm.textContent = cart.Orders[d].size;
      else if (i === 3)
        tdElm.textContent = cart.Orders[d].qty;
      else if (i === 4)
        tdElm.textContent = '20$';
    }
  }


}


function cleanTable() {
  tableEle.innerHTML='';
}

tableEle.addEventListener('click', removeOrder);

function removeOrder(event) {
  console.log(event.target.value);
  for (let i = 0; i < cart.Orders.length; i++)
    if (event.target.id ===i.toString()) {
      cart.Orders.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      cleanTable();
      cartRender();
      document.getElementById('itemCount').textContent=`(${cart.Orders.length})`;
    }
}

let checkoutElm=document.getElementById('checkout');
checkoutElm.addEventListener('click',checkout);
let massage =document.getElementById('checkout-massage');
function checkout(){
  massage.style.display='block';
  localStorage.setItem('cart', JSON.stringify([]));
  cleanTable();
  cartRender();
}

let doneElm=document.getElementById('done');
doneElm.addEventListener('click',done);

function done() {

  massage.style.display='none';

}

cartRender();
