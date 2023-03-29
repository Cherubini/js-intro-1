//OGGETTI

//  const andrea={
    //  name:'Andrea',
    //  surname: 'Asioli',
    //  yob: 1978,
    //  isMarried: false,
    //  pupils: ['davide','jing','valentina','vlad'],
    //  dog: {
        //  name: 'Ariel',
        //  breed: 'border-collie',
    //  },
    //  'cool car': 'bmv', //nome di parametro fra apici perché così puoi mettere lo spazio 
//  }

//  console.log(andrea);
//  console.log(andrea.surname);
//  console.log(andrea['yob']);
//  console.log(andrea['cool car']);

//  const andrea= {
    //  name:'Andrea',
    //  surname: 'Asioli',
    //  yob: 1978,
    //  nickname: 'labstraction',
    //  email: 'generic@email.it',
//  }

//  const pietro = {
    //  name: 'Pietro',
    //  surname: 'Viglino',
    //  yob: 1988,
    //  nickname: 'pepo',
    //  email: 'pepomail@gmail.it'
//  }

//  const francesco = {
    //  name: 'Francesco',
    //  surname: 'Badile',
    //  yob: 1993,
    //  nickname: 'sunshinemocha',
    //  email: 'sunshinemocha93@gmail.com'
//  }

//  const luis = {
    //  name: 'Luis',
    //  surname: 'Castro',
    //  yob: 1993,
    //  nickname: 'Lucho',
    //  email: 'lucho93lol@hotmail.com'
//  }

//  const simone = {
    //  name: 'Simone',
    //  surname: 'Maccarone',
    //  yob: 2003,
    //  nickname: 'simo',
    //  email: 'simonemailchenonso@yahoo.it',
//  }

//  const valentina = {
    //  name: 'Valentina',
    //  surname: 'Cherubini',
    //  yob: 2001,
    //  nickname: 'vale',
    //  email: 'maildivale@yahoo.it',
//  }

//  const vlad = {
    //  name: 'Vlad',
    //  surname: 'Qualcosa lunga',
    //  yob: 1997,
    //  nickname: 'Vlady',
    //  email: 'vladelasuamail@yahoo.it'
//  }

//  const davide = {
    //  name: 'Davide',
    //  surname: 'Consigliere',
    //  yob: 1989,
    //  nickname: 'Dave',
    //  email: 'davemailquacosa@yahoo.it'
//  }

//  const daniele = {
    //  name: 'Daniele',
    //  surname: 'Puggioni',
    //  yob: 1999,
    //  nickname: 'Pooh',
    //  email: 'poohmailto@yahoo.it'
//  }

//  const jing = {
    //  name: 'Jing',
    //  surname: 'Wang',
    //  yob: 1993,
    //  nickname: 'jing',
    //  email: 'jingmailrandom@yahoo.com' 
//  }

//  const myClass = [andrea, pietro, francesco, luis, simone, valentina, vlad, davide, daniele, jing];


// for(let i=0; i<myClass.length;i++){
//     const element=myClass[i];
//     console.log('NOME: ' + myClass[i].name + ' ' + myClass[i].surname + ' (' + myClass[i].nickname + "),\nETA: " 
//     + myClass[i].yob + ",\nEMAIL: " + myClass[i].email);
// }

//da array a oggetti e viceversa

const arielarray = ['Ariel', 'border-collie', 'maschio', 'bianco e nero'];

const arielObj =  {
    name: arielarray[0],
    breed:arielarray[1],
    gender:arielarray[2],
    color:arielarray[3],
}

console.log(arielObj);

arielValuesArray=Object.values(arielObj);
arielKeysArray=Object.keys(arielObj);

console.log(arielValuesArray);

console.log(arielKeysArray);


//value type and reference types

let pippo= 5;
let pluto = pippo;
pippo =7;

console.log(pippo);
console.log(pluto);

let topolino={yob:1930, name:'mickey mouse'};
let newTopolino=topolino;
topolino.yob=1950;
console.log(topolino.yob);
console.log(newTopolino.yob);

console.log(topolino.yob); //1950
console.log(newTopolino.yob); //1950

//gli oggetti nello stack sono indipendenti; se uno viene assegnato a un altro, si copia il valore.  //VALUE TYPE
//quando un oggetto è più grosso, si mette nell'heap. Lì solo il primo salvato ha spazio suo, le altre variabili sono puntatori a quella cella di memoria, quindi il cambiamento avviene sempre per tutti.
//Si chiamano REFERENCE TYPE

// function sum2(num) {
//     return num+2;
// }

// let paperino= 5;
// let basettoni =sum2(paperino);

// console.log(paperino); //5, valute type non cambia
// console.log(basettoni);// 7

// function make2YearsOlder(person){
//     person.yob = person.yob+2;
//     return person;
// }

// let andrea={name:'Andrea', yob:'1978'};

// //let olderAndrea = make2YearsOlder(andrea);

// // console.log(andrea.yob);
// // console.log(olderAndrea.yob);

// //cosa fare per evitare quello:

// function make2YearsOlderWithClone(person){
//     let clone={...person}
//     clone.yob= clone.yob+2;
//     return clone;
// }


// olderAndrea= make2YearsOlderWithClone(andrea);

// console.log(andrea.yob);
// console.log(olderAndrea.yob);


//DESTRUTTURARE
// const libro= {
//     titolo: 'la divina commedia',
//     autore: 'Dante Alighieri',
//     anno:2019,
//     paese:'italia',
//     casaEditrice:'Einaidi',
// }

// // const titolo = libro.titolo;
// // const autore = libro.autore;

// // console.log(titolo, autore);

// const{titolo, autore} = libro;

// console.log(titolo, autore);


//JSON; fil per convertire velocemente stringhe e oggetti

// const libro= {
//     titolo: 'la divina commedia',
//     autore: 'Dante Alighieri',
//     anno:2019,
//     paese:'italia',
//     casaEditrice:'Einaidi',
// }

// const libroInStringa=JSON.stringify(libro);
// console.log(libro);
// console.log(libroInStringa);

// const libroInStringa2={"titolo":"Iliade","autore":"Omero","anno":2018,"paese":"italia","casaEditrice":"Einaidi"}
// const libro2 = JSON.parse(libroInStringa2);

// console.log(libroInStringa2);
// console.log(libro2);


//FILTER (filtrare un array significa avere un array di inizio e averne uno in uscita <= all'array iniziale con solo i valori che volevamo.)
//1)scrivere una funzione che dato un array di numeri restituisce un array con i numeri maggiori di 0

const number = [100, -23, 0, -234, 1001, 1, 34, -12];

function filterNegative(array){
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
         if (element>=0) {
             tempArray.push(element);
         }
        //element>=0 && tempArray.push(element); prendere per il culo l'interprete
    }
    return tempArray;
}

console.log(filterNegative(number)); // [100, 0, 1001, 1, 34]



//MAPPING
//2) scrivere una funzione che dato un array di numeri li moltiplica tutti per due

function multiplyAllElementsBy2(array) {
    const tempArray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tempArray.push(element*2);
    }
    return tempArray;
}


console.log(multiplyAllElementsBy2(number)); //[ 200, -46, 0, -468, 2002, 2, 68, -24 ]



//REDUCE
//3) creare una funzione che somma tutti gli elementi di un array di numeri

function sumAllElements(array) {
    let sum=null;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum+=element;
    }
    return sum;
}


console.log(sumAllElements(number));
console.log('ESERCIZI 27/3');


//-------------------------------------------------------------------
//ESERCIZI 27/03

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

console.log(invertElements(numbers1)) //[3, -5, -15, 8, -12, -2, 0] -0?

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



function range(start, end) {
    let  arrayRange=[];
    for (let i = start; i <= end; i++) {;
        arrayRange.push(i);
    }
    return arrayRange;
}


function sum(array) {
    let tempSum=null;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tempSum+=element;
    }    
    return tempSum;
}

console.log(sum(range(1, 10)));

function reverseArray(array) {
    let tempArray=[];
    for (let i = array.length-1; i >= 0 ; i--) {
        const element = array[i];
        tempArray.push(element);
    }
    return tempArray;
}

console.log(reverseArray([0,2,3,4,5]));

let list1 = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

  
let list2 = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

let list3 = {
value: 1,
rest: {
    value: 2,
    rest: {
    value: 4,
    rest: null
    }
}
};



function list(value, rest) {
    this.value=value;
    this.rest=rest;
}




 function arrayToList(array) {
     let tempArray=array;
     let tempList=new list();
     if(array.length===1){
         tempList['value']=tempArray[0];
         return tempList;
     } 
     if(array.length>1){
         tempList['value']=tempArray.pop();
         tempList['rest']=arrayToList(tempArray)
     }
     return tempList;
 }


console.log(arrayToList([1,2,3]));

function listToArray(list) {
    let tempArray=[];
    for (let node = list; node; node = node.rest) {
        tempArray.push(node['value']);
    }
    return tempArray;
}

console.log(listToArray(list1));

function nth(list,numToFind) {
    let index=undefined;
    let i=0;
    for (let node = list; node; node = node.rest, i++) {
        if (node['value']===numToFind) {
            index=i;
            break;
        }
        
    }
    return index;
}
console.log('nth: '+ nth(list1, 2));


function nth2(listC, numToFind){
    if(listC===null)
        return -Infinity  ;
    if(listC['value']===numToFind)
        return 0;
     else
        return 1+nth2(listC['rest'], numToFind);
}


console.log('nth ricorsiva: '+ nth2(list3, 3));

// function deepEquals(value1, value2) {
//     if(typeof value1 != typeof value2)
//         return false;
//     if (typeof value1 ==='object') {
//         if(value1===null && value2 === null)
//             return true;
//          else if(value1===null || value2 === null)
//             return false;
        
//         let value1Keys = Object.keys(value1);
//         let value2Keys = Object.keys(value2);
//         for (let i = 0; i <value1Keys.length && i<value2Keys.length; i++) {
//             if(!deepEquals(value1[value1Keys[i]],value2[value2Keys[i]])){
//                 return false;
//                 }
                
//         }
//         return true;
//     }
//     return value1 === value2;
// }

// console.log(deepEquals(list2,list1)); //true
// console.log(deepEquals(list3,list1)); //false
// console.log(deepEquals(list2,null)); //false
// console.log(deepEquals(null,null)); //true
// console.log(deepEquals(3,3)); //true
// console.log(deepEquals(3,4)); //false
// console.log(deepEquals(4,'mimi')); //false
// console.log(deepEquals('mimi','mimi')); //true
// console.log(deepEquals(true,true)); //true
// console.log(deepEquals(true,false)); //false


const numbers5 = [-3, 5, 15, -8, 12, 2, 0];

function positiveSum(arr) {
    let tempArr=[];
    tempArr=arr.filter((num)=>num>0);
    let sum=null;
    for(let n of tempArr){
      sum+=n;
    }
    return sum;
  }

console.log(positiveSum(numbers5));