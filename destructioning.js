//destructuring
//allows you to 'unpack' values from arrays or properties from objects
//into distinct variables. can make code more readable and manageable
//by avioding needing to access values with indices or keys every single time

//array destructuring
// const fruits = ["apples", "banana", "cherry", "durian", "elderberry"];

// //'old' way
// // const firstFruit = fruits[0];
// // const secondFruit = fruits[1];
// // const thirdFruit = fruits[2];
// // const fourthFruit = fruits[3];
// // const fifthFruit = fruits[4];

// //with destructuring
// const [a, b, c, d, e] = fruits;

// console.log(a);
// console.log(d);

//object destructuring
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

//'old' way
// const first = person.firstName;
// const last = person.lastName;
// const age = person.age;

//with destructuring
//{originalProperty: newVariable}
// const {firstName: first, lastName: last, age: age} = person;
// console.log(first, last, age);

// const person2 = {
//     name: {first: 'Bill', last: 'Joe'},
//     age: 35
// }

//const {personName: {personFirst, personLast}, personAge} = person2

//simulating API data
// const user = {
//     id:1,
//     name: "Bill Fo",
//     address:{
//         street: '123 Main St',
//         city: 'Farm'
//     }
// }

// //without destructuring:
// // console.log(user.name);
// // console.log(user.address.street);
// // console.log(user.address.city);

// const {
//     name,
//     address: {street, city}
// } = user;
// console.log(name); //instead of user.name
// console.log(street);//instead of user.address.street
// console.log(city); //instead of user.address.city

//Ex 1
// const rbg = [255, 200, 0];

// //use destructuring to log out staement that looks like:
// //red: 255, green:200, blue:0

// //
// const [r, b, g] = rbg;
// console.log(`Red: ${r}, Green ${g}, Blue ${b}`);

//use destructuring to log out statement that looks like:
//Name: Jane Doe, Age: 25, Mathematics Score: 85, English Score: 90

const student = {
    name: 'Jane Doe',
    age: 25,
    scores: {
        mathematics: 85,
        english: 90
    }
}

// const {person = student.name, year = student.age, math = student.scores.mathematics, eng = student.scores.english} = student;
// console.log(`Name: ${person}, Age ${year}, Mathematics Score: ${math}, English Score: ${eng}`);

//destructure the object
const {name, age, scores:{mathematics, english} } = student
console.log(`Name: ${name}, Age: ${age}, Mathematics: ${mathematics}, English Score: ${english}` )