const num = 30;

let x = 0;
let y = 1;

let fn = x + y;

console.log(x);

while(num >= fn){
       console.log(fn);
       fn = x + y;
       x = y;
       y = fn;
}