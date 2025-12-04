// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // year, month (0-11), date 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // year, month (0-11), date , hour, minute, second
// let myCreatedDate = new Date("2023-01-14") // ISO format
let myCreatedDate = new Date("01-14-2023") // MM-DD-YYYY
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // milliseconds since 1 Jan 1970
console.log(myCreatedDate.getTime()); // milliseconds since 1 Jan 1970 for created date
console.log(Math.floor(Date.now()/1000)); // seconds since 1 Jan 1970

let newDate = new Date()
console.log(newDate); // current date and time
console.log(newDate.getFullYear());
console.log(newDate.getDate()); // date of the month    
console.log(newDate.getMonth() + 1); // month 0-11
console.log(newDate.getDay()); // day of the week 0-6

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {    // to get month name or day name
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZoneName: "short",
//     timeZone: "Asia/Kolkataa",
// })
// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZoneName: "short",
//     timeZone: "Asia/Kolkata",
// }));
// console.log(newDate.toLocaleString('default', { weekday: "long" }));


newDate.setFullYear(2020)
console.log(newDate.toLocaleString());
newDate.setMonth(0)
console.log(newDate.toLocaleString());
newDate.setDate(15)
console.log(newDate.toLocaleString());
newDate.setHours(5)
console.log(newDate.toLocaleString());
newDate.setMinutes(30)
console.log(newDate.toLocaleString());
newDate.setSeconds(45)
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString());
console.log(newDate);

// Date comparison
let date1 = new Date("2023-01-15")
let date2 = new Date("2023-01-20")
console.log(date1 > date2);
console.log(date1 < date2);
console.log(date1.getTime() > date2.getTime()); // better way to compare dates          
console.log(date1.getTime() < date2.getTime());
console.log(date1 === date2); // false because they are different objects
console.log(date1.getTime() === date2.getTime()); // true if both dates are same
console.log(date1.getTime() !== date2.getTime());
// console.log(date1 === date2); // true if both dates are same
console.log(date1 !== date2);

// Date difference
let diff = date2.getTime() - date1.getTime() // in milliseconds
console.log(diff);
let diffInDays = diff / (1000 * 60 * 60 * 24)
console.log(diffInDays);
let diffInHours = diff / (1000 * 60 * 60)
console.log(diffInHours);
let diffInMinutes = diff / (1000 * 60)
console.log(diffInMinutes);
let diffInSeconds = diff / 1000
console.log(diffInSeconds);

// Date addition and subtraction
let addDays = (date, days) => {
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}
console.log(addDays(new Date("2023-01-15"), 5)); // add 5 days
console.log(addDays(new Date("2023-01-15"), -5)); // subtract 5 days
let subtractDays = (date, days) => {
    let result = new Date(date)
    result.setDate(result.getDate() - days)
    return result
}
console.log(subtractDays(new Date("2023-01-15"), 5)); // subtract 5 days
console.log(subtractDays(new Date("2023-01-15"), -5)); // add 5 days
// Similarly we can create functions for adding and subtracting months and years
// End of Dates

