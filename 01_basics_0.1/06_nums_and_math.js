const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // output => 3 
// console.log(balance.toFixed(2)); // output => 100.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // output => 123.9 (return string)

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // (convert into indian standard)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // output => 4 (absolute value) 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // => value in between 0-1 
// console.log((Math.random()*10) + 1); => value in between 1-10 & +1 use to avoid 0   
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) => value in between 10-20 