// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     if( numbers[i] % 2 === 0) {
//         newArray.push(numbers[i]);
//     }
// }

// console.log(newArray);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.filter(num => num % 2 === 0);

console.log(newArray);