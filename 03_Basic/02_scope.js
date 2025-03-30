// let a = 10
// const b = 20
// var c = 30

//{} // -> scope

//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    //var c = 30

    //console.log("INNER: ", a);
    
}


// outside the {} -> gloabal scope
// inside the {} -> block scope

//console.log(a);
//console.log(b);
//console.log(c);

// nested scope

function one(){
    const username = "Priyanshu"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
    
}

//one()

if(true){
    const username = "Priyanshu"
    if(username === "Priyanshu"){
        const website = "youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}

//console.log(username);

// ++++++++ intresting +++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

//addone (5)
addTwo(5)
const addTwo = function(num){
    return num + 2
}

//addTwo(5)