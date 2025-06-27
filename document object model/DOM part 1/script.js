// // dom manipulation:

// //selecting with id :
// let heading1 = document.getElementById("heading");
// console.dir(heading1);

// //selecting with class :

// let color = document.getElementsByClassName("header");
// console.dir(color);
// console.dir(color);


// //selecting with tag name  :

// let tag = document.getElementsByTagName("p");
// console.log(tag);


// //selecting with Querry Selector :

// let paras =  document.querySelector("p");
// console.dir(paras);
// console.log(paras);

// let paras1 =  document.querySelectorAll(".color");
// console.dir(paras1);
// console.log(paras1);

// // properties :-

// // .tagname is  used to get tag 
// // .innerText is used  to get inner text   of element and its children




let list = document.querySelector("div");
console.log(list);
console.log(list.innerText);
console.log(list.innerHTML);
console.log(list.tagName);
console.log(list.textContent);



let h2 = document.body.querySelector("h2");
h2.innerText =h2.innerText+ " from Apna College";
console.log(h2.innerText);
console.dir(h2.innerText);

let divs = document.body.querySelectorAll(".box");
let i = 0;
// for ( i ; i<3 ; i++){
//     console.log(divs[i].innertext =`hello ${i+1}`);
// }


for (let value of divs){
    value.innerText= `new unique value ${i+1}`;
    i++; 
}