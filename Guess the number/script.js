let gamenumber = 14;
console.log(gamenumber);

let usernumber = prompt("guess the number  ");
console.log(usernumber);

while (gamenumber != usernumber) {
  usernumber = prompt("You entered  wrong number. Guess Again ");
}
console.log("congratulation , you entered right number");
alert("congratulation , you entered right number");
