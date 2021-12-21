const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop();
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift();
}
function appendCat(Broom) {
    const addEndCat = [...cats, "Broom"];
    return addEndCat;
}
function prependCat(Arnold) {
    const addFirstCat = ["Arnold", ...cats];
    return addFirstCat;
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}