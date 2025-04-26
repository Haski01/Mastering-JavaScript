// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // output => 1

// ********************** <Array methods> *******************

// myArr.push(6) // (add element 6 at end of array)
// myArr.push(7)
// myArr.pop() // (remove last element of array)
// myArr.unshift(9) // (add element 9 at start of array)
// myArr.shift() // (remove staring element of array)

// console.log(myArr.includes(9)); 
// => check element availabe in array or not return false if not and viseversa..

// console.log(myArr.indexOf(4));

// const newArr = myArr.join() 
// // => Adds all the elements of an array into a string, separated by the specified separator string.
// console.log( newArr);



// ***************[slice, splice]***************

console.log("Original Array A: ", myArr); // original array

const myn1 = myArr.slice(1, 3) // Return a copy of a section of an array.
console.log("applying slice method  ",myn1);
console.log("original array B: ", myArr); // nothing change in original array


const myn2 = myArr.splice(1, 3) // point out original array
console.log("apply splice method ",myn2); // Removes elements from an array also change in original array
console.log("original array C: ", myArr);