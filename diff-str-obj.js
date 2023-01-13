let myName = "vinod thapa";

//myName = "thapa technical"; if this would have given the exact result which is "thapa technical"

let channelName = myName;

myName = "thapa technical";

console.log(channelName);//this is because pass by value  

//sice objects comes under non-primitive data type there for this is possible

const obj1 = {
       id:1,
       name:"vinod"
}//pass by referance

const obj2 = obj1;//obj1 and obj2 has same memory referance there for it is possible to change both object using
//any single object

obj2.name = "thapa technical";

console.log(obj1);


