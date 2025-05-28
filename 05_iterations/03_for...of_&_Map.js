// ---------------------- [for...of Loop] --------------------
// -> The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

// ["", "", ""]
// [{}, {}, {}]

// ------------ [syntex]
// for (const item of iterable) {
//   // code to run on each item
// }

// -------------------- [for...of with array]
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  // console.log(fruit);
}
// Output:
// apple
// banana
// cherry

// ------------------------ [for...of with string]
const greetings = "Hello world!";

for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  // console.log(`Each char is ${greet}`);
}

// ------------------------------- [Maps] -------------------------

// -> Map objects are collections of key-value pairs. A key in the Map may only occur once; it is "unique" in the Map's collection. (serarch in chatgpt or mdn for more information..)

const map = new Map(); // Creating a Map

// [Adding values to a Map]
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // this can'nt print bcz of map has property of uniqueness

//  [Accessing values]

// console.log(map.get("USA")); // United States of America
// console.log(map.get("age")); //  'undefined' bcz age key not occure

// [Checking if a key exists]
// console.log(map.has("IN")); // true
// console.log(map.has("age")); // false

// [Removing a key]
// map.delete("IN");

// [Getting the size]
// console.log(map.size);  // 2 (if IN item was deleted)

// [Looping through a Map]
for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// ------------------------ through error "myObject is not itterable with for...of loop"
// [note] :- for...of loop not iterabe or working with object but another loop does which is for...in
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// [looping through a object]
// for (const obj of myObject) {
//   console.log(key, ":-", value);
// }
