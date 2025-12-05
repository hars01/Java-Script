// Sigleton Pattern Object Example in JavaScript

const hiFoodieUser = new Object() // Object Constructor Syntax
// const hiFoodieUser = {} // Object Literal Syntax


hiFoodieUser.name = "John Doe"
hiFoodieUser.email = "john.doe@example.com"
hiFoodieUser.isLoggedIn = true

console.log(hiFoodieUser);

const regularUser = {
    email: "harsh@example.com",
    fullName: {
        userfullName: {
            firstName: "Harsh",
            lastName: "Mishra"
        },
    },
}

console.log(regularUser);
console.log(regularUser.fullName.userfullName.firstName);
console.log(regularUser["fullName"]["userfullName"]["lastName"]);

// Adding methods to objects

const obj1 = {1: "value1", 2: "value2"}
const obj2 = {3: "value3", 4: "value4"}

const mergedObj1 = {...obj1, ...obj2} // spread operator use karke object merge karna
const mergedObj3 = {obj1, obj2} // nested object ban gaya hai yeh

const mergedObj2 = Object.assign({}, obj1, obj2) // Object.assign() is a static method  jiska use karke object merge karte hai
const mergedObj4 = Object.assign(0) // empty object ban gaya hai yeh



console.log(mergedObj1);
console.log(mergedObj2);
console.log(mergedObj3);
console.log(mergedObj4);


// Object kaise handel karenge jab database se data aayega

const dataFromDB = [
    {
      id: 1,
      email: "john.doe@example.com"
    },
    {
      id: 2,
      email: "john.doe@example.com"
    },
    {
      id: 3,
      email: "john.doe@example.com"
    },
]

dataFromDB[1].email
console.log(dataFromDB[1].email);
console.log(dataFromDB);

console.log(Object.keys(dataFromDB)); // object ke sare keys ko array me convert karke laega
console.log(Object.values(dataFromDB)); // object ke sare values ko array me convert karke laeg
console.log(Object.entries(dataFromDB)); // object ke sare key-value pairs ko array of arrays me convert karke laega    


console.log(dataFromDB.hasOwnProperty("email")); // false




// Destructuring Objects

const course = {
    coursename: "music theory",
    price: 99,
    courseInstructor: "harsh mishra"
}   

// const {courseInstructor} = course // object destructuring
// console.log(courseInstructor); // harsh mishra
                  //OR
const {courseInstructor: instructor} = course // object destructuring
console.log(instructor); // harsh mishra


// objext destructuring with function parameters special used in react js***

// const navbar = ({courseInstructor}) => {

// }

// navbar(courseInstructor="harsh mishra");