const car1 = {
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2015
};

const car2 = {
    brand: 'Toyota',
    model: 'Camry',
    owner: 2018
};

const car3 = { ...car1, ...car2 };

console.log(car3);