//find union and intersection of an array

const arr1 = [1,2,3,4,5]
const arr2 = [3,4,5,6,7]

const intersection = arr1.filter((curElement) => {
       return arr2.includes(curElement)
})

console.log(intersection);

//to avoid if array 2 or more common elements
//console.log([...new Set(intersection)]);

const unionArr = [...new Set([...arr1, ...arr2])]

console.log(unionArr);