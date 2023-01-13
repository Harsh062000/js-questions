const ar = [3,2,5,9,1,0];

for(let i = 0; i<ar.length; i++){
       for(let j = 1+i; j< ar.length;j++){
              if(ar[i]<ar[j]){
                     let temp = ar[i];
                     ar[i] = ar[j];
                     ar[j] = temp;
              }
       }
}

console.log("elements of an array sort");

for(let i = 0; i<ar.length;i++){
       console.log(ar[i]);
}

// const arr = ar.sort()
// console.log(arr);