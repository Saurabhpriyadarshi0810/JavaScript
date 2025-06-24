function grace(name) {
    console.log("hey "+ name + " you are nice");
    console.log("hey "+ name + " you are good");
    console.log("hey "+ name + " you are tshirt is nice too");
    console.log("hey "+ name + " you are boy");
    
}
grace("saurabh")

function sum (a , b) {
    //console.log(a+b)
    return a+b ;
}

let result = sum(5,23);

console.log("the sum of two numbers:",result);
console.log("the sum of two numbers:",sum(2,25558));

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);