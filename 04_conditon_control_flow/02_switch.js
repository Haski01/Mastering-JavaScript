// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

//                      [note]

// 1. break keyword is important in switch.
// 2. missout break in any case execute code whole untill found break..
// 3. missout break execute whole code except default

const month = "march";

switch (month)  { 
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
