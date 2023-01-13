let num = 10;
let isPrime = true;

for(let i = 2; i < num; i++){
       if(num % 2 == 0){
              isPrime = false
       }
}

if(isPrime == true){
       console.log(`${num} is a prime number`);
}else{
       console.log(`${num} is not a prime number`);
}

