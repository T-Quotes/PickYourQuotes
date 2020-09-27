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
    imgElm.src = `img/${imageFoldor[getRandomIndex(0, imageFoldor.length - 1)]}`;
    imgElm.title = imageFoldor[getRandomIndex(0, imageFoldor.length - 1)].split('.')[0];
    if (i === 1) {
      while (imgElm.title === temp[i - 1]) {
        imgElm.src = `img/${imageFoldor[getRandomIndex(0, imageFoldor.length - 1)]}`;
      }
    }
    else if (i === 2) {
      while (imgElm.title === temp[i -1] && imgElm.title === temp[i - 2])
        imgElm.src = `img/${imageFoldor[getRandomIndex(0, imageFoldor.length-1)]}`;
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
  for (let i = 0; i < quotAll.length; i++) {
    // Quot.all = [];
    Quot.all[i].tranding += quotAll[i].tranding;
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

let quotAll=JSON.stringify(Quot.all);

function setLocalStorge(){
  localStorage.setItem('Quotes',quotAll);
}




//---------------------------
sectionElmLeft.addEventListener('click', quotControl);

function quotControl(event) {
  if (event.target === document.getElementsByTagName('h3')[0]) {
    popupForm.style.display='inline-block';
  }

  //---



  if (event.target.id === buttonRight.id) {
    index++;
    if (index === Quot.all.length - 1) {
      buttonRight.style.display = 'none';
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
      Quot.all[index].tranding++;
    }
    else {
      buttonLeft.style.display = 'inline-block';
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
      Quot.all[index].tranding++;
    }
  }

  else if (event.target.id === buttonLeft.id) {
    if (index === 0) {
      buttonLeft.style.display = 'none';
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
      Quot.all[index].tranding++;
    }
    else {
      buttonRight.style.display = 'inline-block';
      index--;
      setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
      Quot.all[index].tranding++;
    }
  }



}




function render() {
  getLocalStorge();

  randomImages();
  //--
  buttonLeft.style.display = 'none';
  setTitleAndQuot(Quot.all[index].title, Quot.all[index].story);
  Quot.all[index].tranding++;
  //--

  setTrinding();
  // eslint-disable-next-line no-undef
}

// eslint-disable-next-line no-undef
setLocalStorge();
render();

