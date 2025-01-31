import chalk from 'chalk';

let greenRegularText = 'Текст зеленого кольору';
let blueBoldText = 'Жирний синій текст';
let redUnderlineText = 'Червоний текст із андерлайн';

console.log(chalk.green(greenRegularText));
console.log(chalk.blue.bold(blueBoldText));
console.log(chalk.red.underline(redUnderlineText));