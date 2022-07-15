//Ejemplo 1
console.log(nameOfDog);
var nameOfDog = 'Elmo';

//lo que realmente sucede:
/*
var nameOfDog = undefined;
console.log(nameOfDog);
var nameOfDog = 'Elmo';
*/

//Ejemplo 2
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

//Lo que realmente sucede:
/*
var elmo = undefined;
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`)
}
nameOfDog();
*/