// Primitive datatype

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score =  100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
//let userEmail = undefined
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

//const bigNumber = 64766774907547983423n



// Reference type (Non Primitive type)

//Arrays, Objects, Functions

const heros = ["shaktiman", "Alien", "Hulk"]
let myObj = {
    name: "Priyanshu",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");;
}

console.log(typeof myfunction);