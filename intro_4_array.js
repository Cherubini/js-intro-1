//let pippo = [15, 3, 23, 34, 21];

//  pippo.push(100); //aggiunge in fondo


//  const pluto = pippo.pop(); //preleva in fondo
//  const paperino = pippo . pop();



//  console.log(pippo);
//  console.log(pluto);
//  console.log(paperino)

// pippo.unshift(200); //aggiunge subito in cima

// const paperone= pippo.shift() //preleva all'inizio

//BACO DI JS, non sempre console log funziona

// console.log(pippo);
// pippo.pop();
// console.log(pippo);

// const arrayOfStrings = ['andrea', 'jing', 'valentina', 'vlad'];

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }


//1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

let pippo = [15, 3, 23, 34, 21];

function printFizzBuzz(arrayOfNum){
    for (let i = 0; i < arrayOfNum.length; i++) {
        const element = arrayOfNum[i];
        if (element%3===0&&element%5===0)
            console.log('fizzbuzz');
        else if (element%3===0)
            console.log('fizz');
        else if (element%5===0)
            console.log('buzz');
        else
            console.log(element);
    }
}

printFizzBuzz(pippo);
//2) scrivere una funzione che prende come parametro un array di stringhe e logga quelle più piccole di 5 caratteri

let pluto=['fagioli','ciao','bimbo','mio','mao','cavolo'];

function minThanFiveChar(arrayOfNum){
    for (let i = 0; i < arrayOfNum.length; i++) {
        const element = arrayOfNum[i];
        if(element.length<5)
            console.log(element);
    }
}

minThanFiveChar(pluto);

//3) scrivere una funzione che prende come parametro una stringa e restituisce una stringa dei primi 5 caratteri convertiti in maiuscolo

function firstFiveCharToUpperCase(str){
let ris='';
for (let i = 0; i < 5 && i <str.length; i++) {
     ris += str[i];
}
    
ris=ris.toUpperCase();
console.log(ris);
    
}

firstFiveCharToUpperCase('aIu');
firstFiveCharToUpperCase('aiutomifamalelapancia');

//4) scrivere una funzione che prende in input come parametro una stringa e restituisce la lunghezza della stringa senza spazi

function stringLengthMinusSpace(str) {
    let length=0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]!=' ')
            length++;
    }
    return length;
}
console.log(stringLengthMinusSpace('mi piace la nutella, il gelato con la panna, e le merendine in quantità'));

//5)scrivere una funzione che prende in input come parametro una stringa e restituisce il numero degli spazi
 
function onlySpaces(str) {
    let length=0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]===' ')
            length++;
    }
    return length;
}
console.log(onlySpaces('mi piace la nutella, il gelato con la panna, e le merendine in quantità'));

function countBs(str) {
   let counter=0; 
 for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if(element==='B')
        counter++;
 }   
return counter;
}

console.log(countBs('mi piace la BABBANAs'));

function countChar(str, charToFind){
    
}