// ***************** <Array part2> ******************** 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 
// // treated dc_heros as an single element

// console.log(marvel_heros); // output => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); 


const all_new_heros = [...marvel_heros, ...dc_heros] // spread method
// => concatinate many arrays at once 
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);
// console.log(typeof real_another_array);  //object



// console.log(Array.isArray("asad"))  // false
// console.log(Array.from("asad")) // convert into array
// console.log(Array.from({name: "asad"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100,200,300]