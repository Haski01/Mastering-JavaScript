// *************************** <object singleton/constructor> **************

// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "mohammad",
      lastname: "asad",
    },
  },
};

// console.log(regularUser["fullname"]["userfullname"]["firstname"]); // mohammad
// console.log(regularUser.fullname.userfullname.lastname); // asad

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = Object.assign({}, obj1, obj2, obj4); // ( concat all object )

// const obj3 = { ...obj1, ...obj2, ...obj4 }; // ( spread method to concat object )

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "s@gmail.com",
  },
  {
    id: 3,
    email: "a@gmail.com",
  },
  {
    id: 4,
    email: "d@gmail.com",
  },
];

// console.log(users[3].email);

// console.log(tinderUser); //  { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); //  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //  [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // "true" if property exist


// ************** [de-structure and JSON Api] **************
const course = {
  coursename: "javaScript",
  price: "999",
  courseInstructor: "asad",
};

const { courseInstructor: instructor } = course; // use courseInstructor as instructor

// console.log(courseInstructor); // ERROR: couseInstructor is not define
// console.log(instructor);


//***************** * [JSON data] *******************
// {
//     "name": "asad",
//     "coursename": "javaScript",
//     "price": "888"
// }

// [{}, {}, {}];
