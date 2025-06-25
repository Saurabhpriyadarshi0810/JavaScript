console.log("hello user!");

let str = "saurabh";

// inbuilt function
console.log(str.length);

// access using index
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);

// template literals
let sentence = `this is a special type of string.`;
console.log(sentence);

let profile = {
  username: "Saurabh",
  Rollno: 34,
  cgpa: 8.5,
};

// console.log("my name is ",profile.username,"\nmy Rollno is ",profile.Rollno ,"\nmy cgpa  is ", profile.cgpa);

// alternative  of above

console.log(
  `My name is ${profile.username}.\nMy rollno is ${profile.Rollno}.\nMyy cgpa is ${profile.cgpa}.`
);

console.log(`sum of 1 to\t 5 is ${1 + 2 + 3 + 4 + 5}.`);

let str1 = "   Vaishnavi Priya ";
let str2 = "is a pagal    ";

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str1.slice(4, 8));
console.log(str1.concat(str2));
console.log(str1 + str2);

console.log(str2.replace("pagal", "pagli"))
console.log(str2.replaceAll("pagal", "pagli"))


console.log(str2.charAt(5))


