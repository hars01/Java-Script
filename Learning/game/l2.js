/*
//Use of LOOPs
for(let i=1; i<=10; i++)
console.log("hi harsh");
//Value updation AND for global declration use var
for(var i=0; i<=10;i++)
console.log("i=",i); 
console.log("i=",i);
//while loop
while(i<=20)
{
    console.log("hi");
    i++;
}
//do while loop
let a=1;
do{
    console.log("a-",a);
    a++;
}while(a<=5);
//for-of Loop
let s="Harsh Mishra";
for(let j of s) //j is iterator
{
    console.log("Character:",j);
}
//for-in loop
let student ={
    Name: "Tanu Tiwari",
    Age: 22,
    CGPA: 9.5,
};
for(let key in student){
    console.log(key,":",student[key]);
}

//Practice 2
let gameNo=25;
let userNo=prompt("Guess the Game Number:");
while(userNo!=gameNo)
userNo=prompt("You Guess Wrong Number,Try Again!");
console.log("Congratulations,You Entered the Right Number");
*/
/* 
//Strings
let v="       hi harsh    ";
//Templete Literals(Special Type Of String)
let pen={
    name1: 'fair',
    price1: 10,
    name2: 'Agni',
    price2: 5,
};
let output=`The cost of ${pen.name2} pen is ${pen.price2} rupees`;
//This ${expression} phenomina is known as String Interpolation
 console.log(output); 
console.log("The cost of",pen.name1,"pen is",pen.price1,"rupees");
let sen=`I am Harsh Mishra`;
console.log(typeof sen);
//Use of \n
console.log("Harsh\nTanu");
//String Method 
let newstr=v.toUpperCase();
console.log(newstr);
//*NOTE* - String are immutable in Java Language
// trim are use to remove all unusual white space 
console.log(v.trim());
//many method like {slice(start,end),concat(str2),replace(searchVal,newVal),charAt(idx)}
 let str="akasm"
 console.log(str.replace("m","h"));
 console.log(str.replaceAll("a","p"));
*/
//PRACTICE 1
let person=prompt("Enter Your Full Name");
let user="@" + person + person.length;
console.log("Your Suggested User Name:",user);

