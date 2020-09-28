//---------------------------
Quot.all=[];
//Quot Constructor
function Quot(title, story) {
  this.title = title;
  this.story = story;
  this.tranding = 0;
  Quot.all.push(this);

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


