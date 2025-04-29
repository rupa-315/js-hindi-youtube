let score = 33
/*
let score = "rupa"
let score = false
let score = null
let score = undefined
let score = "33abc"
let score = "33" -> string
*/

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
  "33" => 33
  "33abc" => NaN
  true => 1; false => 0
*/

let isLoggedIn = "rupa"

let booleanIsloggedIn = Boolean(isLoggedIn)
//console.log(booleanIsloggedIn);

/*
  1 => true; 0 => false
  "" => false
  "rupa" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **************** Operations ****************

let value = 5
let negValue = -value
//console.log(negValue)

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);
*/

let str1 = "hello"
let str2 = " rupa"

let str3 = str1 + str2
// console.log(str3); 

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2")

// console.log( (3 + 4) * 5 % 3);

console.log(+true)
console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // code readability is not good here

let gameCounter = 100
gameCounter++
console.log(gameCounter);
