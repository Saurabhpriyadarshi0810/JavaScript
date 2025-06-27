let btn = document.createElement("button");
btn.innerText ="click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
let body = document.querySelector("body");
body.prepend(btn);


let para = document.querySelector("p");
console.log(para.getAttribute("class"));
//para.setAttribute("class","newclass"); // it over right the old class name 
console.log(para.classList);
let classadded = para.classList.add("newclass");
console.log(classadded);