const users = [
    {
        name: 'Oleh',
        age: 54,
        gender: 'male',
        email: 'oleg@gmail.com'
    }
];

for (const {name, age, gender, email} of users) {
    console.log(`${name} is ${age} years old with ${gender} gender. Email for contact: ${email}`)
};