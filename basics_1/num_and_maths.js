const score = 400
console.log(score);

const balance =new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.8569
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const rupees = 100000000;
console.log(rupees.toLocaleString());


//****************************************** MATHS******************************************/

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.min(4,5,8,2,6));
// console.log(Math.max(4,5,7,8,9));

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) ) +min);
