const numbersList = [1,10,14,2,4,5,43,34];

const copiedArray = numbersList.slice();
const sortedArray = copiedArray.sort((a, b) => a - b);

console.log(sortedArray);
console.log(numbersList);