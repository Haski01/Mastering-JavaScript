// [conditional operator]
// <, >, <=, >=, ==, !=, === (striket equal) , !==

//                              [if-else]

const temperature = 41;
// if (temperature === 40) {
//   console.log("temperature is greater than 50");
// } else {
//   console.log("less than 50");
// }
// console.log("Execute"); // EXECUTE in every case

// -------------------------(another concept)---------------------------------------

const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // undefined bcz of conditional scope

// -------------------------------(shorthand notation/ implicit scope)-----------------

const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

// -------------------------------[nesting if else-if else-if else]

const balance2 = 2000;
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

// --------------------------[ multiple checking // logical operator ]----------------

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 === "2") {
  // both statement must be true
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  // anyone statement should be true
  console.log("User logged in");
}
