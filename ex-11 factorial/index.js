// this  is a question for finding factorial of a number by for loop//

let number = prompt("Enter a number to find its factorial:");

let factorial = 1 ;
for (let i = 1 ; i<= number ; i++){
    factorial = factorial * i;
}

console.log(`The factorial of ${number} is ${factorial}`);

alert(`the factorial of the ${number} is ${factorial}`);