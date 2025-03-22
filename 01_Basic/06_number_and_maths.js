const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

//const otherNumber = 23.8966 //-> 23.9
//const otherNumber = 123.8966 //-> 124 
//const otherNumber = 1123.8966 //->1.12e+3
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); //-> 1,000,000
//console.log(hundreds.toLocaleString('en-IN')); //-10,00,000

// ++++++++++++ Maths +++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); //->4
// console.log(Math.round(4.6)); //->5
// console.log(Math.ceil(4.2)); // -> 5
// console.log(Math.floor(4.9)); //-> 4
// console.log(Math.min(4, 3, 6, 9));
// console.log(Math.max(7, 8, 3, 1));

console.log(Math.random()); // -> give value in between 0-1
//console.log(Math.random()*10); // -> shift the value
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1); //-> to avoid 0.1 we add 1 in it


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)