const myArray = [1, 2, 3, 4, 5];

function mutateArray(nums) {
    return nums.map((num, index) => num * index);
}

const mutatedArray = mutateArray(myArray);
console.log(mutatedArray);