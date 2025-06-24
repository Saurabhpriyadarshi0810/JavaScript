// this  is a question for finding factorial of a number by for loop//

let a = 10
 function factorial(num){
    let array = Array.from(Array(num+1).keys())
    let c = array.slice(1,).reduce((a,b)=>{
        return a*b;

 })
 return c  }

 factorial(a)