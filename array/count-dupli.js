const counts = {};
const sampleArray = [1,2,3,4,5,5,6,6,6];
sampleArray.forEach(function (x) { 
       counts[x] = (counts[x] || 0) + 1; 
});
console.log(counts)



const a = [4,3,6,3,4,3]

function count_duplicate(a){
       let counts = {}

       for(let i =0; i < a.length; i++){ 
              if (counts[a[i]]){
              counts[a[i]] += 1
              } else {
                     counts[a[i]] = 1
              }
       }  
       for (let prop in counts){
              if (counts[prop] >= 2){
              console.log(prop + " counted: " + counts[prop] + " times.")
              }
              if(counts[prop] == 1){
                     console.log(prop + " counted: " + counts[prop] + " times.")
              }
       }//2nd for loop is not nesessory
       console.log(counts)
}
count_duplicate(a)






