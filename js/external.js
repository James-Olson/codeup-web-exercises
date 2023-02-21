"use strict";

console.log("Hello from external JavaScript");

alert('welcome to my website');
prompt ('what is your favorite color');
let x =  prompt("Whats your favorite color");
alert( x + " is my favorite color also");

var littlemermaid = Number(prompt("how long did you rental the little mermaid"));
var brotherbear = Number(prompt("how long did you rent the brother bear?"));
var hercules = Number(prompt("how long did you have hercules"));
var price = 3;

var totalprice = (littlemermaid * price ) + (brotherbear * price) + (hercules * price);
var grandprice = (littlemermaid + brotherbear + hercules) * price;
var finalprice = (littlemermaid) + (brotherbear) + (hercules) * price;
alert(totalprice + grandprice + finalprice);

var googlepay = prompt("what does google pay");
var amazonpay = prompt("what does amazon pay");
var facebookpay = prompt("what does facebook pay");
var googletime = prompt("how many hours did you give google");
var amazontime = prompt("how many hours did you give amazon");
var facebooktime = prompt("how many hours did facebook give you");
var check = (googlepay * googletime) + (amazonpay * amazontime) +
    (facebooktime * facebookpay);
alert('check is' + check)


var full = confirm("is there room in class");
var max = confirm("are you able to attend on time")
alert(!full && !max);


var bought = prompt("number bought");
var normal = confirm("is offer still valid");
var premium = confirm("do you have premium");

alert ((bought) > 2 || premium) && !normal;



