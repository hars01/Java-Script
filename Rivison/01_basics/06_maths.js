const score = 400
console.log(score);
console.log(typeof score);

const balance = new Number(100)
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));
console.log(typeof balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toString().length);
console.log(otherNumber.toPrecision(4));
console.log(typeof otherNumber.toPrecision(4));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // always round up
console.log(Math.floor(4.9)); // always round down
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 to 0.999999
console.log((Math.random()*10) + 1); // 1 to 10.99999
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random number between min and max including both