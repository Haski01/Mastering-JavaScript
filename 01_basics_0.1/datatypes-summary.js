// There are two types of datatypes
// 1. Primitive (call by value) 
// 2. Non-Primitive (call by reference)


// --> Primitive Datatypes (call by value)  
// 1. Number -> number
// 2. String -> string
// 3. Undefined -> undefined
// 4. Null -> object
// 5. BigInt -> bigint
// 6. Boolean -> boolean
// 7. Symbol -> symbol


const score = 100
const scoreValue = 100.3

// console.log(typeof scoreValue); // number


const isLoggedIn = false // type boolean
const outsideTemp = null // type object

let userEmail;
// console.log(typeof userEmail); // undefined


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false (bcz of strict checking by datatype)
// console.log(typeof anotherId); // symbol

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber); // bigint 


// --> Non Primitive Datatypes  (call by reference)
// 1. Object -> object
// 2. Array -> object
// 3. Function -> function

// Reference (Non primitive)
const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros); // object

let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(typeof myObj); // object


const myFunction = function(){
    console.log("Hello world");
}
// console.log(typeof myFunction); // object function


// https://262.ecma-international.org/5.1/#sec-11.4.3


// ************************************************************
//  [!Memory management in javaScrpt]

// 1. Stack (Primitive) => return copy 
// 2. Heap (Non-Primitive) => return refrence


// 1. Stack memory management
let name = "asad"
let anotherName = name
anotherName = "Mohammad Asad"

// console.log(name); // asad
// console.log(anotherName); // Mohammad Asad


// 2. Heap memory management
let userOne = {
    name: "asad",
    age: 18
}

let userTwo = userOne;
userTwo.name = "arshad"

// console.log(userOne.name); // arshad
// console.log(userTwo.name); // arshad





