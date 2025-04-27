// [imp points]
// > when we create object using "literals" then "singleton never create"
// > or when we create object using "Constructor" then "singleton create"

// const myObj = new Object() // singleton object (create using Constructor)
// const myObj = {} // non-singleton object (create using literal)

// singleton/ constructor
// Object.create => contructor method

//************************* <Object literals> **************************
const mySym = Symbol("key1");

const JsUser = {
  name: "Asad",
  "full name": "Mohammad Asad",
  [mySym]: "mykey1", // excess symbol
  age: 18,
  location: "Jaipur",
  email: "asad@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]); // pass value as string bcz key convert into string in behind or auto..
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "asad@chatgpt.com";

// Object.freeze(JsUser); // lock object

// JsUser.email = "asad@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // "this" use to refrence same object
};

JsUser.greeting();
JsUser.greetingTwo();
