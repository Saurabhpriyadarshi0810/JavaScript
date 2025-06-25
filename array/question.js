// find the average marks of  the given class in array

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of marks) {
  sum = sum + value;
}
let average = sum / marks.length;
console.log(`average marks of the class is ${average}`);

// find the values of price after applying 10% offer

let price = [250, 645, 300, 900, 50];

for (let el of price) {
  el = el - (el * 10) / 100;
  console.log(el);
}
console.log(price);

//  alternative

for (let i = 0; i < price.length; i++) {
  price[i] = price[i] - (price[i] * 10) / 100;
}

console.log(price);


// question:

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
company.shift();
console.log(company);
company.splice(1,1,"Ola");
console.log(company);
company.push("Amazon");
console.log(company);
