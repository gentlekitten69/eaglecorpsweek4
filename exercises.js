//map methods
//gives us a way to apply a single function to every element in an array
//or to have a function that applies things to some elements of an array
// based on specific criteria

//let nombres = ["Will", "Lucas", "Abraham", " Li", "Kenpachi"];

// function greet(person) {
//     console.log(`Hello ${person}!`);
// }

// for (let person of nombres) {
//     greet(person);
// }

//with map
// nombres.map(person => console.log(`Hello ${person}!`));

//only want to greet people wth names longer than 4 characters
// nombres.map((person) => {
//     if (person.length > 4) {
//         console.log(`Hello ${person}!`);
//     }
// })

// let grades = [99.2, 87.5, 56.1, 88.7, 93.8];

// let roundedGrades = grades.map(grade => Math.round(grade));

// console.log(roundedGrades)

//isPalindrome

const isPalindrome = string => string === string.split('').reverse().join('');

let myString = "a man a plan panama";
let myStringSplit = myString.split('');
let myStringSplitReverse = myStringSplit.reverse();

console.log(myStringSplit);

