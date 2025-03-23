//singleton
//Object.create
//object literals

const mySym = Symbol("key1")

const jsUser = {   // object create
    name: "Priyanshu",
    "full name": "Priyanshu Gautam",
    [mySym]: "mykey1",
    age : 20,
    location: "Chandigarh",
    email: "priyanshu57005@gmail.com",
    isLoggedaIn: false,
    lastLoginDays: ["Monaday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); //-> string but we need symbol so symbol declare in [] square bracket



jsUser.email = "priyanshuchanged@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "priyanshu@ai.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
