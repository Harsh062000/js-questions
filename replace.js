let str = "thapa technical thapa name is viond thapa";

//console.log(str.replace("thapa", "bahadure"));
//above method give error

const newStr = str.replace(/thapa/g, 'bahadur'); //this is ragx methid /somthing/g 
//where /.../g searches inside word in whole string
console.log(newStr);
