// singleton -> if we declare like literals then singleton does't made
// but when we use construstor then it will make singleton
// object.create()

const { jsx } = require("react/jsx-runtime")

// object literals

const mySym = Symbol("Key1")


const JsUser = {
  name: "Rupa",
  [mySym]: "mykey1",
  age: 22,
  gender: "female",
  location: "Dhanbad",
  email: "rupaa@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser.gender)
// console.log(JsUser.location);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "singh@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "singhrupa@outlook.com"
//console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
  console.log('Hello JS User, ${this.name}');
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);



