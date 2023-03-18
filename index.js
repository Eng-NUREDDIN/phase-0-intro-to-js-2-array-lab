// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const newArray=cats.slice();
    newArray.push(name);
    return newArray;
}
function prependCat(name){
    const newArray=cats.slice();
    newArray.unshift(name);
    return newArray;
}
function removeLastCat(name){
    const newArray=cats.slice();
    newArray.pop(name);
    return newArray;
}
function removeFirstCat(name){
    const newArray=cats.slice();
    newArray.shift(name);
    return newArray;
}
