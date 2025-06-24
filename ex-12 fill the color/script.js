console.log("hello user");

function changeColor(a) {
    let color;
  if (a >= 0 && a < 0.1) {
    color = "red";
    return color;
  } else if (a >= 0.1 && a < 0.2) {
    color = "orange";
    return color;
  } else if (a >= 0.2 && a < 0.3) {
    color = "yellow";
    return color;
  } else if (a >= 0.3 && a < 0.4) {
    color = "green";
    return color;
  } else if (a >= 0.4 && a < 0.5) {
    color = "cyan";
    return color;
  } else if (a >= 0.5 && a < 0.6) {
    color = "blue";
    return color;
  } else if (a >= 0.6 && a < 0.7) {
    color = "indigo";
    return color;
  } else if (a >= 0.7 && a < 0.8) {
    color = "violet";
    return color;
  } else if (a >= 0.8 && a < 0.9) {
    color = "silver";
    return color;
  } else if (a >= 0.9 && a <= 1.0) {
    color = "gold";
    return color;
  }
}


let p  = Math.random();
console.log(p);
let rang10 = changeColor(p);
console.log(rang10);
document.getElementsByClassName("box1")[0].style.color = rang10;

let a  = Math.random();
console.log(a);
let rang1 = changeColor(a);
console.log(rang1);
document.getElementsByClassName("box1")[0].style.backgroundColor = rang1;



let q  = Math.random();
console.log(q);
let rang9 = changeColor(q);
console.log(rang9);
document.getElementsByClassName("box2")[0].style.color = rang9;
let b  = Math.random();
console.log(b);
let rang2 = changeColor(b);
console.log(rang2);
document.getElementsByClassName("box2")[0].style.backgroundColor = rang2;





let r  = Math.random();
console.log(r);
let rang8 = changeColor(r);
console.log(rang8);
document.getElementsByClassName("box3")[0].style.color = rang8;

let c  = Math.random();
console.log(c);
let rang3 = changeColor(c);
console.log(rang3);
document.getElementsByClassName("box3")[0].style.backgroundColor = rang3;


let s  = Math.random();
console.log(s);
let rang7 = changeColor(s);
console.log(rang7);
document.getElementsByClassName("box4")[0].style.color = rang7;


let d  = Math.random();
console.log(d);
let rang4 = changeColor(d);
console.log(rang4);
document.getElementsByClassName("box4")[0].style.backgroundColor = rang4;


let t  = Math.random();
console.log(t);
let rang6 = changeColor(t);
console.log(rang6);
document.getElementsByClassName("box5")[0].style.color = rang6;

let e  = Math.random();
console.log(e);
let rang5 = changeColor(e);
console.log(rang5);
document.getElementsByClassName("box5")[0].style.backgroundColor = rang5;

