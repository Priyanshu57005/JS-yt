let myDate = new Date()
// console.log(myDate.toString()); // -> Sat Mar 22 2025 18:11:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); // ->  2025-03-22T18:12:49.876Z
// console.log(myDate.toJSON()); // -> 2025-03-22T18:12:49.876Z


// console.log(typeof myDate); //-> object

// let myCreatedDate = new Date(2025, 0, 23) // -> in js months start from zero
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2025, 0, 23, 5, 3)
let myCreatedDate = new Date("2025-01-14") // -> but when we want it via yy mm dd then months started from 1

//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getSeconds());
// console.log(newDate.getMinutes());

// `${newDate.getDay()}`

// newDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone : ''
// })
