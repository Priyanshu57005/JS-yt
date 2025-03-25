
function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("0");
}

//sayMyName()  //function key


function addTwoNumbers(Number1, Number2){ //number1 = parameter
   //console.log( Number1 + Number2 );

//    let result = Number1+Number2
//    console.log("hello");
//    return result

return Number1 + Number2
   
}

//addTwoNumbers(3, 4)
//addTwoNumbers(3, null)  //null=argument

const result = addTwoNumbers(3,5)

//console.log("Result: ", result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!undefined){
        console.log("Please enter a username");
        return
    }

    // same
    
    return `${username} just logged in`
}

//console.log(loginUserMessage("Priyanshu"));

console.log(loginUserMessage());

