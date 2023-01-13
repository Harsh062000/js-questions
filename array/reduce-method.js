//arr.reduce(callback(accumulator,currentValue), initialValue)
//accumulate is used to store the desiered value
//cuurent is value of current element
//initialValue is value of accumulator bit it is optional (accumulator = initialValue)


let arr = [8, 2, 3, 4, 6, 9];

let sum = arr.reduce((accum, curr) => {
       return accum + curr;
})

console.log(sum);

let mul = arr.reduce((accum, curr) => {
       return accum * curr;
})

console.log(mul);

let avg = arr.reduce((accum, curr) => {
       return sum / arr.length
})

console.log(avg);

