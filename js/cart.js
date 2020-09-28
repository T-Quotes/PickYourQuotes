'use strict';

const tableTitles = ['Remove', 'Color', 'Size', 'Quantity', 'Price'];


const tableEle = document.getElementById('table-cart');
const thead = document.createElement('thead');
tableEle.appendChild(thead);

const tHeadEl = tableEle.firstElementChild;
// console.log(tHeadEl);
const trEl = document.createElement('tr');
tHeadEl.appendChild(trEl);

const tr = tHeadEl.firstElementChild;

// function tHeader
for (var i = 0; i <= 4; i++) {
  let thEl = document.createElement('th');
  tr.appendChild(thEl);
  thEl.textContent = tableTitles[i];
}
// ---
// eslint-disable-next-line no-undef
let cart = getCartLocalStorage();
let tBody = document.createElement('tbody');
tableEle.appendChild(tBody);
let tbodyElm = tableEle.lastElementChild;
function cartRender() {
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
tableEle.addEventListener('click', removeOrder);

function removeOrder(event) {
  for (let i = 0; i < cart.Orders.length; i++)
    if (Number(event.target.id) === i) {
      cart.Orders.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      cartRender();
    }




}


cartRender();
