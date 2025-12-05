// array

// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
// console.log(myArr[1]);
// console.log(typeof myArr);
// console.log(myArr.__proto__);
// console.log(myArr.length);


// const myHeors = ["shaktiman", "naagraj"]
// console.log(myHeors);
// console.log(typeof myHeors);
// console.log(myHeors.__proto__);
// console.log(myHeors.length);



// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);
// console.log(typeof myArr2);
// console.log(myArr2.length);


// // Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);


// myArr.shift() // remove from the beginning
// console.log(myArr);
// myArr.unshift(9) // add at the beginning
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // only show index of existing value like for 3 index is 2, for non existing value like 9 index is -1


// const newArr = myArr.join() // convert array to string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);


// slice, splice

console.log("Original ", myArr);
const myn1 = myArr.slice(1, 3) // does not modify original array
console.log("Slice Applied ", myn1);
console.log("OriginalArray After Slice ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("Original ", myn2);
console.log("Splice Applied ", myArr); // modifies original array
console.log("OriginalArray After Splice ", myn2);