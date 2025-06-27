let number = prompt("enter the number ");
number = Number(number);
let arr = [];
for (let i = 0; i < number; i++) {
  arr[i] = i + 1;
}
console.log(arr);

let sum =arr.reduce((pre, cur) => {
  return pre + cur;
});
console.log(sum);

let mul =arr.reduce((pre, cur) => {
  return pre * cur;
});
console.log(mul);