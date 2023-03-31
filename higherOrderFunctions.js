let a = 5;
let b = 'ciao';

function square(num) {
    console.log(num*num);
}

square(a);

let c= (n) => num*num;




function logNumbersFrom0to9() {
    for (let i = 0; i < 10; i++) {
        console.log(i); 
    }
}

function logNumbersFrom0to(maxNum) {
    for (let i = 0; i < maxNum; i++) {
        console.log(i);
    }
}

function logNumber(n) {
    console.log(n);
}

function logDouble(n) {
    console.log(n*2);
}

function repeatFrom0To(maxNum, func) {
    for (let i = 0; i < maxNum; i++) {  
        func(i);      //qualsiasi funzione gli venga lanciata
    }
}

function fizz(n) {
    if (n%3===0) {
        console.log(n+' true');
    }
    else
    console.log(n+' false');

    
}

console.log('try 1 logNumber')
repeatFrom0To(10, logNumber);

console.log('try 2 logDouble')
repeatFrom0To(10, logDouble);

console.log('try 3 square')
repeatFrom0To(10, square);

console.log('try 4 fizz')
repeatFrom0To(10, fizz);


// Chiamare la funzione repeatFromTo in modo che stampi per ogni numero (i) se i è divisibile per 3


//FUNZIONI ANONIME, funzioni senza nome scritte in loco

repeatFrom0To(15, function(n) {
    console.log(n%2===0);
    
});

//setInterval(function() {console.log('test')}, 1000);

function getRangeCheckFunction(min, max){
    return function (n) {
        return n >= min && n<=max
    }
}

let isInRange= getRangeCheckFunction(0,5)
console.log(isInRange(7));
console.log(isInRange(1));
console.log(isInRange(-8));

//ARRAY E FUNZIONI DI ORDINE SUPERIORE

console.log('array e funzioni di ordine superiore');

let numbers=[1, 2, 3, 4, 5];

let squaredNumbers =[];

for (let n of numbers) {
    squaredNumbers.push(n*n);             
}

let numbers1=[0, 1, 2, 3, 4, 5];

//scrivere una funzione map() che dato in ingresso un array, restituisce un nuovo array con gli stessi elementi del primo trasformati usando una funzione in ingresso.

function squareRet(num) {
    return num*num;
}



function logNumberRet(n) {
    return n;
}
// function (n) = {return n}
function logDoubleRet(n) {
    return n*2;
}


function fizzRet(n) {
    if (n%3===0)
        return 'fizz';
     else
        return n;

    
}

function map(array, func) {
    let tempArray=[];
    for (let i = 0; i < array.length; i++) {
        tempArray.push(func(array[i]));
    }
    return tempArray; 
}


function map1(array, func) {
    let tempArray=[];
    for (let n of array) {
        tempArray.push(func(n));
    }
    return tempArray;
}

console.log('try 1 logNumber')
console.log(map(numbers1, logNumberRet));

console.log('try 2 logDouble')
console.log(map(numbers1, logDoubleRet));

console.log('try 3 square')
console.log(map(numbers1, squareRet));

console.log('try 4 fizz')
console.log(map(numbers1, fizzRet));


console.log('second try \ntry 1 logNumber')
console.log(map1(numbers1, logNumberRet));

console.log('try 2 logDouble')
console.log(map1(numbers1, logDoubleRet));

console.log('try 3 square')
console.log(map1(numbers1, squareRet));

console.log('try 4 fizz')
console.log(map1(numbers1, fizzRet));

console.log('map e filter di libreria')
let arrayStr= ['ciao', 'pippo', 'topolino', 'ciao mondo'];
res=arrayStr.filter(aS =>aS.length<=6)
console.log(res.map(n=>n.length))


function createMultiplicator(myNumber) {
    function multiply(selectedNumber) {
        return selectedNumber*myNumber;
    }
    return multiply;
}

let thatsFreakmymind=createMultiplicator(2);
thatsFreakmymind(3); //6

console.log(createMultiplicator(5)(4))// selectedNumber=4; myNumber=5; result=20

//scrivere una funzione che prende una funzione e ritorna una funzione



function applyTwice(myFunction) {
    return (input) => myFunction(myFunction(input));
}

function add1(selectedNumber) {
    return ++selectedNumber;
}

const add2 = applyTwice(add1);
const add3 = applyTwice(applyTwice(add1))(10);

console.log(add2(5)); //7
console.log(add3); //14

numbers=[0, 1, 2, 3, 4, 5];

//Map, filter reduce
let help1 =numbers.map((element)=> 0 != element*2);
let help2 =numbers.filter((element)=>element%2===0);
let help3 =numbers. reduce((previousElement, currentElement)=>previousElement+currentElement,0)

console.log('help1');
console.log(help1);
console.log('help2');
console.log(help2);
console.log('help3');
console.log(help3);

