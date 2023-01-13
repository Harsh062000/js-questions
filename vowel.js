//const chalk = require('chalk')

const findVowel = () => {
       let char = "A"

       char = char.toLocaleLowerCase();
       
       if(char == 'a' || char == 'e' || char == 'i' ||char == 'o' || char == 'u'){
              console.log('char is a vowel');
       }else{
              console.log('char is not a vowel');
       }
}

findVowel();