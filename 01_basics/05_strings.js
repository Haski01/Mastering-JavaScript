const name = "asad"
const repoCount = 70

// console.log(name[0]); // output => a


// console.log(name + repoCount + " Value"); // Old Method to Concatinate string
 
// > "String interpolation" new method
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


const gameName = new String('asad-ad-com')
// console.log(gameName);

// console.log(gameName[0]); // output => a
// console.log(gameName.__proto__); // output => {}

// console.log(gameName.length); // output => 11
// console.log(gameName.toUpperCase()); // output => ASAD-AD-COM
// console.log(gameName.charAt(2)); // output => a
// console.log(gameName.indexOf('m')); // output => 10

const newString = gameName.substring(0, 4)
// console.log(newString); // output => asad

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); // output => as

const newStringOne = "   asad    "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // remove starting & end space

const url = "https://asad.com/asad%20shah"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('asad')) // true (check its available or not)

const gameName2 = new String('asad-ad-com')
console.log(gameName2.split('-'));