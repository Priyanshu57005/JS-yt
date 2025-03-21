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

//console.log(typeof myfunction);



// ++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive), heap(Non-Primitive)
//stack gives copy of memory
//Heap gives reference of original value

let myYoutubename = "Youtubedotcom"

let anothername = myYoutubename
anothername = "facebookdotcom"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl.com"
}

let userTwo = userOne

userTwo.email = "Priyanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

