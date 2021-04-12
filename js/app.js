'use strict';




let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let sale=document.getElementById('sales');
let table1=document.createElement('table');
sale.appendChild(table1);
table1.setAttribute('border','1');
table1.setAttribute('cellpadding','7');
table1.setAttribute('align','center');

let arrayobejcts=[];



function Cookies(location, minCustomer, maxCustomer, avgCookie) {

  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;

  this.customernum = [];
  this.avgcookie = [];
  this.total = 0;
  arrayobejcts.push(this);

}


let seattle = new Cookies('seattle', 23, 65, 6.3);
let Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let Dubai = new Cookies('Dubai', 11, 38, 3.7);
let Paris = new Cookies('Paris', 20, 38, 2.3);
let Lima = new Cookies('Lima', 2, 16, 4.6);

Cookies.prototype.getnumber = function () {
  for (let i = 0; i <= 14; i++) {

    this.customernum.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));

  }};


Cookies.prototype.getcookie=function(){
  for(let j=0;j<14;j++){
    this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
    this.total+=this.avgcookie[j];

  }};



for(let i = 0 ; i<arrayobejcts.length; i++){
  arrayobejcts[i].getnumber();
  arrayobejcts[i].getcookie();
}



function headtable(){
  let tablehead=document.createElement('thead');
  table1.appendChild(tablehead);
  let trow=document.createElement('tr');
  tablehead.appendChild(trow);

  let beginning=document.createElement('th');
  tablehead.appendChild(beginning);
  beginning.textContent='location';

  for(let i=0;i<14;i++){
    let data=document.createElement('th');
    tablehead.appendChild(data);
    data.textContent=`${hours[i]}`;
  }
  let finish =document.createElement('th');
  tablehead.appendChild(finish);
  finish.textContent= 'daily location total';

}
headtable();

function tablebody(){
  let tabbody=document.createElement('tbody');
  table1.appendChild(tabbody);
  for(let i=0;i<arrayobejcts.length;i++){
    let rowbody=document.createElement('tr');
    tabbody.appendChild(rowbody);
    let data1=document.createElement('td');
    rowbody.appendChild(data1);
    data1.textContent= arrayobejcts[i].location;

    for(let j=0;j<hours.length;j++){
      let data2=document.createElement('td');
      rowbody.appendChild(data2);
      data2.textContent=arrayobejcts[i].avgcookie[j];

    }
    let last=document.createElement('td');
    rowbody.appendChild(last);
    last.textContent=arrayobejcts[i].total;
  }








}
tablebody();


function tablefooter(){

  let lasttable=document.createElement('tfoot');
  table1.appendChild(lasttable);
  let lastrow=document.createElement('tr');
  lasttable.appendChild(lastrow);
  let beg=document.createElement('td');
  lastrow.appendChild(beg);
  beg.textContent='total';
  let allsum=0;
  for(let i=0;i<hours.length;i++){
    let sum=0;


    for(let j=0;j<arrayobejcts.length;j++){
      sum+=arrayobejcts[j].avgcookie[i];

    }
    let data4=document.createElement('td');
    lastrow.appendChild(data4);
    data4.textContent=sum;

    allsum+=sum;


  }
  let data5=document.createElement('td');
  lastrow.appendChild(data5);
  data5.textContent=allsum;


}


tablefooter();












// const seattle = {
//   name:'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookie: 6.3,
//   customernum: [],
//   avgcookie:[],
//   total:0,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   getnumber: function () {
//     for (let i = 0; i <= 14; i++) {

//       this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

//     }




//   },

//   getcookie:function(){
//     for(let j=0;j<14;j++){
//       this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
//       this.total+=this.avgcookie[j];

//     }
//   },

//   list:function(){
//     let sale=document.getElementById('sales');
//     let heading=document.createElement('h2');
//     sale.appendChild(heading);
//     heading.textContent=this.name;
//     let list1=document.createElement('ul');
//     let lastitem=document.createElement('li');


//     sale.appendChild(list1);
//     for(let i=0;i<14;i++){
//       let item=document.createElement('li');
//       list1.appendChild(item);
//       item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


//     }

//     list1.appendChild(lastitem);
//     lastitem.textContent=`total:${this.total}`;
//     let breakline=document.createElement('hr');
//     sale.appendChild(breakline);



//   }



// };

// console.log(seattle.getnumber());
// console.log(seattle.customernum);
// console.log(seattle.getcookie());
// console.log(seattle.avgcookie);
// console.log(seattle.total);
// console.log(seattle.list());

// const Tokyo = {
//   name:'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookie: 1.2,
//   customernum: [],
//   avgcookie:[],
//   total:0,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   getnumber: function () {
//     for (let i = 0; i <= 14; i++) {

//       this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

//     }




//   },

//   getcookie:function(){
//     for(let j=0;j<14;j++){
//       this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
//       this.total+=this.avgcookie[j];

//     }
//   },

//   list:function(){
//     let sale=document.getElementById('sales');
//     let heading=document.createElement('h2');
//     sale.appendChild(heading);
//     heading.textContent=this.name;
//     let list1=document.createElement('ul');
//     let lastitem=document.createElement('li');

//     sale.appendChild(list1);
//     for(let i=0;i<14;i++){
//       let item=document.createElement('li');
//       list1.appendChild(item);
//       item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


//     }
//     list1.appendChild(lastitem);
//     lastitem.textContent=`total:${this.total}`;
//     let breakline=document.createElement('hr');
//     sale.appendChild(breakline);


//   }



// };

// console.log(Tokyo.getnumber());
// console.log(Tokyo.customernum);
// console.log(Tokyo.getcookie());
// console.log(Tokyo.avgcookie);
// console.log(Tokyo.total);
// console.log(Tokyo.list());

// const Dubai = {
//   name:'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookie: 3.7,
//   customernum: [],
//   avgcookie:[],
//   total:0,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   getnumber: function () {
//     for (let i = 0; i <= 14; i++) {

//       this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

//     }




//   },

//   getcookie:function(){
//     for(let j=0;j<14;j++){
//       this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
//       this.total+=this.avgcookie[j];

//     }
//   },

//   list:function(){
//     let sale=document.getElementById('sales');
//     let heading=document.createElement('h2');
//     sale.appendChild(heading);
//     heading.textContent=this.name;
//     let list1=document.createElement('ul');
//     let lastitem=document.createElement('li');

//     sale.appendChild(list1);
//     for(let i=0;i<14;i++){
//       let item=document.createElement('li');
//       list1.appendChild(item);
//       item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


//     }
//     list1.appendChild(lastitem);
//     lastitem.textContent=`total:${this.total}`;
//     let breakline=document.createElement('hr');
//     sale.appendChild(breakline);


//   }



// };

// console.log(Dubai.getnumber());
// console.log(Dubai.customernum);
// console.log(Dubai.getcookie());
// console.log(Dubai.avgcookie);
// console.log(Dubai.total);
// console.log(Dubai.list());




// const Paris	 = {
//   name:'Paris	',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookie: 2.3,
//   customernum: [],
//   avgcookie:[],
//   total:0,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   getnumber: function () {
//     for (let i = 0; i <= 14; i++) {

//       this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

//     }




//   },

//   getcookie:function(){
//     for(let j=0;j<14;j++){
//       this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
//       this.total+=this.avgcookie[j];

//     }
//   },

//   list:function(){
//     let sale=document.getElementById('sales');
//     let heading=document.createElement('h2');
//     sale.appendChild(heading);
//     heading.textContent=this.name;
//     let list1=document.createElement('ul');
//     let lastitem=document.createElement('li');

//     sale.appendChild(list1);
//     for(let i=0;i<14;i++){
//       let item=document.createElement('li');
//       list1.appendChild(item);
//       item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


//     }
//     list1.appendChild(lastitem);
//     lastitem.textContent=`total:${this.total}`;
//     let breakline=document.createElement('hr');
//     sale.appendChild(breakline);


//   }



// };

// console.log(Paris	.getnumber());
// console.log(Paris	.customernum);
// console.log(Paris	.getcookie());
// console.log(Paris	.avgcookie);
// console.log(Paris	.total);
// console.log(Paris	.list());

// const Lima	 = {
//   name:'Lima	',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookie: 4.6,
//   customernum: [],
//   avgcookie:[],
//   total:0,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   getnumber: function () {
//     for (let i = 0; i <= 14; i++) {

//       this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

//     }




//   },

//   getcookie:function(){
//     for(let j=0;j<14;j++){
//       this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
//       this.total+=this.avgcookie[j];

//     }
//   },

//   list:function(){
//     let sale=document.getElementById('sales');
//     let heading=document.createElement('h2');
//     sale.appendChild(heading);
//     heading.textContent=this.name;
//     let list1=document.createElement('ul');
//     let lastitem=document.createElement('li');

//     sale.appendChild(list1);
//     for(let i=0;i<14;i++){
//       let item=document.createElement('li');
//       list1.appendChild(item);
//       item.textContent=`${this.hours[i]}: ${this.avgcookie[i]} cookies`;


//     }
//     list1.appendChild(lastitem);
//     lastitem.textContent=`total : ${this.total}`;
//     let breakline=document.createElement('hr');
//     sale.appendChild(breakline);


//   }



// };

// console.log(Lima	.getnumber());
// console.log(Lima	.customernum);
// console.log(Lima	.getcookie());
// console.log(Lima	.avgcookie);
// console.log(Lima	.total);
// console.log(Lima	.list());
