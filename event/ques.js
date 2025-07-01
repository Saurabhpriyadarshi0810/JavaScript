modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

// modebtn.addEventListener("click", () => {
//   if (currmode === "light") {
//     currmode = "dark";
//     document.body.style.backgroundColor = "black";
//     document.querySelector("#mode").style.backgroundColor = "grey";
//     document.querySelector("#mode").style.color = "white";
//   } else {
//     currmode = "light";
//     document.body.style.backgroundColor = "white";
//     document.querySelector("#mode").style.backgroundColor = "white";
//     document.querySelector("#mode").style.color = "black";
//   }
//   console.log(currmode);
// });

modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("white");
  } else {
    currmode = "light";
    body.classList.add("white");
    body.classList.remove("dark");
  }
  console.log(currmode);
});
