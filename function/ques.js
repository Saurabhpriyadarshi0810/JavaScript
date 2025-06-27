// // count vowel
// function countvowel(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] == "a" ||
//       string[i] == "e" ||
//       string[i] == "i" ||
//       string[i] == "o" ||
//       string[i] == "u" ||
//       string[i] == "A" ||
//       string[i] == "E" ||
//       string[i] == "I" ||
//       string[i] == "O" ||
//       string[i] == "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// let string = prompt("enter word");
// console.log(string);
// let vowels = countvowel(string);
// console.log(vowels);

// // arrow function for the above ques :-

// const countarr = (string) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] == "a" ||
//       string[i] == "e" ||
//       string[i] == "i" ||
//       string[i] == "o" ||
//       string[i] == "u" ||
//       string[i] == "A" ||
//       string[i] == "E" ||
//       string[i] == "I" ||
//       string[i] == "O" ||
//       string[i] == "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// // for each is a high oreder method because it  can take  a fuction as its input

// let square = [1, 2, 3, 44, 5, 6, 7, 8, 9];

// square.forEach((element) => {
//   console.log(element ** 2);
// });

// let ram = square.map((value) => {
//   return value - 2;
// });

// console.log(ram);

let fill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 74, 75, 8945];

let filter = fill.filter((val) => {
 return val % 2 === 0;
 
});

console.log(filter);