//Fetching API
const URL = "https://cat-fact.herokuapp.com/facts";
const f = document.querySelector("#fact");
const b = document.querySelector("#btn");

//   //Using Simple Method To Getting Data From API

// let promise = fetch(URL);
// console.log(promise);

//   //Using async and await Method To Getting Data From API
// const getFacts = async () => {
//     console.log("Detailing Data...");
//     let response = await fetch(URL);
//     console.log(response);
//     console.log(response.status);
//     //To claculte data from api we use json()
//     let data = await response.json();
//     console.log(data);
//     //To convert json data into text form by using text() 
//     console.log(data[0].text);
//     f.innerText = data[1].text;
// }
//  //console.log(getFacts());

    //Same Thing With Promise Chaining
function getFacts(){
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        f.innerText = data[1].text;
    })
}

   //Adding Event Listener for Clicking
b.addEventListener("click", getFacts);