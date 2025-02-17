// Function Declaration
function calculateArea(width, height) {
    return width * height;
}
console.log("Function Declaration:", calculateArea(5, 10));

// Function Expression
const calculateAreaExp = function(width, height) {
    return width * height;
};
console.log("Function Expression:", calculateAreaExp(5, 9));

// Arrow Function
const calculateAreaArrow = (width, height) => width * height;
console.log("Arrow Function:", calculateAreaArrow(5, 8));
