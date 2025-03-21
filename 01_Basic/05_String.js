const name = "Priyanshu"
const repocount = 20

//console.log(name + repocount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repocount}`); // ` = backtick

const gameName = new String('Priyanshu-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "  priyanshu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priyanshu.com/priyanshu%20gautam"

console.log(url.replace('%20', '-'))

console.log(url.includes('priyanshu'))
console.log(url.includes('kumar'));

console.log(gameName.split('-'));


