// ----------------------------- [forEach] -------------------------

// -> The forEach() method is used to loop through elements of an array and execute a function once for each item.

// -------------------------- [syntex]

/*
array.forEach(function (item, index, array) {
  code to execute
});
*/

/*
[Parameters] 

item: the current element
index (optional): the index of the current element
array (optional): the array itself
*/

// ---------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  //   console.log(val);
});

// ----------------- [forEach with arrow function]
const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
  //   console.log(`${num}`);
});

// -------------------[passing function refference as a parrameter]

function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe);

// --------------------------- [other parameter excess in forEach loop]

coding.forEach((item, index, arr) => {
  //     console.log(item, index, arr);
});

// ---------------------- [for...each with array of object]

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  //   console.log(
  //     `languageName: ${item.languageName}, langFileName: ${item.languageFileName}`
  //   );
});
