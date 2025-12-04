// Primitive
// 7 types: String, Number, Boolean, Null, undefined, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=true
const outsideTemp=null
let userEmail=undefined // or also use like that let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id==anotherId);
console.log(id===anotherId);

const bigNumber=1234567890123456789012345678901234567890n
console.log(bigNumber);



// Reference Datatype
// 3 types: Object, Array, Functions

const hero=["shaktiman","spiderman","batman", "superman", "ironman", "thor", "captain america", "captain India"];
console.log(hero);
console.log(typeof hero);



let myObj={
    name:"hitesh",
    age:18,
    isLoggedIn:true,
}
console.log(myObj);
console.log(typeof myObj);




const greet=function () {
    console.log("hi harsh");
}
greet();
console.log(typeof greet);


function greet2() { 
    console.log("hello harsh");
}

greet2();
console.log(typeof greet2);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive data types) vs Heap (reference data types)

let myYouTubename="harsh"

let anotherName=myYouTubename
anothername="abhi"

console.log(myYouTubename);
console.log(anothername);

let userOne={
    email:"harsh@sbi.com",
    upi:"harsh@oksbi",
}
console.log(userOne);
let userTwo=userOne
userTwo.email="abhi@sbi.com"

console.log(userOne);
console.log(userTwo);

