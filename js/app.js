/* eslint-disable no-undef */
'use strict';

//Html Section
const sectionElmTop = document.getElementById('section-top');
const sectionElmLeft = document.getElementById('section-left');
const sectionElmRight = document.getElementById('section-Right');
const sectionContent = document.getElementById('contect');
const buttonLeft = document.getElementById('move-left');
const buttonRight = document.getElementById('move-right');
const trindingUl = document.getElementById('trinding');
const popupForm = document.getElementById('popup-form');
//------
const imageFoldor = ['proverb1.png', 'proverb2.png', 'proverb3.png', 'proverb4.png', 'proverb5.png', 'proverb6.png', 'proverb7.jpg', 'proverb8.png', 'proverb9.png', 'proverb10.jpg'];
let index = 0;
let cart =getCartLocalStorage();

console.log(cart);
//---------------------------
//To get random image index
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//---------------------------
//Set Random Images
function randomImages() {
  let temp = [];
  console.log(temp);
  let imgElm;

  for (let i = 0; i < 3; i++) //3 image
  {
    imgElm = document.createElement('img');
    sectionElmTop.appendChild(imgElm);
    let indexImg = getRandomIndex(0, imageFoldor.length - 1);
    imgElm.src = `img/${imageFoldor[indexImg]}`;
    imgElm.title = imageFoldor[indexImg].split('.')[0];

    if (i === 1) {
      while (imgElm.title === temp[i - 1]) {
        indexImg = getRandomIndex(0, imageFoldor.length - 1);
        imgElm.src = `img/${imageFoldor[indexImg]}`;
        imgElm.title = imageFoldor[indexImg].split('.')[0];
      }
    }
    if (i === 2) {
      while (imgElm.title === temp[i - 1] || imgElm.title === temp[i - 2]) {
        indexImg = getRandomIndex(0, imageFoldor.length - 1);
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
  let articleElm = document.getElementById('Quot');
  let hElm = document.getElementsByTagName('h3')[0];
  articleElm.textContent = `${story}`;
  hElm.textContent = `${title}`;

}


//---------------------------
function getLocalStorge() {
  let quotAll = JSON.parse(localStorage.getItem('Quotes'));
  if (quotAll){
    Quot.all = [];
    for (let i = 0; i < quotAll.length; i++) {
      new Quot(quotAll[i].title,quotAll[i].story);
      Quot.all[i].tranding += quotAll[i].tranding;
    }
  }

}

//---------------------------
function setTrinding() {
  let liElm;
  for (let i = 0; i < Quot.all.length; i++) {
    liElm = document.createElement('li');
    trindingUl.appendChild(liElm);
    liElm.textContent = Quot.all[i].title + ' (' + Quot.all[i].tranding + ').';

  }
}

//--------------------------------

let quotAll ;

function setLocalStorge() {
  quotAll = JSON.stringify(Quot.all);
  localStorage.setItem('Quotes', quotAll);
}



//---------------------------
popupForm.addEventListener('click', formSubmit);
function formSubmit(event) {
  let cart =new Cart([]);
  let color,size,qty;
  color=document.getElementById('Color').value;
  size=document.getElementById('Size').value;
  qty=document.getElementById('qty').value;
  if (event.target.id === 'Color') {
    color = event.target.value;
    if (color==='white'){
      document.getElementById('mockup').src='https://mockups.32pt.com/mockupServer/blanks/TC0/White/unisex-crewneck-tshirt-v2-front/regular.jpg';
      document.getElementById('printText').firstElementChild.style.color='black';

    }
    else if (color==='black'){
      document.getElementById('mockup').src='https://mockups.32pt.com/mockupServer/blanks/TC0/Black/unisex-crewneck-tshirt-v2-front/regular.jpg';
      document.getElementById('printText').firstElementChild.style.color='white';
      document.getElementById('printText').firstElementChild.style.opacity=1;

    }
  }
  if (event.target.id === 'Size') {
    size = event.target.value;
  }
  if (event.target.id === 'qty') {
    qty = event.target.value;

  }

  if (event.target.id==='Place-Order'){
    cart=getCartLocalStorage();
    cart.Orders.push(new Order(color,size,qty));
    popupForm.style.display = 'none';
    localStorage.setItem('cart',JSON.stringify(cart));

  }
}
//---------------------------

//---------------------------
sectionElmLeft.addEventListener('click', quotControl);

function quotControl(event) {
  if (event.target === document.getElementsByTagName('h3')[0]) {
    popupForm.style.display = 'block';
    let text=document.getElementById('printText').firstElementChild;
    text.textContent= Quot.all[index].title;
    Quot.all[index].tranding++;
    setLocalStorge();

  }

  //---



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
  getLocalStorge();

  randomImages();
  //--
  buttonLeft.style.display = 'none';
  setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
  //--

  setTrinding();
  // eslint-disable-next-line no-undef
}

// eslint-disable-next-line no-undef
render();
