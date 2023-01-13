const names = ['neel', 'prakash', 'vijay', 'pradeep'];

//time complexity O(n)

for(let i = 0; i < names.length; i++){
       console.log(names[i]);
}

//for-IN loop gives index numbers
//this loop will give result as 0,1,2,3 

for( let elements in names){
       //console.log(elements);
}

//for-Of loop gives the value of elements in the array

for( let elements of names){
       //console.log(elements);
}

