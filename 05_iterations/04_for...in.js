// --------------------------------- [for...in loop] -------------------------
// -> The for...in loop is used to iterate over the "enumerable property" keys of an object...

// ------------------------- [for...in with object]
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

// ----------------- [ for...in with Arrays (not recommended) ]

// -> Technically, it works — but it's not best practice because it loops through all enumerable properties, not just numeric indexes.

const colors = ["red", "green", "blue"];

for (let index in colors) {
  //   console.log(`${index} : ${colors[index]}`);
}

// ---------------------------- [for...in with map]

// [note] :- for...in loop does'nt work with map bcz **for...in** is designed to iterate over the property keys of plain objects, not iterable collections like Map.

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  //     console.log(key);  // ❌ Nothing happend No keys printed.
}

/* ✅ Why?

   1. Map is an object, but it's a special one.
   2. Its keys and values are not stored as "enumerable properties" (like in normal objects).
   3. for...in "looks for enumerable string-keyed properties", and Map stores data differently — internally.

*/

// ------------------------------------------ [difference] -----------------------------

// 🆚 for...in vs for...of
// [Loop Type]	            [Use On]	               [Iterates Over]

// for...in	    Objects	                            Keys (property names)
// for...of	    Iterables (arrays, strings, maps)	  Values
