// //learning asyncronus type of programming:-

// console.log("first");
// console.log("second");
// console.log("third");
// setTimeout(() => {
//   console.log("hello");
// }, 2000); // here time-out is  in mili second
// console.log("fourth");
// console.log("fifth");


// //showing the problem of callback

// function getdata(dataId, getnextdata) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     resolve("sucess")
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }

// // callback hell

// getdata(1, () => {
//   console.log("getting data 2......");

//   getdata(2, () => {
//     console.log("getting data 3......");

//     getdata(3, () => {
//       console.log("getting data 4......");

//       getdata(4, () => {
//         console.log("getting data 5......");

//         getdata(5);
//       });
//     });
//   });
// });


// //learning catch and then in promise:-

// const generatePromise = ()=>{
//     return new Promise ((resolve , reject )=>{
//         console.log("i am a new promise");
//         // resolve("it is a sucess")
//         reject("it's an error ")
//     })

// }

// let hi = generatePromise();
// hi.then((result)=>{
//     console.log("promise ko fulfill kar diya gaya hai ",result)
// })

// hi.catch((error)=>{
//     console.log("promise ko fulfill  nahi kar paye  hai ",error)

// })

// //learning promise chain basics:-

// function asyncro1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("sucess");
//     }, 4000);
//   });
// }


// function asyncro2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("sucess");
//     }, 4000);
//   });
// }

// console.log("fectching data 1............");
// p1 = asyncro1();
// p1.then((result) => {
//   console.log(result);
//   console.log("fectching data 2............");
//   p2 = asyncro2();
//   p2.then((result) => {
//     console.log(result);
//   });
// });

// // // Promise  is  to  solve  the problem of callback hell

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise ");
//     // resolve("item has delivered ");
//     reject("there is a error ")
// })

// function getdata (dataId , nextdata){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log("data is ",dataId);
//             // resolve("it is a sucess")
//             reject("some error caused")
//             if(nextdata){
//                 nextdata()
//             }
//         },4000)
//     })
// }

//solving the problem of callback hell with promise chain

function getdata(dataId) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log("data is", dataId);
       resolve("sucess");
     }, 5000);
   });
}
// solving it with async await:-



async function gettingdata(){
  console.log("getting data 1.....")
  await getdata(1);
  console.log("getting data 2.....")
  await getdata(2);
  console.log("getting data 3.....")
  await getdata(3);
  console.log("getting data 4.....")
  await getdata(4);
  console.log("getting data 5.....")
  await getdata(5);
  console.log("getting data 6.....")
  await getdata(6);
}

// i am going to create iife which will help me in call it without calling
(async function (){
  console.log("getting data 1.....")
  await getdata(1);
  console.log("getting data 2.....")
  await getdata(2);
  console.log("getting data 3.....")
  await getdata(3);
  console.log("getting data 4.....")
  await getdata(4);
  console.log("getting data 5.....")
  await getdata(5);
  console.log("getting data 6.....")
  await getdata(6);
})();








// promise chain

// getdata(1).then((result) => {
//   console.log(result);
//   getdata(2).then((result) => {
//     console.log(result);
//   });
// });

// getdata(1)
//   .then((result) => {
//     return getdata(2);
//   })
//   .then((result) => {
//     return getdata(3);
//   })
//   .then((result) => {
//     console.log(result);
//   });

