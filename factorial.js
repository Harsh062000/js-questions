let num = 7;

//method 1

// for(let i = num; i > 1;){
//        i = i - 1;
//        let fact = num * i;
//        num = fact
// }

//console.log(num);

//method 2

let ans

for(let fact = 1; num > 1; num--){
       fact = fact * num
       ans = fact

}

console.log(ans);



