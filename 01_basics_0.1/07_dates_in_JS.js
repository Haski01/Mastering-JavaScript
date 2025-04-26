// Dates

// ******************<Date_Methods>**************
let myDate = new Date()
// console.log(myDate.toDateString());
// // to date string => Sat Apr 26 2025

// console.log(myDate.toTimeString());
// // to time string => 13:12:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleTimeString());
// // to local time string => 1:12:12 PM

// console.log(myDate.toString());
// // to string => Sat Apr 26 2025 13:12:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleDateString());
// // to local date string => 4/26/2025

// console.log(myDate.toISOString());
// // to ISO string => 2025-04-26T13:12:12.931Z

// console.log(myDate.toJSON());
// // to JSON => 2025-04-26T13:12:12.931Z

// console.log(myDate.toLocaleString());
// // to locale string => 4/26/2025, 1:12:12 PM 

// console.log(typeof myDate); // output => object


// ****************************************************

// let myCreatedDate = new Date();
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // yy-mm-dd
// let myCreatedDate = new Date("04-26-2025") // mm-dd-yy
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); // give date in mile seconds from 01-jan-1970 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",    
})

// console.log(newDate);

