// ---------------------------------- [reduce in js] ------------------------

// ---------- [syntex]
// array.reduce(function (accumulator, currentValue, index, array) {
//   // return updated accumulator
// }, initialValue);

// -> reduce() is used to reduce an array to a single value (like a sum, product, or combined result) by applying a function repeatedly on each element.

const num = [1, 2, 3, 4, 5];
const sum = num.reduce(function (acc, currVal) {
  //   console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 3);
// console.log(sum); // 18

// -------------- [reduce with arrow function]

const sum2 = num.reduce((acc, currVal) => acc + currVal, 0);
// console.log(sum2); //15

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

// console.log(priceToPay);
