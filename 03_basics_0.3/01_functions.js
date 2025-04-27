function sayMyName() {
  console.log("A");
  console.log("S");
  console.log("A");
  console.log("D");
}

// sayMyName // => refrence
// sayMyName();  // => execution

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

// let sum = addTwoNum(3, 4);
// console.log(result); // undefined

function addTwoNumbers(num1, num2) {
  //   let result = number1 + number2
  //   return result
  return num1 + num2;
}

// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result); // 8

function loginUserMessage(username = "sam") {
  if (!username) {
    return "Please enter a username";
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("asad"));  //=> asad just logged in
// console.log(loginUserMessage()); //=> sam just logged in

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // => [500,2000]

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
// handleObject({
//   username: "sam",
//   price: 399,
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
