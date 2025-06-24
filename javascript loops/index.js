// // there are five types of loop in javascript

// // for loop(syntax):-
// //for (let index = 0; index < array.length; index++) {
// //  const element = array[index];
// //}

// let a = 1;
// for (let i = 0; i < 100; i++) {
//   console.log(a + i);
// }

// //for in loop (syntax):-
// // for (const key in object) {
// //     if (Object.prototype.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
// //     }
// // }

// let obj = {
//   name: "saurabh",
//   role: "programmer",
//   company: "Amazon",
// };

// // for (const key in obj) {
// //   {
// //     const element = obj[key];
// //     console.log(key,element);
// //   }

// // }

// for (const key in obj) {
//     console.log(key);
// }

// //for of (syntax):-
// //for (const element of object) {

// //}

// for (const c of "Saurabh Priyadarshi") {
//     console.log(c);
// }

// // while loop:-

// let i = 5;
// while (i<25) {
//     console.log(i);
//     i=i+5
// }

//do while loop :-

let i = 6;

do {
  console.log(i);
  i++;
} while (i < 6);
