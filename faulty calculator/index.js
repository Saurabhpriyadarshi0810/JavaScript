let random = Math.random();

let a = prompt("enter the first number :");
let b = prompt("enter the second number :");
let c = prompt("enter the operations:");

let obj = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**",
};

if (random >.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
  c = obj[c];
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);

}