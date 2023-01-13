function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
     var strSplit = str.split(' ');
  // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
  // Step 2. Initiate a variable that will hold the length of the longest word
     var longestWord = 0;
     var longestword = ''
  // Step 3. Create the FOR loop
     for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
	longestWord = strSplit[i].length; // ...then longestWord takes this new value
     longestword = strSplit[i]
     }
}
     /* Here strSplit.length = 9
     For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
     1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
     2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
     3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
     4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
     5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
     6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
     7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
     8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
     9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
     10th iteration:       9             no               
     End of the FOR Loop*/
  //Step 4. Return the longest word
  return  longestword; // 6
}

const ans = findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(ans);


//using reduse method

function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
     var strSplit = str.split(' ');
  // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

  // Step 2. Use the reduce method
     var longestWord = strSplit.reduce(function(longest, currentWord) {
     if(currentWord.length > longest.length)
          return currentWord;
     else
          return longest;
     }, "");

/* Reduce process
currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   var longestWord
"The"             ""                  3                     0                              yes                          "The"
"quick"           "The"               5                     3                              yes                         "quick"
"brown"           "quick"             5                     5                              no                          "quick"
"fox"             "quick"             3                     5                              no                          "quick"
"jumped"          "quick"             6                     5                              yes                         "jumped"
"over"            "jumped"            4                     6                              no                          "jumped"
"the"             "jumped"            3                     6                              no                          "jumped"
"lazy"            "jumped"            4                     6                              no                          "jumped"
"dog"             "jumped"            3                     6                              no                          "jumped"
  */

  // Step 3. Return the length of the longestWord
  return longestWord; // var longestWord = "jumped" 
                             // longestWord.length => "jumped".length => 6
}

const longstr = findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(longstr);