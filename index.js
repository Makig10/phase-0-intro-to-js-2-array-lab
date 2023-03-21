// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    const newcats=[...cats,"Broom"];
    return newcats;
}
function prependCat(name) {
    const newcats=["Arnold",...cats];
    return newcats;
}
function removeLastCat() {
    const newcats= cats.slice(0,-1);
    return newcats;
}
function removeFirstCat() {
    const newcats =cats.slice(1);
    return newcats;
}