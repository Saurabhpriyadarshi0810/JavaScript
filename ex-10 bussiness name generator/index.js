/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let first , second, third;



let random_adjective = Math.random()
if( random_adjective<.33){
   first ="Crazy";
}else if(random_adjective<.66 && random_adjective>=.33){
    first ="Amazing";
}else{
   first = "Fire";
}

let random_shop = Math.random()
if( random_shop<.33){
    second = "Engine";
}else if(random_shop<.66 && random_shop>=.33){
    second = "Foods";
}else{
    second = "Garments";
}

let random_another = Math.random()
if( random_another<.33){
    third = "Bros";
}else if(random_another<.66 && random_another>=.33){
    third = "Limited";
}else{
    third = "Hub";

}


console.log(`your business name is ${first} ${second} ${third}`)