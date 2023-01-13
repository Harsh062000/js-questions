var data = [
       {name: 'neel', age: 34},
       {name: 'dhiraj', age: 45},
       {name: 'pooja', age: null},
       {name: 'priya', age: undefined},
       {name: 'ram', age: undefined},
       {name: null, age: 34},
]

const newAges = data.filter((ele) => {
       
       return ele.age != undefined;
})

console.log(newAges);

//in js null == undefinde  is true
//in js null === undefinde is false

