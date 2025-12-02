//Synchronous Code

// console.log("one");
// console.log("two");
// console.log("three");



//Asynchronous Code

// console.log("one");
// console.log("two");
//    //Syntax 1 to set time for excution
//  function hello() {
//     console.log("hi harsh");
//  }
//  setTimeout(hello, 2000)//timeout; 2s=2000
//    //Syntax 2 to set time for excution
//  setTimeout(() => {
//     console.log("Harsh Mishra");
//  },5000);
// console.log("three");



//Callback 

// function sum(a,b) {
//   console.log(a+b);
// }
// function cal(a,b,sum){
//     sum(a,b);
// }
// cal(115,98,sum);
//    //making a new function under the existing function "cal" by passing
// cal(1, 2, (a,b) => {
//     console.log(a+b);
// });



//Callback Hell, Also known as Call DOOM

//    //Written as Callback concept
// function getData(dataId,getNextData)
// {
//     setTimeout(() => {
//         console.log(dataId);
//         if(getNextData)
//         getNextData();
//     }, 3000);
// }
// getData(1, () =>{
//     getData(2, () =>{
//         getData(4);
//     });
// });
// getData(3);

//    //Same chiz ko promise chaining ke cocept se write karna
// function getData(dataId) {
//        return new Promise((resolve,reject) => {
//         setTimeout(() => {
//            console.log(dataId);
//            resolve("sucess");
//        }, 3000);
//     });
// }
// console.log("Fetching detail 1..")
// getData("hi")
//     .then((res) => {
//         console.log("Fetching detail 2..")
//         return getData("harsh");
//     })
//     .then((res) => {
//         console.log("Fetching detail 3..")
//         return getData("mishra");
//     })
//     .then((res) => {
//         console.log("sucess");
//     });



// Promises (to solve problem of nested or pyramid callback)

// let p=new Promise((resolve, reject) =>{
//     console.log("Hi I have Promise");
//     //resolve("sucess");
//     //reject("Some Error");
// });
// function getData(dataId,getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("sucess");
//             if(getNextData)
//             getNextData();
//         },5000);
//     });
// }
// let result = getData(123);
// console.log(result);



//Promise (use of [then() and catch()])

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         //resolve("sucess");
//         reject("404 error");
//     });
// }
// let promise = getPromise();
// //then() for resolve
// promise.then((res) => {
//     console.log("promise fulfilled : ",res);
// });
// //catch() for reject
// promise.catch((err) => {
//     console.log("promise rejected : ",err);
// });



//Promise Chaining

// function asynFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("hi harsh");
//             resolve("sucess");
//         },4000);
//     });
// }
// function asynFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Good Morning");
//             resolve("sucess");
//         },4000);
//     });
// }

//    //Simple consoling (yaha pe aysha karenge toh dono sath me console hoga same time me sath hi)

// console.log("Fetching detail 1..")
// let p1=asynFun();
// p1.then((res) => {
//     console.log("restult : ",res);
// });
// console.log("Fetching detail 2..")
// let p2=asynFun2();
// p2.then((res) => {
//     console.log("restult : ",res);
// });

//    // Chaining consoling (yaha pe aysha karenge toh dono alag-alag console hoga different time me ek ek karke)

// console.log("Fetching detail 1..")
// let p1=asynFun();
// p1.then((res) => {
//     console.log("restult : ",res);
//     console.log("Fetching detail 2..")
//     // let p2=asynFun2();
//     // p2.then((res) => {
//     // console.log("restult : ",res);
//     // });
//     //Eshko ayese bhi likh sakte hai
//     asynFun2().then((res) => {
//         console.log("restult : ",res);
//     });
// });



//Async & Await

//    //Basic Example
// async function helo(){
//     console.log("hi");
// }
// let a=helo();
// console.log("Return Promise Compulsury : ",a);

//    //Advance Example 1
// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("hi harsh");
//             resolve("Sucess");
//         }, 2000);
//     });
// }
// async function sayHi() {
//     await api();
//     await api();
// }
// let say = sayHi();
// console.log("Fetching... : ",say.api);

//    //Advance Example 2
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("hi harsh : ", dataId);
//             resolve("Sucess");
//         }, 2000);
//     });
// }
// async function getAllData(){
//     console.log("Fetching Detail 1...");
//     await getData(1);
//     console.log("Fetching Detail 2...");
//     await getData(2);
//     console.log("Fetching Detail 3...");
//     await getData(3);
// }
// let get=getAllData();
// console.log(get.getData);



// IIFE (Immidiate Invoked Function Ecpression)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("hi harsh : ", dataId);
//             resolve("Sucess");
//         }, 2000);
//     });
// }
// console.log("Automatic Executing Without Calling Function");
// (async function () {
//     console.log("Fetching Detail 1...");
//     await getData(1);
//     console.log("Fetching Detail 2...");
//     await getData(2);
//     console.log("Fetching Detail 3...");
//     await getData(3);
// }) ();

 