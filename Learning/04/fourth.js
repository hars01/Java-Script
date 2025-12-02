 /*
 //function
 function myfunction() {
    console.log("Welcome Harsh Mishra!");
    console.log("We are learning JS");
 }
 myfunction();

 function myfunction2(msg) {
   console.log(msg);
 }
 myfunction2("Hi Harsh");

 function sum(a,b) {
    c=a+b;
    console.log("before return");
    return c;
    console.log("after return");
 }
 let v=sum(879,9439.98);
 console.log(v);

 //Arrow Function
 const arrowmul=(a,b)=>{
    return a*b;
 }
 console.log(arrowmul);
 console.log(arrowmul(4,5)); 

 const hello = () => console.log("Hello");
 hello();
 */
/*
//Practice 1
function countVowels(str) {
    let c=0;
    for(var char of str)
   {
    console.log(char);
    if(char==='a'|| char==='e' || char==='i' || char==='o' || char==='u')
        c++;
   } 
console.log(c);
}
countVowels("Harsh Mishra");
*/
/*
//ForEach loop in Arrays 
//CallbackFunction:Here it is a function to excutr for each element in array
//A callback is a function passed as an argument to another function
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
 console.log(val);
});
arr.forEach((val)=>{
    console.log(val);
});

let arr2=['pune','delhi','mumbai','pryagraj']
arr2.forEach((val,idx,arr2)=>{
    console.log(val);
    console.log(val.toUpperCase(),idx,arr2);
})
console.log(arr2);
*/
/*
//Practice 2
let nums=[2,3,4,5,6];
nums.forEach((num)=>{
       console.log(num*num);
});
let calcSquare = (num)=> {
    console.log(num*num);
};
nums.forEach(calcSquare);
console.log(calcSquare(10));
*/
//map Method
//creates a new array with results of some operation.The Value its callback return are used to form new array
let nums=[67,86,90,977];
nums.map((val)=> {
    console.log(val);
});
let newArr=nums.map((val)=> {
    return val;
});
console.log(newArr);
//filter method
//Creates a new array of element that give true for a condition/filter Example: all even element
let arrr=[1,2,3,4,5,6,7,8,9,10];
let even=arrr.filter((val)=>{
    return val%2==0;
});
console.log(even);
//Reduce Method
//Performs some Operation and reduces the array to a single value.It return that single value.
const array=[1,2,3,4];
const sumInitial=array.reduce((res,curr)=> {
    return res+curr;
});
const array2=[5,4,7,9,210,101];
console.log(sumInitial);
const largest=array2.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(largest);
