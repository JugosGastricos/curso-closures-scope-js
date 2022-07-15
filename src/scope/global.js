// variables

var a; //declaramos la variable a

var b = 'b'; //declaramos y asignamos, que es lo más común de ver

b = 'bb'; //reasignamos el valor de b

var a = 'aa' //redeclaración de la variable a

// Global scope
var fruit = 'apple'; //global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);

//Agregando valores a una variable global desde una función y una condicional:

let lol;

function printLol(){
    lol = 'equisde';
    console.log(lol);
}

console.log(lol);
printLol();
console.log(lol);

/*imprime:
undefined
equisde
equisde*/

let lol;
console.log(lol);

if(lol != true){
    lol = 'equisde';
    console.log(lol);
}

console.log(lol);

/*imprime:
undefined
equisde
equisde*/