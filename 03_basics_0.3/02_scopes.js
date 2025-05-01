// scope in browser or scope in code environment both scopes act differently means both scooes are different 

// global scope
let a = 300;
let b = 900;
var c = 800;
// global scope

// [!NOTE] => Avoid to use "var"

if (true) {
  // conditional scope
  let a = 10;
  const b = 20;
  var c = 1000;
  // conditional scope
  console.log("INNER a: ", a); // 10
  console.log("INNER b: ", b); // 20
  console.log("INNER c: ", c); // 20
}

console.log(a); // 300
console.log(b); // 900
console.log(c); // 1000

//                          [Functional scope]

function one() {
  const username = "asad";

  function two() {
    const website = "asad";
    console.log(username);
  }
  // console.log(website);

  // two();
}

// one()

if (true) {
  const username = "asad";
  if (username === "asad") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));

function addone(num) {
  return num + 1;
}

// addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
