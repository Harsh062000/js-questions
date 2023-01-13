// convert each  first letter to uppercase in a sentence


const str = 'i have learned something new today';

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");
//If you don’t add the space in the parenthesis, you will have this output: ['i','h','a','v','e','l',...]

//loop through each element of the array and capitalize the first letter.

console.log(arr);//['i', 'have', 'learned', 'something', 'new', 'today']

for (var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);

//Outptut: I Have Learned Something New Today



