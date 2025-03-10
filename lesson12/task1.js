// _________________________Завдання 4: Обчислення площі та об'єму___________________________

// __________Завдання 4.1__________
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

let radiusOfCircle = 4
let circleArea = Math.PI * radiusOfCircle ** 2

console.log('Площа кола = ', circleArea.toFixed(2))
// console.log(typeof circleArea);

// __________Завдання 4.2__________

// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let lengthOfRectangle = 6
let widthOfRectangle = 3
let rectanlgeArea = lengthOfRectangle * widthOfRectangle

console.log('Площа прямокутника = ', rectanlgeArea.toFixed(2))
// console.log(typeof rectanlgeArea);

// __________Завдання 4.3__________

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radiusOfCylinder = 5
let heightOfCylinder = 10

let cylinderVolume = Math.PI * Math.pow(radiusOfCylinder, 2) * heightOfCylinder

console.log('Обʼєм циліндра = ', cylinderVolume.toFixed(2))
// console.log(typeof cylinderVolume);

console.log('Hello World')
