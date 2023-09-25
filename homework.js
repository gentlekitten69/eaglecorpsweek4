/*
Exercise 1:
Write an arrow function called findMax that takes an array of numbers and returns the maximum number.
 */

                                
// console.log(maxNumbers)
// const findMax = (numbers) => {
//     let maxNum = numbers[0];
  
//     numbers.forEach((num) => {
//       if (num > maxNum) {
//         maxNum = num;
//       }
//     });
  
//     return maxNum;
//   };
  

// //Test cases
// console.log(findMax([1, 2, 3])); // Should log 3
// console.log(findMax([-5, -10, -1])); // Should log -1
// console.log(findMax([10, 20, 10, 20, 30, 20, 10])); // Should log 30



/*
Exercise 2:
Write an arrow function concatenateStrings that takes an array of strings and a separator, 
and returns a single string made by concatenating all the strings, separated by the specified separator.
 */
// const concatenateStrings = (arr1, arr2) => {
//     return arr1.concat(arr2).join(' ');
// } 

// //Test cases
// console.log(concatenateStrings(['apple', 'banana', 'cherry'], ', ')); // Should log "apple, banana, cherry"
// console.log(concatenateStrings(['one', 'two', 'three'], ' & ')); // Should log "one & two & three"
// console.log(concatenateStrings(['first', 'second'], ' --> ')); // Should log "first --> second"



/*
Exercise 3:
Given an array of user objects, use map to create a new array called usersWithFullName containing user 
objects with an additional fullName property, which is made by concatenating firstName and lastName.
*/
const users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Michael', lastName: 'Jordan' },
  { firstName: 'Sara', lastName: 'Connor' },
  { firstName: 'Thomas', lastName: 'Edison' },
  { firstName: 'Marie', lastName: 'Curie' },
  { firstName: 'Albert', lastName: 'Einstein' },
  { firstName: 'Isaac', lastName: 'Newton' },
  { firstName: 'Galileo', lastName: 'Galilei' },
  { firstName: 'Leonardo', lastName: 'da Vinci' }
];


//your code here:
const usersWithFullName = users.map(users => {
    const fullName = `${users.firstName} ${users.lastName}`;
    return {...users, fullName};
})

//Test cases
 //console.log(usersWithFullName[0].fullName === 'John Doe'); // Should be true
// console.log(usersWithFullName[5].fullName === 'Marie Curie'); // Should be true
// console.log(usersWithFullName[6].fullName === 'Albert Einstein'); // Should be true
// console.log(usersWithFullName[9].fullName === 'Leonardo da Vinci'); // Should be true



/*
Exercise 4:
Given an array of product objects, use the map method to create a new array
called `productsWithTotalValue` containing product objects with an additional
`totalValue` property, which is calculated by multiplying `price` and `quantity`.
 */
// const products = [
//   { name: 'Widget', value: 10, quantity: 2 },
//   { name: 'Gadget', value: 20, quantity: 3 },
//   { name: 'Doodad', value: 5, quantity: 10 }
// ];

// //your code here
// const productsWithTotalValue = products.map(product => {
//      const totalValue = product.value * product.quantity;
//      return {
//         name: products.name,
//         value: products.value,
//         totalPrice: totalValue
//      };
// })

// console.log(productsWithTotalValue)
// Expected output:
// [
//   { name: 'Widget', price: 10, quantity: 2, totalPrice: 20 },
//   { name: 'Gadget', price: 20, quantity: 3, totalPrice: 60 },
//   { name: 'Doodad', price: 5, quantity: 10, totalPrice: 50 }                                                  
// ]



/*
Exercise 5:
Given an array of objects representing tasks with a completed boolean property, 
use filter to return a new array containing only the objects representing uncompleted tasks.
*/
// const tasks = [
//   { name: 'Complete JavaScript Exercises', completed: true },
//   { name: 'Attend JavaScript Workshop', completed: false },
//   { name: 'Read about Arrow Functions', completed: true },
//   { name: 'Create a Presentation on Destructuring', completed: false },
//   { name: 'Study for JavaScript Quiz', completed: false },
//   { name: 'Submit Assignment on time', completed: true },
//   { name: 'Attend Study Group on Map and Filter', completed: true },
//   { name: 'Watch Tutorial on JavaScript Basics', completed: false },
//   { name: 'Complete Practice Problems on Arrays', completed: true },
//   { name: 'Participate in JavaScript Hackathon', completed: false }
// ];
// // ​
// //your code here:
// const uncompleted = tasks.filter(tasks => !tasks.completed);

// console.log(uncompleted);
    

//Expected output:
/*
[
  { name: 'Attend JavaScript Workshop', completed: false },
  { name: 'Create a Presentation on Destructuring', completed: false },
  { name: 'Study for JavaScript Quiz', completed: false },
  { name: 'Watch Tutorial on JavaScript Basics', completed: false },
  { name: 'Participate in JavaScript Hackathon', completed: false }
]
*/


// Exercise 6
// Given an array of produce objects, use the filter method to create a new 
// array containing only the ‘Fruit’ type products that have a quantity less than 10.

// const produce = [
//   { name: 'Apple', type: 'Fruit', quantity: 10 },
//   { name: 'Carrot', type: 'Vegetable', quantity: 20 },
//   { name: 'Orange', type: 'Fruit', quantity: 5 },
//   { name: 'Celery', type: 'Vegetable', quantity: 15 },
//   { name: 'Banana', type: 'Fruit', quantity: 2 },
//   { name: 'Spinach', type: 'Vegetable', quantity: 30 },
//   { name: 'Grapes', type: 'Fruit', quantity: 8 },
//   { name: 'Lettuce', type: 'Vegetable', quantity: 5 },
// ];

// const quantity = produce.filter(produce => produce.quantity < 10 && produce.type == 'Fruit'); 
    
    

// console.log(quantity)

//Expected Output:
/*
[
  { name: 'Orange', type: 'Fruit', quantity: 5 },
  { name: 'Banana', type: 'Fruit', quantity: 2 },
  { name: 'Grapes', type: 'Fruit', quantity: 8 }
]
*/


//Exercise 7
//Given an array containing three numerical values representing the dimensions of a box (length, width, height),
//use array destructuring to assign these values to individual variables l, w, and h.
//Log the variables to verify and use them to calculate and log the volume of the box.

//  let dimensions = [30, 50, 10];

//  const [l, w, h] = dimensions 
// const volume = l * w * h;
 
 

//  console.log(`Length: ${l}, Width: ${w}, Height: ${h}, The volume is ${volume}.`);



//Exercise 8
// You are given an object representing a student, which has properties for the student's 
// first name, last name, and grades. Use object destructuring to extract these values into 
// variables. Additionally, compute and log the average grade of the student in the given format.

// const student = {
//   firstName: 'Alex',
//   lastName: 'Lee',
//   grades: {
//     math: 90,
//     science: 80,
//     english: 85
//   }
// };
// // ​
// //your code here
// const {firstName, lastName,grades: {math, science, english}} = student;
// const average = (math + science + english)/ 3;
// console.log(`${firstName} ${lastName}'s average grade is ${average}.`)

//Expected output
//"Alex Lee's average grade is 85."



//Exercise 9
//You are tasked with creating a configuration object for a simple application. 
//Your object should have the following structure and properties:

// appName (String): Representing the name of your application.
// port (Number): Representing the port on which your application will run.
// security (Object):
  // encryption (String): Representing the encryption method used.
  // apiKey (String): Representing the API key for accessing a service.
// credentials (Object):
  // username (String): Representing the username for accessing a service.
  // password (String): Representing the password for accessing a service.

//Note the tabbing indicates nesting

//Because you plan to use these values frequently in your application, use  
//object destructuring to extract appName, port, encryption, apiKey, username, 
//and password into variables.

 let config = {
    appName: 'Cookies',
    port: 8080,
    security: {
        encryption: 'AES-256',
        apiKey: 'APIKey'
  },
    credentials: {
      username: 'Kenpachi',
      password: 'PassForce'
  }
};//your code here
// ​
const { appName, port, security: { encryption, apiKey }, credentials: { username, password } } = config;//your code here
