// we use console.time() to check how long it takes to complite the task

//argument must be same for both console.time(...) and console.timeEnd(...)

// referance from factorial file

let num = 5

console.time('code time')

for(let i = num; i > 1;){
       i = i - 1;
       let fact = num * i;
       num = fact
}

console.log(num);

let ans

// for(let fact = 1; num > 1; num--){
//        fact = fact * num
//        ans = fact

// }

// console.log(ans);

console.timeEnd('code time')


