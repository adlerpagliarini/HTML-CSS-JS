let cars = new Array('1-Ka', '2-Civic', '3-New Civic');

console.log('pop', cars.pop(), cars);
console.log('unshift', cars.unshift('4-Corsa'), cars);
console.log('shift', cars.shift(), cars);

cars = ['1-Ka', '2-Civic', '3-New Civic', '4-Corsa'];
let pos = cars.indexOf('2-Civic');
console.log('splice', cars.splice(pos, 1), cars);

pos = cars.indexOf('1-Ka');
console.log('splice', cars.splice(pos, 0, '2-Civic'), cars); //0 Adiciona //1 Substitui

/***********************sort*/
let carsWithPrice = new Array(
    {modelo: '1-Ka', price: 5000},
    {modelo: '2-Civic', price: 2000},
    {modelo: '3-New Civic', price: 3000}
);

//must return <= 0 =>
//negative A first B second
//positive B first A second
carsWithPrice.sort((a,b) => {
    return a.price - b.price;
});

console.log(carsWithPrice);