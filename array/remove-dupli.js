let arr = [1,12,99,2,99,2,3,4,5,23,0,10,10]
let arr1 = [1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,7,7,8,8,8,9,9,9,9]

//new Set(arr1) is Set containing all the values in arr1, which duplicates necessarily removed. then the 
//spread operator just converts this back into an array

//set always contain unique value set do not have duplicate value

let newArray = [ ...new Set(arr)]
console.log(newArray);

let newArr = [...new Set(arr1)]
console.log(newArr);


//method2


const a = [1,2,3,4,1,2]

const b = []

a.filter((dup) => {
       if(b.indexOf(a[dup])==-1){
              b.push(a[dup])
       }
})

//console.log(b);