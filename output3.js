var myName = "thapa technical";

const guessMyName = ()=>{
       console.log(myName);//undefined
       var myName = "vinod thapa"
       //console.log(myName); // vinod thapa
}

guessMyName();

//hoisting is the reason behind this out put

