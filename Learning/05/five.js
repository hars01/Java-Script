//DOM

// console.log("Hello ");
// alert("Hello harsh");
// console.dir(document.body);
// console.log(document.body);
// let h=document.getElementById("heading")
// console.log(h);
// console.dir(h);
// let h2=document.getElementsByClassName("head")
// console.log(h2);
// console.dir(h2);
// let para=document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);
// let ele=document.querySelector("p"); //one element
// console.dir(ele);
// let all=document.querySelectorAll("p");
// console.dir(all);
// let allclass=document.querySelector(".head");
// console.dir(allclass);
// let allid=document.querySelector("#heading");
// console.dir(allid);


// New Topic

// let div=document.querySelector("div");
// console.log(div);
// let heading=document.querySelector("h1");

// // Pactice 1

// let head=document.querySelector("h2");
// console.dir(head.innerText);
// head.innerText=head.innerText+" harsh";

// //Practice 2

// let div=document.querySelectorAll(".box");
// console.dir(div);
// console.dir(div[0].innerText);
// console.dir(div[1].innerText);
// console.dir(div[2].innerText);
// div[1].innerText="tanu";
// div[2].innerText="tiwari";
// console.dir(div[0].innerText);
// console.dir(div[1].innerText);
// console.dir(div[2].innerText);

//Attributes

//Get & Set
// let div=document.querySelector("div")
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let name=div.getAttribute("name");
// console.log(name);

// let p=document.querySelector("p")
// console.log(p.getAttribute("class"));
// console.log(p.setAttribute("class","newClass"));
 
//Style

// let div=document.querySelector("div")
// div.style.backgroundColor="yellow";
// div.style.fontSize="25px";
// div.innerText="hi harsh";

//insert & remove

// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
// let heading=document.createElement("h1");
// heading.innerHTML="<i>hi harsh</i>";
// document.querySelector("body").prepend(heading);
//  let para=document.querySelector("p");
//  para.remove();

//Practice 3

// let newbtn=document.createElement("button")
// newbtn.innerText="Click me";
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);

//Practice 4

let para=document.querySelector("p");
para.getAttribute("class");
para.setAttribute("class","newClass");
// console.log(para.classList());
// console.dir(para.classList("harsh"));
// para.classList;
