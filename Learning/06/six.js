let btn1 = document.querySelector('#btn1');

// btn1.onclick=()=>{
//     console.log("Button was clicked");
//     let a=20;
//     a++;
//     console.log(a);
// }

// //event object
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// //event listener (add)
// btn1.addEventListener("click",()=>{
//   console.log("Hello");
//   console.log("Harsh Mishra");
// });

// //event listener with object  (add)
// btn1.addEventListener("click",(e)=>{
//     console.log("Hello");
//     console.log(e);
//   });

// //event listener(remove)
// btn1.addEventListener("click",()=>{
//     console.log("Handler1");
// });
// btn1.addEventListener("click",()=>{
//     console.log("Handler2");
// });
// const handler3 = () => {
//     console.log("Handler3");
// };
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click",()=>{
//     console.log("Handler4");
// });

// btn1.removeEventListener("click", handler3);

// let box = document.querySelector('#box');
// box.onmouseover=()=>{
//     console.log("You are in the box");
// }


//Practice 1
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode='light';
modeBtn.addEventListener("click",()=>{
    if(currMode=='light')
    {
    currMode="dark";
    //Add style in line JS page
    //  document.querySelector("body").style.backgroundColor = "black";
    //  document.querySelector("body").style.color = "white";

    //Add style out line CSS page through classes
    body.classList.add("dark");
    body.classList.remove("light");
    }
    //NOTE: Jab hum CSS ke liye ko bhi class ko "add" karte hai to ushe "remove" bhi karna padta hai thik se kam karne ke liye!!
    else
    {
    currMode='light';
    //Add style in line
    //  document.querySelector("body").style.backgroundColor = "white";
    //  document.querySelector("body").style.color = "blue";
    
    //Add style out line CSS page through classes
    body.classList.add("light");
    body.classList.remove("dark");
    }
    console.log(currMode);
});