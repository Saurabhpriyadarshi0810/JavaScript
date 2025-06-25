let food = ["litchi", "mango", "potato", "tomato"];

console.log(food);
food.push("papaya","biscuit");
console.log(food);
let deleted = food.pop();
console.log(food);
console.log(deleted);

console.log(food.toString());

// shift method which removes element from the  first 
// unshift method which add element to the last
// slice method whic gives you the  part of array 
// its syntax array.slice(starting index, ending index)
// splice method which is used  to  removes, replaces and  add element tothe array
// its syntax array.splice(starting index, number of elements to be removed, elements to be added)