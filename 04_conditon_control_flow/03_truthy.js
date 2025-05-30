// ----------------------------[falsy values]
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ----------------------------[truthy values]
// "0", 'false', " ", [], {}, function(){}

const userEmail = []; // return true

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

// --------------------- Nullish Coalescing Operator (??): made for "null & undefined"

let val1;
val1 = 5 ?? 10; // output 5
val1 = null ?? 10; // output 10 (safety check)
val1 = undefined ?? 15; // output 15 (safety check)
val1 = null ?? 10 ?? 20; // 10

// console.log(val1);

// ---------------------- [Terniary Operator]

// condition ? true :  false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
