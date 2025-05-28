// ------------------------------- [while & do while loop] ------------------------

// ------------------ [while]

let index = 1;
while (index <= 10) {
  //   console.log(`Value of index is ${index}`);
  index = index + 2;
}

// --------------------- [while loop with array]

let myArray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
  //   console.log(`values are "${myArray[arr]}"`);
  arr = arr + 1;
}

// ---------------------- [do-while]

let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
