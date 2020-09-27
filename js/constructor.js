//---------------------------
Quot.all=[];
//Quot Constructor
function Quot(title, story) {
  this.title = title;
  this.story = story;
  this.tranding = 0;
  Quot.all.push(this);

}

function getCartLocalStorage(){
  let k=localStorage.getItem('cart');
  k=JSON.parse(k);
  if(k){
    return new Cart(k.Orders);
  }
  else return new Cart([]);
}

function Order (color,size,qty)
{
  this.color=color;
  this.size=size;
  this.qty=qty;

}

function Cart (Orders)
{
  this.Orders=Orders;
}


