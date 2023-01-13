let arr =[1,1,2,3,3,4,5,5]

const count = {}

for(const ele of arr){
       //console.log(count[ele]);
       if(count[ele]){
              count[ele] += 1;
              //console.log(count[ele]);
       }else{
              count[ele] = 1
              //console.log(count[ele]);
       }
}

console.log(count);