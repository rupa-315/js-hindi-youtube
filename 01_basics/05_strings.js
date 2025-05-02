const name = "rupa"
const repoCount = 50

//console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rupa-singh')

// console.log(gameName[0]);
// console.log(gameName[5]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
//console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4);
//console.log(newString);

const anotherString = gameName.slice(-8,4);
//console.log(anotherString);

const newStringOne = "   rupa   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(url.includes('sundari'));

console.log(gameName.split('-'));