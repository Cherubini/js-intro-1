const lastElement = {
    value:10,
    next: null,
}

const thirdElement={
    value:15,
    next:lastElement,
}

const secondElement={
    value: 5,
    next:thirdElement,
}

const firstElement={
    value: 12,
    next:secondElement,
}


let element = firstElement;
while (true) {
    console.log(element.value);
    if(element.next!=null)
        element=element.next
     else 
     break;
}

/**
 *
function listToArray(list) {
    let tempArray=[];
    for (let node = list; node; node = node.rest) {
        tempArray.push(node['value']);
    }
    return tempArray;
}

console.log(listToArray(list1));
 */

function fromLinkedListToArray(first) {
    let tempArr = [];
    for (let node = first; node; node = node.next) {
        tempArr.push(node['value']);
    }
    return tempArr;
}


console.log(fromLinkedListToArray(firstElement));

/*
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
*/

const myArray=['pippo', 'pluto', 'paperino'];

function fromArrayToLinkedList(array) {
    let previousElement = null;
    for (let i = array.length-1; i >=0; i--) {
        const element = array[i];
        const listElement={
            value: element,
            next: previousElement,
        }
        previousElement= listElement;
    }
    return previousElement;
}

console.log(fromArrayToLinkedList(myArray));


function prependListElement(first, newElement) {
    const listElement=
        {
        value:newElement, 
        next:first,
        }
    return listElement;
}

console.log(prependListElement(firstElement,10000));

/*
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
*/


function listElementAtIndex(first, index) {
    let element= first;
    let i = 0;
    while(true) 
        {
        if(i === index)
            return element.value;
        if(element.next)
            {
            element=element.next;
            i++;
            }
         else
            return undefined;
        }   

}

console.log(listElementAtIndex(firstElement, 0));
console.log(listElementAtIndex(firstElement, 3));
console.log(listElementAtIndex(firstElement, 10));