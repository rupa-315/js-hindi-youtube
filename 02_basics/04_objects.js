const tinderUser = new Object()   // SINGLETON OBJECT
//const tinderUser1 = {}    //NON-SINGLETON OBJECT

console.log(tinderUser);
//console.log(tinderUser1);

tinderUser.id = "123abc"
tinderUser.name = "jiya"
tinderUser.isLoggedIn = "true"

//console.log(tinderUser);

const regularUser = {
  email: "some@google.com",
  fullname: {
    userfullname: {
      firstname: "Rupa",
      lastname: "Singh"
    }
  }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 =  {1: "a", 2: "b"}
const obj2 =  {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
  {
    id: "12abc",
    email: "john@gmail.com"
  },

  {
    id: "12abc",
    email: "john@gmail.com"
  },

  {
    id: "12abc",
    email: "john@gmail.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('address'));


const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "hitesh"
}

//course.courseInstructor
const{courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);


//JSON API
// {
//   "name": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free"
// }

[
  {},
  {},
  {}
]