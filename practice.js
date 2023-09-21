//const half = (number) => number / 2;




// function isEven(num) {
//     // if (num % 2 == 0) {
//     //     return true;
//     // }
//     // return false;

//     return(num % 2 == 0);
//     // for (let i = 0; i < num.length; i++) {
//     //        num != 0; 
//     //}
// }

// console.log(isEven(4))

//anonymous function
// const isEven =  function(number) {
//     return (number % 2 === 0);
// }

// console.log(isEven(4))

//arrow version
//if only accepting one parameter, don't need () around it
// const isEven3 = (num) => num % 2 === 0;

// () => sum(a, b) ; {
//     sum = 0;
//     let sum = a + b;
// }

// console.log(sum(3, 4));
// console.log(isEven3(5));
// console.log(isEven3(11));

//write an ARROW function that takesa string 'name' as
//a parameter and returns a greeting that says 'Hello [name]!'

const greeting = person => `Hello ${person}!`;
console.log(greeting("Will"));
