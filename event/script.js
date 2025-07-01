let btn1 = document.querySelector("#btn1");
// btn1.onclick = (obj) => {
//   console.log(obj);
//   console.log(obj.type);
//   console.log(obj.target);
//   console.log(obj.clientX);
//   console.log(obj.clientY);
// };

let div1 = document.querySelector("div");
// div1.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX);
//   console.log(evt.clientY);
// };

btn1.addEventListener("click",()=>{
  console.log("hello the button was clicked ! - by handler 1 ");
})

btn1.addEventListener("click",()=>{
  console.log("hello the button was clicked ! - by handler 2 ");
})

const handler_3 = ()=>{
  console.log("hello the button was clicked ! - by handler 3 ");
}
btn1.addEventListener("click",handler_3)

btn1.addEventListener("click",()=>{
  console.log("hello the button was clicked ! - by handler 4 ");
})

btn1.removeEventListener ("click",handler_3);