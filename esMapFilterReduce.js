/**
 * 
 
//1) scrivere una funzione che prende in input un array di numeri è restituisce un array di stringhe in logica FizzBuzz (map)

const numbers = [3, 5, 15, 8, 12, 2];

function convertArrayInFizzBuzz(array){
    const tempArray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element%3===0&&element%5===0)
            tempArray.push('fizzbuzz');
        else if (element%3===0)
            tempArray.push('fizz');
        else if (element%5===0)
            tempArray.push('buzz');
        else
            tempArray.push(element+'');
    }
    return tempArray;
}

console.log(convertArrayInFizzBuzz(numbers)) //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']
----------------------------------------------
//2) scrivere una funzione che prende in input un array di numeri è restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa (map)

const numbers1 = [-3, 5, 15, -8, 12, 2, 0];

function invertElements(array){
const tempArray=[];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element!=0)
        tempArray.push(element*-1);
     else
        tempArray.push(element);
    }
return tempArray;
}

console.log(invertElements(numbers1)) //[3, -5, -15, 8, -12, -2, 0] 
--------------------------------------------------------------------
//3) scrivere una funzione che prende in input un array di stringhe è restituisce un array di numeri con la lunghezza delle stringhe (map)

const strings = ['pippo', 'pluto', 'qui'];

// function lengthOfElements(array){
//     const tempArray=[];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempArray.push(element.length);
//     }
//     return tempArray;
// }
function lengthOfElements(array){
    const tempArray=[];
    for (let element of array) {
        tempArray.push(element.length);
    }
    return tempArray;
}

console.log(lengthOfElements(strings)) //[5, 5, 3]


//4) scrivere una funzione che prende in input un array di stringhe è restituisce solo quelle che contengono la lettera z (filter)

const strings2 = ['pippo', 'pluto', 'qui', 'zapotec'];

function onlyElementsWithZ(array){
    const tempArray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.includes('z')) {
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(onlyElementsWithZ(strings2)) //['zapotec']

//5) scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari (filter)

const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

function onlyEven(array){
    const tempArray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element%2===0) {
            tempArray.push(element);            
        }
    }
    return tempArray;
}

console.log(onlyEven(numbers2)) //[8, -12, -2, 0]????

//6) scrivere una funzione che prende in input un array di stringhe restituisce una stringa composta dalle iniziali
//(reduce)
const strings3 = ['pippo', 'osvaldo', 'paperino'];

function sumFirstChar(array){
    let tempStr='';
    for (let i = 0; i < array.length; i++) {
        //const element = array[i];
        //tempStr+=element[0];
        tempStr+=array[i][0]
        }
    return tempStr;
}

console.log(sumFirstChar(strings3)) //'pop'

//7) scrivere una funzione che prende in input un array di numeri e restituisce il maggiore

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];
const numbers4 = [];


function maxElement(array){
    let tempMax=-Infinity;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (tempMax<element) {
            tempMax=element;
        }
    }
    return tempMax;
}

console.log(maxElement(numbers3)) //15

    //Map
    numbers.map((element)=> 0 != element*2);
    numbers.filter((element)=>element%2===0);
    number. reduce((previousElement, currentElement)=>previousElement+currentElement,0)

*/

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

// function lengthOfElements(array){
//     tempArray=[];
//     return tempArray= array.map(function (tempArray) {
//     for (let element of array) {
//         tempArray.push(element.length);
//     }
//     return tempArray;    
//     })
    
// }

//console.log(lengthOfElements(strings)) //[5, 5, 3] ???????????????????

//4) scrivere una funzione che prende in input un array di stringhe è restituisce solo quelle che contengono la lettera z (filter)

const strings2 = ['pippo', 'pluto', 'qui', 'zapotec'];

function onlyElementsWithZ(array){
    let tempArray=[];
    return tempArray=array.map(element, charToFind => element.includes(char));


    // const tempArray=[];
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     if (element.includes('z')) {
    //         tempArray.push(element);
    //     }
    // }
    // return tempArray;
}

console.log(onlyElementsWithZ(strings2)) //['zapotec']

//5) scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari (filter)

const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

function onlyEven(array){
    const tempArray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element%2===0) {
            tempArray.push(element);            
        }
    }
    return tempArray;
}

console.log(onlyEven(numbers2)) //[8, -12, -2, 0]????

//6) scrivere una funzione che prende in input un array di stringhe restituisce una stringa composta dalle iniziali
//(reduce)
const strings3 = ['pippo', 'osvaldo', 'paperino'];

function sumFirstChar(array){
    let tempStr='';
    for (let i = 0; i < array.length; i++) {
        //const element = array[i];
        //tempStr+=element[0];
        tempStr+=array[i][0]
        }
    return tempStr;
}

console.log(sumFirstChar(strings3)) //'pop'

//7) scrivere una funzione che prende in input un array di numeri e restituisce il maggiore

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];
const numbers4 = [];


function maxElement(array){
    let tempMax=-Infinity;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (tempMax<element) {
            tempMax=element;
        }
    }
    return tempMax;
}

console.log(maxElement(numbers3)) //15