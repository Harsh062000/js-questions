//const chalk = require('chalk');

function getSum(a){
       return function (b){
              return function (c){
                     return function (d){
                            return function (e){
                                   return (a+b+c+d+e);
                                   }
                            }
                     }
              }
       }

const sum = getSum(5)(4)(3)(2)(1);
console.log(sum);




