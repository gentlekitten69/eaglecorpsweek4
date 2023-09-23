// //object notation

// const car = {
//     //key: value
//     //if the key had 'make' you would have to use the second console.log
//     make: "Toyota",
//     model: "Camry ",
//     year: 2020
// };

// // //accessing the properties
// console.log(`The make of the car is ${car.make}`);
// // //if the key is a string, must use this syntax:
// console.log(`The model of the car is ${car['model']}`);

// // //add properties
// car.mileage = 50000;
// console.log(`The car's starting mileage is ${car.mileage}`);

// // //update properties
// car.mileage = car.mileage + 10000;
// console.log(`The new mileage is ${car.mileage}`);

// //nestyed objects
// const movie = {
//     title: "A Movie",
//     director: "Someone",
//     releaseYear: 1900,
//     cast: {
//         "jon" : "Not Jon",
//         "Sam" : "Marie",
//         "Sue" : "Mark"
//     }
// }

// //who played Sam>
// console.log(movie.cast["Sam"]);

// //add a cast
// movie.cast["Randy"] = "Paul";

// console.log(movie);

//array filter method
//creates a new array of elememts that pass a specific test
//given by the provided function
// const numeros = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numeros.filter(numeros => numeros % 2 ===0);//[2]
// const oddNumbers = numeros.filter(numeros => numeros % 2 === 1);
// console.log(evenNumbers);
// console.log(oddNumbers);
//numbers.filter(isEven(number)); //if you had a separate isEven function

//filter out negative numbers
// const myNumbers = [1, -2, 5, -3, 0, 10];
// //expected out: [1, 5, 0, 10];
// const nonNegatives = myNumbers.filter(myNumbers => myNumbers >= 0);
// console.log(nonNegatives);

//filter out words shorter than 4 characters
// words = ["apple", "is", "good", "for", "you"]

// const longWords = words.filter(words => words.length >= 3);
// console.log(longWords);

//you are planning your holiday office party at a local
//nighrclub but unfortunately only employess 21+ can attend
//you have an array of employee objects each with a name and age property
//use the filter method to create an array with just the employees
//who are able to attend

const employees = [{name: 'John', age: 25},
                   {name: 'Jane', age: 20},
                   {name: 'Mike' , age: 30},
                   {name: 'Jill', age: 27},
                   {name: 'Sam', age: 19}];

const invitedEmployess = employees.filter(employee => employee.age >=21);
console.log(invitedEmployess);

const invitedNames = invitedEmployess.map(employee => employee.name);
console.log(invitedNames);