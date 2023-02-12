"use strict";


// Three types of variable in javascript
// 1- var :: use in early versions of browser and its variable can be redeclare
// 2- let  ::cannot be redeclare but you can change its value. (prefer)
// 3- const  :: its value cannot be changed later
// 4- undeclare

x = 10;
console.log(x);

// var

var b = 4;
console.log(b);
var b = 3;  //its can be redeclare.
console.log(b);

// let
let c = 3;
console.log(c);
// let c = 4;  :: shows an error.


// const
const d = 12;
console.log(d);
d = 13;  // it will not run throughs an error in browser console.
console.log(d)

// String handling techniques
let name = "Hassan";
console.log(`Hello Happy programming to "${name}"`);



// IF-ELSE AND TERNARY OPERATOR

const no1 = 3;
const no2 = 4;
let sum = no1 + no2;
let condition = 3;
console.log(condition >= sum ? "hello" : "hello hassan");






