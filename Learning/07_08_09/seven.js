//Prototypes

// const student = {
//     fullName : "Harsh Mishra",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks = ",this.marks);
//     }
// }

// const employee = {
//      calcTax1() {
//         console.log("Tax rate is 10%");
//      },
//      calcTax2 : function () {
//         console.log("Tax rate is 20%");
//      }
// };

// const karanArjun = {
//     salary:50000,
// }

// karanArjun.__proto__ = employee;


// // Classes

// class TATAcar {
//     // Creating constructor
//     constructor(brand,milage) {
//         console.log("Creating New Object");
//         this.brandName = brand;
//         this.milage = milage;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
//     // setBrand(brand){
//     //     this.brandName = brand;
//     // }
// }

// let tiago = new TATAcar("TATA Product",20);
// // tiago.setBrand("TATA Product");
// console.log(tiago);


// // Inheritence

// class Parent {
//     hello() {
//         console.log("hi");
//     }
// }
// class Child extends Parent {
//     name() {
//         console.log("harsh");
//     }
// }
// let obj = new Child();


// // Super KeyWord

// class Person{
//     constructor() {
//         console.log("Enter Parent Constructor")
//         this.species = "hi harsh";
//         console.log("Exit Parent Constructor")
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class Engineer extends Person {
//     constructor(branch){
//         console.log("Enter Child Constructor")
//         super(); //to invoke parent class constructor
//         this.branchName=branch;
//         console.log("Exit Child Constructor")
//     }
//     work(){
//         super.eat();
//         console.log("Build Something");
//     }
// }
//  let harsh = new Engineer("CSE");
// console.log(harsh.work());

// //Project 1
// let Data = "HM";
// class User {
//     constructor(name, email){
//       this.name=name;
//       this.email=email;  
//     }

//     viewData() {
//         console.log("data = ",Data);
//     }
// }

// //Project 2

// class Admin extends User{
//     editData(){
//         Data = "Harsh Mishra"
//     }
//     constructor(name, email){
//         super(name,email);
//     }
// }


// let stu1 = new User("Harsh","abc@fake.com");
// let stu2 = new User("Tanu","def@fake.com");
// let teacher1 = new User("Sraddha","apnacollege@fake.com");

// let admin1=new Admin("HM","admin@college.com");

//Error Handeling
let a=10;
let b=5;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);
}catch(err)
{
    console.log("error = ",err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);

