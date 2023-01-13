let arrName = [
       {
              name:"vinod",
              pass:"thapa"
       },
       {
              name:"thapa",
              pass:"technical"
       }
];

console.log(arrName.indexOf({
       name:"thapa",
       pass:"technical"
}));
//object in js are never equale even if value is same
//coz obj use pass by referance