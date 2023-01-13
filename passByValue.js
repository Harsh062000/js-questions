let a = 5;
let b = a;

console.log(a);//5
console.log(b);//5 coz this both are premitive data type

let obj1 = {
       name:"vinod",
       pass:"thapa"
}

let obj2 = obj1;

console.log(obj1);// same output
console.log(obj2);// same output as obj2
//coz they are non-premitive data type and they use pass by referance
//object, array are non-primitive datatype
