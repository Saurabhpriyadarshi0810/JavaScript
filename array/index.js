let marks = [74, 55, 88, 98, 66];
console.log(marks);
console.log(marks[0]);
console.log(marks.length);

let heros = ["antman", "batman", "superman", "shaktiman", "flash", "eternals"];
console.log(heros);
console.log(typeof heros);
heros[0] = "ironman";

//loop for arrays :-

//FOR LOOP

for (let index = 0; index < heros.length; index++) {
  console.log(heros[index]);
}

// FOR OF LOOP

for (let element of heros) {
  console.log(element);
  console.log(element.toUpperCase());
}
