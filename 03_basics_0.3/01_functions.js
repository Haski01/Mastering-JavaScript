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

//                      [RETURN IN FUNCTON]

function addTwoNumbers(num1, num2) {
  //   let result = number1 + number2
  //   return result
  return num1 + num2;
}

// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result); // 8

//                      [FUNCTION WITH STRING INTERPOLATION]

function loginUserMessage(username = "sam") {
  if (!username) {
    return "Please enter a username";
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("asad"));  //=> asad just logged in
// console.log(loginUserMessage()); //=> sam just logged in

//                       [REST OPERATOR]

function calculateCartPrice(val1, val2, ...num1) {
  // "..."Rest opertator
  //=> 200,400 taken by val1 & val2
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // => [500,2000]

//                      [FUNCTION WITH OBJECT]

const user = {
  username: "asad",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.prices}`
  );
}

// handleObject(user); //=> Username is asad and price is 199

// handleObject({
//   username: "sam",
//   price: 399,
// });

//                      [FUNCTION WITH ARRAY]

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[3];
}

// console.log(returnSecondValue(myNewArray)); //=> 600
// console.log(returnSecondValue([200, 400, 500, 1000])); //=> 1000
