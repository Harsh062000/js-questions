const str = 'i have learned something new today';
const arr = str.split(" ");
console.log(arr);//['i', 'have', 'learned', 'something', 'new', 'today']
for (var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log(str2);


function findLongestWord(str) {
       var strSplit = str.split(' ');
       var longestWord = 0;
       var longstr = '';
       for(var i = 0; i < strSplit.length; i++){
              if(strSplit[i].length > longestWord){
	              longestWord = strSplit[i].length;
                     longstr = strSplit[i]
              }
       }
       return longstr;
}
const ans = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(ans);
