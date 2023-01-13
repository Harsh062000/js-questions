function a(){
       for(var i = 0; i < 3; i++){
              setTimeout(function log(){
                     //console.log(i);
              }, i * 1000);
       }
}

a()

// in above code var is used so var use function scope so it referce to its memory location
//
//so in 1st iteration i is 0 but its referance is stored not value i is 1
//same for 2nd iteration i is 2
//same for 3rd iteration i is 3
//so it reterns 3 3 3

//to resolve this problem we use let insted of var

function b(){
       for(let i = 0; i < 3; i++){
              setTimeout(function log(){
                     console.log(i);
              }, i * 1000);
       }
}

b()
