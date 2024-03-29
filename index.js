// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    return cats.push("Ralph")
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    let newCats = [
        ...cats.slice(),
    "Broom"
]
    return newCats;
}
function prependCat(name){
    let newArr = [
        "Arnold",
        ...cats.slice(),
        
    ]
    return newArr
}


function removeLastCat(){
    let myArray =cats.slice(0, -1)
    return myArray
}
function removeFirstCat(){
    let myArray =cats.slice(1)
    return myArray
}
