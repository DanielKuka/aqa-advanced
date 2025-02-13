console.log('\n');
let myNumber1 = 4;

console.log(`Таблиця множення для числа ${myNumber1} (цикл for):`);
for (let i = 1; i <= 10; i++) {
  console.log(`${myNumber1} × ${i} = ${myNumber1 * i}`);
}

console.log('\n');

let i = 1;
console.log(`Таблиця множення для числа ${myNumber1} (цикл while):`);
while (i <= 10) {
    console.log(`${myNumber1} x ${i} = ${myNumber1 * i}`)
    i++;
}