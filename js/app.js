/* eslint-disable no-undef */
'use strict';

//Html Section
const sectionElmTop = document.getElementById('section-top');
const sectionElmLeft = document.getElementById('section-left');
// const sectionElmRight = document.getElementById('section-Right');
// const sectionContent = document.getElementById('contect');
const buttonLeft = document.getElementById('move-left');
const buttonRight = document.getElementById('move-right');
const trindingUl = document.getElementById('trinding');
const popupForm = document.getElementById('popup-form');
//------
const imageFoldor = ['proverb1.png', 'proverb2.png', 'proverb3.png', 'proverb4.png', 'proverb5.png', 'proverb6.png', 'proverb7.png', 'proverb8.png', 'proverb9.png'];
let index = 0;
// eslint-disable-next-line no-unused-vars
let cart = getCartLocalStorage();

//---------------------------
//To get random image index
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//---------------------------
//Set Random Images
function randomImages() {
  let temp = [];
  let imgElm;

  for (let i = 0; i < 3; i++) //3 image
  {
    imgElm = document.createElement('img');
    sectionElmTop.appendChild(imgElm);
    let indexImg = getRandomIndex(0, imageFoldor.length);
    imgElm.src = `img/${imageFoldor[indexImg]}`;
    imgElm.title = imageFoldor[indexImg].split('.')[0];

    if (i === 1) {
      while (imgElm.title === temp[i - 1]) {
        indexImg = getRandomIndex(0, imageFoldor.length);
        imgElm.src = `img/${imageFoldor[indexImg]}`;
        imgElm.title = imageFoldor[indexImg].split('.')[0];
      }
    }
    if (i === 2) {
      while (imgElm.title === temp[i - 1] || imgElm.title === temp[i - 2]) {
        indexImg = getRandomIndex(0, imageFoldor.length);
        imgElm.src = `img/${imageFoldor[indexImg]}`;
        imgElm.title = imageFoldor[indexImg].split('.')[0];
      }
    }

    temp.push(imgElm.title);
  }
}

//---------------------------
//set Quot
function setTitleAndQuot(title, story) {
  let articleElm = document.getElementById('Quot').firstElementChild;
  let hElm = document.getElementsByTagName('h3')[0];
  articleElm.textContent = `${title}`;
  hElm.textContent = `${story}`;

}

//---------------------------
//set and update Trinding Section
function setTrinding() {
  getLocalStorge();
  let liElm;
  for (let i = 0; i < Quot.all.length; i++) {
    liElm = document.createElement('li');
    trindingUl.appendChild(liElm);
    liElm.textContent = Quot.all[i].title + ' (' + Quot.all[i].tranding + ').';

  }
}
//---------------------------
//Popup Form
popupForm.addEventListener('click', formSubmit);
let img=`<section class='Preview'><img src="img/WhiteT.png"><p style='color:black;opacity:0.8'>${document.getElementById('printText').textContent}</p></section>`;
function formSubmit(event) {
  event.preventDefault();
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
      img=`<section class='Preview'><img src="img/WhiteT.png"><p style='color:black;opacity:0.8'>${document.getElementById('printText').textContent}</p></section>`;
    }
    else if (color === 'black') {
      document.getElementById('mockup').src = 'https://mockups.32pt.com/mockupServer/blanks/TC0/Black/unisex-crewneck-tshirt-v2-front/regular.jpg';
      document.getElementById('printText').firstElementChild.style.color = 'white';
      document.getElementById('printText').firstElementChild.style.opacity = 1;
      img=`<section class='Preview'><img src="img/BlackT.png"><p style='color:white'>${document.getElementById('printText').textContent}</p></section>`;

    }
  }
  if (event.target.id === 'Size') {
    size = event.target.value;
  }
  if (event.target.id === 'qty') {
    qty = event.target.value;

  }

  if (event.target.id === 'Place-Order') {
    cart = getCartLocalStorage();
    cart.Orders.push(new Order(color, size, qty,img));
    popupForm.style.display = 'none';
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('itemCount').textContent = `(${cart.Orders.length})`;
    Quot.all[index].tranding++;
    setLocalStorge();
    alert('Order Placed');
    location.reload();

  }
}
//---------------------------
//Close form
let cancelElm = document.getElementById('Cancel');
cancelElm.addEventListener('click', closePopup);

function closePopup() {
  popupForm.style.display = 'none';
}
//---------------------------
//swap between Quot and control open PopupPage
sectionElmLeft.addEventListener('click', quotControl);

function quotControl(event) {
  event.preventDefault();
  //---open popup
  if (event.target === document.getElementsByTagName('h2')[1]) {
    popupForm.style.display = 'block';
    let text = document.getElementById('printText').firstElementChild;
    text.textContent = Quot.all[index].title;
  }
  //---go to right
  if (event.target.id === buttonRight.id) {
    index++;
    if (index === Quot.all.length - 1) {
      buttonRight.style.display = 'none';
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
    }
    else {
      buttonLeft.style.display = 'inline-block';
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
    }
  }
  //---go to left
  else if (event.target.id === buttonLeft.id) {
    if (index === 0) {
      buttonLeft.style.display = 'none';
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
    }
    else {
      buttonRight.style.display = 'inline-block';
      index--;
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
    }
  }



}

function render() {
  buttonLeft.style.display = 'none';
  getLocalStorge();
  randomImages();
  setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
  setTrinding();
}

render();
