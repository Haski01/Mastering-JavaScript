let score = "asad"

// console.log(typeof score); // output => string
// console.log(typeof(score)); // output => string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // output => number
// console.log(valueInNumber); // NaN(not a number)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "asad"
let test2 = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

//  console.log(typeof(booleanIsLoggedIn));  //output => boolean 
//  console.log(booleanIsLoggedIn);  // output => true
//  console.log(Boolean(test2));  // output => false


// 1 => true; 0 => false
// "" => false
// "asad" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //output => 33 
// console.log(typeof stringNumber); //output => String

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "asad"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion