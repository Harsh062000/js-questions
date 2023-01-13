console.log(400.4 === 200.2 * 2);//true

console.log(900.9 === 300.3 * 3);//false

//all numeric type in js are IEEE-754 doubles

//js treats decimals as floating point numbers, which means operations like addition
// might be subject to rounding error

//javascript uses IEEE 754 standrd for math it makes use of 64-bit floating numbers. this causes precision error
//when doing floating point (decimal) calculation in shaort, due to computers working in base 2 
//while decimal is base 10

console.log((300.3 * 10 * 3) / 10); //900.9

