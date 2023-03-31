

//1) scrivere una funzione che prende in input un array di numeri è restituisce un array di stringhe in logica FizzBuzz (map)

const numbers = [3, 5, 15, 8, 12, 2];

function convertArrayInFizzBuzz(array){
    let tempArray=[];
    return tempArray=array.map(element=> element%3===0&&element%5===0?'fizzbuzz':element%3===0?'fizz':element%5===0?'buzz':element+'')
}
console.log(convertArrayInFizzBuzz(numbers)) //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']


//2) scrivere una funzione che prende in input un array di numeri è restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa (map)

const numbers1 = [-3, 5, 15, -8, 12, 2, 0];

function invertElements(array){
    let tempArray=[];
    return tempArray=array.map(n => n!=0?n*-1:0);
}



console.log(invertElements(numbers1)) //[3, -5, -15, 8, -12, -2, 0] 

//3) scrivere una funzione che prende in input un array di stringhe è restituisce un array di numeri con la lunghezza delle stringhe (map)

const strings = ['pippo', 'pluto', 'qui'];



 function lengthOfElements(array){
   return array.map(n=>n.length);
 }




console.log(lengthOfElements(strings)) //[5, 5, 3] ???????????????????

//4) scrivere una funzione che prende in input un array di stringhe è restituisce solo quelle che contengono la lettera z (filter)

const strings2 = ['pippo', 'pluto', 'qui', 'zapotec'];

function findZ(str) {
    if(str.includes('z'))
        return str;
}
console.log('includes z');
function onlyElementsWithZ(array){
    let tempArray=[];
    tempArray=array.filter(element => findZ(element))
    return tempArray;
}

console.log(onlyElementsWithZ(strings2)) //['zapotec']

//5) scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari (filter)

const numbers2 = [-3, 5, 15, -8, 12, 2, 0];
console.log('onlyEven');
function onlyEven(array){
    let tempArray=[];
    tempArray = array.filter(n=> n%2===0);
    return tempArray;
}

console.log(onlyEven(numbers2)) //[-8, -12, -2, 0]

//6) scrivere una funzione che prende in input un array di stringhe restituisce una stringa composta dalle iniziali
//(reduce)
const strings3 = ['pippo', 'osvaldo', 'paperino'];
console.log('sumFirstChar');
function sumFirstChar(array){
    let tempStr='';
    tempStr=array.reduce((previousElement, currentElement)=>previousElement+currentElement[0],'')
    return tempStr;
    //array.reduce((acc,elem)=>{elem+'',''})
}

console.log(sumFirstChar(strings3)) //'pop'

function sumFirstChar1(array) {
    const newArray = array.reduce((previous, current) => {
        const firstChar = current[0];
        previous+= firstChar;
        return previous;
    },'');
    return newArray;
}

console.log('sumcharAndreesplicito') //'pop'
console.log(sumFirstChar1(strings3)) //'pop'

//7) scrivere una funzione che prende in input un array di numeri e restituisce il maggiore

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];

function findMax(acc,elem) {
    if(acc>elem)
        return acc;
     else
        return elem;
}


console.log('maxElement');

function maxElement(array){
    let tempMax=-Infinity;
    tempMax= array.reduce((acc, elem)=>findMax(acc,elem));
    return tempMax;
}

function maxElement1(array){
    let tempMax=-Infinity;
    tempMax=array.reduce((acc,elem) => {
        if(elem>acc) 
            acc=elem;
        return acc},-Infinity);
    return tempMax;
}

console.log(maxElement(numbers3)) //15
console.log('maxMia') //15
console.log(maxElement1(numbers3)) //15


/*
const numbers = [3, 5, 15, 8, 12, 2];
    //Map
    numbers.map((element)=> 0 != element*2);
    numbers.filter((element)=>element%2===0);
    number. reduce((previousElement, currentElement)=>previousElement+currentElement,0)

*/

//find() trova il primo elemento che soddisfa una condizione
//some() ti dice se ce n'è uno o più di uno che rispetta una condizione