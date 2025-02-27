const person = {
    firstName: 'Kina',
    lastName: 'Lostenko',
    age: 49
};

person.email = 'someEmail@gmail.com';
delete person.age;

console.log(person);