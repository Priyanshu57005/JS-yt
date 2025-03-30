const user = {
    username: "priyanshu",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);


// function chai(){
//     let u = "Priyanshu"
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//     let username = "Priyashu"
//     console.log(this.username);
    
// }
// chai()

// const chai = () => { // -> arrrow function
//     let username = "priyanshu"
//     console.log(this.username);
    
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// in currly breces return needs

//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)
// in paranthesis no return needed

console.log(addTwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()