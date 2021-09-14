// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
   const copyCats = cats.slice();
   copyCats.push(name);
   return copyCats;
}

function prependCat(name){
    const copyCats = cats.slice();
    copyCats.unshift(name);
    return copyCats;
 }

 function removeLastCat(name){
    const copyCats = cats.slice();
    copyCats.pop(name);
    return copyCats;
 }

 function removeFirstCat(name){
    const copyCats = cats.slice();
    copyCats.shift(name);
    return copyCats;
 }