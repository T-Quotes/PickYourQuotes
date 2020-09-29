
const inputQuot = document.getElementById('MyQuot');
inputQuot.addEventListener('keypress', myOwnQout);
inputQuot.addEventListener('keydown',forDelete);

function myOwnQout(event) {
  let seeMyQout = document.getElementById('seeMyQout');
  if (event.keyCode === 8||event.keyCode===127) {
    let text = seeMyQout.textContent;
    text = text.substr(0, text.length - 1);
    seeMyQout.textContent = text;
  }
  else if (event.keyCode<256 && event.keyCode>31)
    seeMyQout.textContent += String.fromCharCode(event.keyCode);
}

function forDelete(event) {
  let seeMyQout = document.getElementById('seeMyQout');
  if (event.keyCode === 8||event.keyCode===127) {
    let text = seeMyQout.textContent;
    text = text.substr(0, text.length - 1);
    seeMyQout.textContent = text;
  }
}
let formPage=document.getElementById('Pageform');
formPage.addEventListener('click', formSubmit);
function formSubmit(event) {

  // eslint-disable-next-line no-undef
  let cart = new Cart([]);
  let color, size, qty;
  color = document.getElementById('Color').value;
  size = document.getElementById('Size').value;
  qty = document.getElementById('qty').value;
  if (event.target.id === 'Color') {
    color = event.target.value;
    if (color === 'white') {
      document.getElementById('mockup').src = 'https://mockups.32pt.com/mockupServer/blanks/TC0/White/unisex-crewneck-tshirt-v2-front/regular.jpg';
      document.getElementById('printText').firstElementChild.style.color = 'black';

    }
    else if (color === 'black') {
      document.getElementById('mockup').src = 'https://mockups.32pt.com/mockupServer/blanks/TC0/Black/unisex-crewneck-tshirt-v2-front/regular.jpg';
      document.getElementById('printText').firstElementChild.style.color = 'white';
      document.getElementById('printText').firstElementChild.style.opacity = 1;

    }
  }
  if (event.target.id === 'Size') {
    size = event.target.value;
  }
  if (event.target.id === 'qty') {
    qty = event.target.value;

  }

  if (event.target.id === 'Place-Order') {
    // eslint-disable-next-line no-undef
    cart = getCartLocalStorage();
    // eslint-disable-next-line no-undef
    cart.Orders.push(new Order(color, size, qty));
    formPage.style.display = 'none';
    localStorage.setItem('cart', JSON.stringify(cart));

  }
}
