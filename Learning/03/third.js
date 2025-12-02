/*
//Array
//  
let marks=[96,82,75,64,36];
console.log(marks);
console.log(marks.length);

let hero=['srk','sk','ak','az'];
console.log(hero);
for(let i=0;i<hero.length;i++)
{
    console.log(hero[i]);
}
//for of
for(let el of hero)
{
    console.log(el);
}
*/
/*
//Practice 1
let n=prompt("Enter the size");
let marks=[];
for(let i=0; i<n; i++)
{
     marks[i]=prompt("Enter thr marks of",i+1);
}
let s=0;
for(let val of marks)
{
    console.log(val);
    s+=val;
}
let v=s/n;
console.log('Average Marks= ${v}');
*/
/*
//Array List
let food=['potato','apple','tomato'];
console.log(food);
food.push('chips','burger','paneer');
console.log(food.toString());
let a=food.pop();
console.log(a);

let marvel=['thor','ironman','spiderman'];
let dc=['batman','superman'];
let heroes=marvel.concat(dc);
console.log(marvel);
console.log(dc);
console.log(heroes);
let val=marvel.shift();
console.log(val);
*/
/*
//Slice Method 
let marvel=['thor','ironman','spiderman'];
console.log(marvel.slice(1,2));
console.log(marvel.slice(1,3));
//Splice Method {splice(stert,delCount,newElement)}
let arr=[0,1,2,3,4,5,6,7];
console.log(arr);
arr.splice(2,2,99,100);
console.log(arr);
arr.splice(2,0,101);
console.log(arr);
arr.splice(3,1);
console.log(arr);
*/
