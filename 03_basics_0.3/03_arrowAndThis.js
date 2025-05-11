// Arrow funcation and this key word in javaScript

// - in jeneral "THIS" tell about the current context..

// ****************************** [THIS with object] *********************
const user = {
  username: "asad",
  price: 999,
  welcomeMessage: function () {
    // "this" reffer the current context [In a function, this refers to the global object]
    console.log(`${this.username} , welcome to website`); // output: asad welcome to website
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

//                                   [Global this]

// console.log(this); // output => {} (bcz we are in node environment but this act diffent in browser bcz there it refferd window object)

//                                 [this with normal function]

function name() {
  let username = "asad";
  console.log(this.username); // undefined
  console.log(this); // ouput oject
}
// name();

//                      [this with "expression syntex" funciton]

const name2 = function () {
  let username = "asad";
  //   console.log(this.username); // undefined
  console.log(this); // output object
};
// name2();

//                      [this with arrow function]

const chai = () => {
  let username = "hitesh";
  console.log(this.username); // undefined
  console.log(this); // {}
};
// chai();

// ******************************* [Arrow function] ***************************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//                                  [implicit return]

// const addTwo = (num1, num2) => num1 + num2; // without parenthesis
// const addTwo = (num1, num2) => ( num1 + num2 ) // with parenthesis
// const addTwo = (num1, num2) => ({ username: "asad" }); //  with object

// [explecit return (means when we use return keyword this possible in curlly bracess only)]

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(3, 4));

//  **************************************** END *************************************
