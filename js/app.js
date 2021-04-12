'use strict';




const seattle = {
  name : 'seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customernum: [],
  avgcookie:[],
  total:0,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  getnumber: function () {
    for (let i = 0; i <= 14; i++) {

      this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

    }




  },

  getcookie:function(){
    for(let j=0;j<14;j++){
      this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
      this.total+=this.avgcookie[j];

    }
  },

  list:function(){
    let sale=document.getElementById('sales');
    let heading=document.createElement('h2');
    sale.appendChild(heading);
    heading.textContent=this.name;
    let list1=document.createElement('ul');
    let lastitem=document.createElement('li');


    sale.appendChild(list1);
    for(let i=0;i<14;i++){
      let item=document.createElement('li');
      list1.appendChild(item);
      item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


    }

    list1.appendChild(lastitem);
    lastitem.textContent=`total:${this.total}`;
    let breakline=document.createElement('hr');
    sale.appendChild(breakline);



  }



};

console.log(seattle.getnumber());
console.log(seattle.customernum);
console.log(seattle.getcookie());
console.log(seattle.avgcookie);
console.log(seattle.total);
console.log(seattle.list());

const Tokyo = {
  name:'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  customernum: [],
  avgcookie:[],
  total:0,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  getnumber: function () {
    for (let i = 0; i <= 14; i++) {

      this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

    }




  },

  getcookie:function(){
    for(let j=0;j<14;j++){
      this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
      this.total+=this.avgcookie[j];

    }
  },

  list:function(){
    let sale=document.getElementById('sales');
    let heading=document.createElement('h2');
    sale.appendChild(heading);
    heading.textContent=this.name;
    let list1=document.createElement('ul');
    let lastitem=document.createElement('li');

    sale.appendChild(list1);
    for(let i=0;i<14;i++){
      let item=document.createElement('li');
      list1.appendChild(item);
      item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


    }
    list1.appendChild(lastitem);
    lastitem.textContent=`total:${this.total}`;
    let breakline=document.createElement('hr');
    sale.appendChild(breakline);


  }



};

console.log(Tokyo.getnumber());
console.log(Tokyo.customernum);
console.log(Tokyo.getcookie());
console.log(Tokyo.avgcookie);
console.log(Tokyo.total);
console.log(Tokyo.list());

const Dubai = {
  name:'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  customernum: [],
  avgcookie:[],
  total:0,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  getnumber: function () {
    for (let i = 0; i <= 14; i++) {

      this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

    }




  },

  getcookie:function(){
    for(let j=0;j<14;j++){
      this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
      this.total+=this.avgcookie[j];

    }
  },

  list:function(){
    let sale=document.getElementById('sales');
    let heading=document.createElement('h2');
    sale.appendChild(heading);
    heading.textContent=this.name;
    let list1=document.createElement('ul');
    let lastitem=document.createElement('li');

    sale.appendChild(list1);
    for(let i=0;i<14;i++){
      let item=document.createElement('li');
      list1.appendChild(item);
      item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


    }
    list1.appendChild(lastitem);
    lastitem.textContent=`total:${this.total}`;
    let breakline=document.createElement('hr');
    sale.appendChild(breakline);


  }



};

console.log(Dubai.getnumber());
console.log(Dubai.customernum);
console.log(Dubai.getcookie());
console.log(Dubai.avgcookie);
console.log(Dubai.total);
console.log(Dubai.list());




const Paris	 = {
  name:'Paris	',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  customernum: [],
  avgcookie:[],
  total:0,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  getnumber: function () {
    for (let i = 0; i <= 14; i++) {

      this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

    }




  },

  getcookie:function(){
    for(let j=0;j<14;j++){
      this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
      this.total+=this.avgcookie[j];

    }
  },

  list:function(){
    let sale=document.getElementById('sales');
    let heading=document.createElement('h2');
    sale.appendChild(heading);
    heading.textContent=this.name;
    let list1=document.createElement('ul');
    let lastitem=document.createElement('li');

    sale.appendChild(list1);
    for(let i=0;i<14;i++){
      let item=document.createElement('li');
      list1.appendChild(item);
      item.textContent=`${this.hours[i]}:${this.avgcookie[i]} cookies`;


    }
    list1.appendChild(lastitem);
    lastitem.textContent=`total:${this.total}`;
    let breakline=document.createElement('hr');
    sale.appendChild(breakline);


  }



};

console.log(Paris	.getnumber());
console.log(Paris	.customernum);
console.log(Paris	.getcookie());
console.log(Paris	.avgcookie);
console.log(Paris	.total);
console.log(Paris	.list());

const Lima	 = {
  name:'Lima	',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  customernum: [],
  avgcookie:[],
  total:0,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  getnumber: function () {
    for (let i = 0; i <= 14; i++) {

      this.customernum.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));

    }




  },

  getcookie:function(){
    for(let j=0;j<14;j++){
      this.avgcookie.push(Math.floor(this.customernum[j] * this.avgCookie));
      this.total+=this.avgcookie[j];

    }
  },

  list:function(){
    let sale=document.getElementById('sales');
    let heading=document.createElement('h2');
    sale.appendChild(heading);
    heading.textContent=this.name;
    let list1=document.createElement('ul');
    let lastitem=document.createElement('li');

    sale.appendChild(list1);
    for(let i=0;i<14;i++){
      let item=document.createElement('li');
      list1.appendChild(item);
      item.textContent=`${this.hours[i]}: ${this.avgcookie[i]} cookies`;


    }
    list1.appendChild(lastitem);
    lastitem.textContent=`total : ${this.total}`;
    let breakline=document.createElement('hr');
    sale.appendChild(breakline);


  }



};

console.log(Lima	.getnumber());
console.log(Lima	.customernum);
console.log(Lima	.getcookie());
console.log(Lima	.avgcookie);
console.log(Lima	.total);
console.log(Lima	.list());



