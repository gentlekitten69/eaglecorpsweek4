//arrow function
//normal function
// function double(number) {
//     return number * 2;
//     }

//  let value1 = double(5);
//  let value2= double(0.3);
 
// console.log(value1);
// console.log(value2);

//annymous function
//the actual function is the part AFTER the equal sign
//it does not technically have its own name
//we are storing in the variable called triple
//which effectively gives it a name
const triple = function(number) {
    return number * 3;
}
console.log(triple(3), triple(4));


const quadruple = (number) => {
    return number * 4;
}

console.log(quadruple(10), quadruple(.5));
