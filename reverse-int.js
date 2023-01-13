const revInt = (num) => {
              //method 1 lenthy
       
              // let myRev = num.toString();
              // console.log(myRev);
              // console.log(typeof myRev);
       
              // let abc = myRev.split("");

              // let xyz = abc.reverse();

              // let myrev = xyz.join("");
              
              // return myrev;

              //method 2

              let myRev = num.toString().split("").reverse().join("");
              // console.log(myRev);
              // console.log(typeof myRev);
              return myRev;
       

}

let reverseNum = revInt(123);

console.log(reverseNum);


//for both -ve numbers and +ve number

const revNegInt = (num) => {
       let myRev = num.toString().split("").reverse().join("");
       if(myRev.endsWith("-")){
              myRev = "-" + myRev;
              return parseInt(myRev)

       }else{
              return parseInt(myRev)
       }

       
}

const num = revNegInt(-123);

console.log(num);

