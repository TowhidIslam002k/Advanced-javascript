const numbers = [7, 9, 4, 2, 6, 1];

const square = numbers.map(t => t * t);
console.log(square);

const bigger = numbers.filter(t => t >= 2);
console.log(bigger);

const nextNumber = numbers.find(t => t > 7);
console.log(nextNumber);



//working in object proparty with map.
const students = [
    {name: 'Towhid', roll: 01},
    {name: 'Saiful', roll: 02},
    {name: 'farhan', roll: 03}
];

const rolls = students.map(t => t.roll);
console.log(rolls);

const bigger2 = students.filter(t => t.roll > 1);
console.log(bigger2);