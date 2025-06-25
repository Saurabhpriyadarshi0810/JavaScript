// print using for loop

// for (let i = 1; i <= 7; i++) {
//   console.log("Saurabh Priyadarshi");
// }

// sum of 1 to n using for loop

// let sum = 0;
// let num = prompt("enter  the last number:");
// for (let i = 1 ; i <= num ; i++){
//     sum  =  sum + i ;
// }
// console.log(`sum of 1 to ${num} = ${sum}`);

// sum of 1 to n using  while loop

// let sum1 = 0;
// let num1 = prompt("enter  the last number:");
// let a = 1;
// while (a <= num1) {
//   sum1 = sum1 + a;
//   a++;
// }
// console.log(`sum of 1 to ${num1} = ${sum1}`);

// do while loop

// let p = 1;
// do {
//   console.log("thank you Apna college for this lecture.");
//   p++;
// } while (p < 7);



// for of is  basically used to apply loop on strings and array;


// let str = "Saurabh Priyadarshi";
// let size = 0;
// for (i of str){
//     console.log("i = ",i);
//     size++;
// }
// console.log("String size =",size);

// for  in loop is used for array and object 

// let student  = {
//    fullname : "Saurabh Priyadarshi",
//    Roll : 34 ,
//    sem : 2,
// };

// for (let key in  student){
//     console.log("key =",key ,"value =",student[key]);
// }


//Ques 01 : print even number from 0 to 100

for (let number = 0  ; number <=100 ; number++){
    if (number % 2 == 0 ){
        console.log(number);
    }
}