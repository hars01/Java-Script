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

console.log(regularUser); // { email: 'harsh@example.com', fullName: { userfullName: { firstName: 'Harsh', lastName: 'Mishra' } } }
console.log(regularUser.fullName.userfullName.firstName); // Harsh
console.log(regularUser["fullName"]["userfullName"]["lastName"]); // Mishra

// Adding methods to objects

const obj1 = {1: "value1", 2: "value2"} // object literal syntax
const obj2 = {3: "value3", 4: "value4"} // object literal syntax

const mergedObj1 = {...obj1, ...obj2} // spread operator use karke object merge karna 
//o/p: { '1': 'value1', '2': 'value2', '3': 'value3', '4': 'value4' }
//  const mergedObj1 = {...obj1, ...obj2, 5: "value5"} // object merge karte time new key-value pair bhi add kar sakte hai
//o/p: { '1': 'value1', '2': 'value2', '3': 'value3', '4': 'value4', '5': 'value5' }
const mergedObj3 = {obj1, obj2} // nested object ban gaya hai yeh
// o/p: { obj1: { '1': 'value1', '2': 'value2' }, obj2: { '3': 'value3', '4': 'value4' } }

const mergedObj2 = Object.assign({}, obj1, obj2) // Object.assign() is a static method  jiska use karke object merge karte hai
//o/p: { '1': 'value1', '2': 'value2', '3': 'value3', '4': 'value4' }
const mergedObj4 = Object.assign(0) // empty object ban gaya hai yeh



console.log(mergedObj1);
console.log(mergedObj2);
console.log(mergedObj3);
console.log(mergedObj4);


// --------------------Object kaise handel karenge jab database se data aayega-------------------------------

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


console.log(dataFromDB.hasOwnProperty("email")); // false, ye check karne ka tarika hai ki object ke andar email key exist karti hai ya nahi, lekin dataFromDB ek array hai isliye false return karega


// Destructuring Objects

const course = {
    coursename: "music theory",
    price: 99,
    courseInstructor: "harsh mishra"
}   

// course.courseInstructor // harsh mishra
// const {courseInstructor} = course // object destructuring
// console.log(courseInstructor); // harsh mishra
                  //OR
const {courseInstructor: instructor} = course // object destructuring
console.log(instructor); // harsh mishra


// object destructuring with function parameters special used in react js***

// const navbar = (prop.courseInstructor) => {
            // OR
// const navbar = ({courseInstructor}) => {

// }

// navbar(courseInstructor="harsh mishra");