var arr1 = [4,8,10,9,5];

var arr2 = [5,10,8,9,4];

//Array.prototype.every()
//every(callback)

const is_same = arr1.length == arr2.length && arr1.every((curElement) => {
       
       if(arr2.indexOf(curElement) > -1){
              return true;   // changes
       }
})

console.log(is_same);
