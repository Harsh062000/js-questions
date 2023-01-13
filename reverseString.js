let name = "harsh";


function reverseString(str) {
       
       var splitString = str.split(""); 

       var reverseArray = splitString.reverse(); 

       var joinArray = reverseArray.join(""); 

       return joinArray; 
}
const result = reverseString("hello");
console.log(result);

var string = "";
function reverse(str){
       for(let i = str.length - 1; i>=0 ;i--){
              string += str[i];
       }
       return string;
}

const result1 = reverse('hello');

console.log(result1);
