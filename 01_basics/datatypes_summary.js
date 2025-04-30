// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.5

const stringName = "RUPA"

const isLoggedIn = true
const outsideTemo = null
let userEmail     //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 3632910927776453421n



// Reference(Non Primitive)

// Array, Objects, Functions
const subjects = ["Maths", "Science", "English"];

let myObj = {
    name: "Rupa",
    age: "22"
}

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof null);

/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/


