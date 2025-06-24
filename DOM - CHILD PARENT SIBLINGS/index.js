let cont = document.body.firstElementChild;

cont.childNodes[5].style.color = "red";
cont.childNodes[5].style.backgroundColor = "cyan";

document.body.firstElementChild;
document.body.firstElementChild.childNodes;
document.body.firstElementChild.children;

document.body.firstElementChild.children[0].style.color = "blue";
document.body.firstElementChild.children[1].style.color = "green";
document.body.firstElementChild.children[2].style.color = "yellow";
document.body.firstElementChild.children[2].parentElement.style.backgroundColor =
  "purple";
document.body.firstElementChild.children[2].nextElementSibling.style.backgroundColor =
  "blue";
document.body.firstElementChild.children[2].previousElementSibling.style.backgroundColor =
  "red";
