// singleton object (Constructor Pattern follw karta hai par literals ka nahi)

// object literal ka use karke object declare karna

const mySum = Symbol("sum of two numbers"); // unique property key

const person1 = {
    name: "Harsh",
    "full name": "Harsh Mishra",
    [mySum]: "This is sum property", // computed property
    age: 30,
    profession: "Developer",
    hobbies: ["coding", "reading", "gaming"],
    email: "harsh@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],
}

console.log(person1);
console.log(typeof person1);
console.log(typeof person1.email);
console.log(person1.name);
console.log(person1[mySum]);
console.log(person1["full name"]);
console.log(person1.hobbies);
console.log(person1.isLoggedIn);
console.log(person1.email);
console.log(person1["email"]);

person1.age = 31; // update age property
console.log(person1.age);
console.log(person1);

// Object.freeze(person1); // freeze the object, ab koi bhi property add, delete ya update nahi kar sakte
// person1.age = 32; // update age property
// console.log(person1.age); // 31


person1.greeting = function() { // method add kiya object me
    console.log("Hello " + this.name);
    console.log("Your full name showed " + this["full name"]);
    console.log(`Your age is ${this.age}`);
}
person1.greeting();
console.log(person1);

