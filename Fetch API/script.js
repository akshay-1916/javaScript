// fetch API
// The Fetch API provides an interface for fetching(sending/receving) resources.

// It use Request and Responce object.
// The fatch method is use to fetch a resorce (data).
// let promise=fetch(url,[option])

const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

// const getFacts=async()=>{
//   console.log("getting data..");
//   let response=await fetch(URL);
// console.log(response);
// let data=await response.json();
// factPara.innerText=data[2].text;

// }

// Understanding Terms

// AJAX is Asynchronous JS and XML
// JSON is Java script Object Notation

// json() method:return asecond promise that resolves with the result of parsing the responce body text as JSON.(Input is JSON ,output is JS object)

function getFacts(){
  fetch(URL)
  .then((responce)=>{
    return responce.json();
  })
  .then((data)=>{
    console.log(data);
    factPara.innerText=data[2].text;
  });
}

btn.addEventListener("click",getFacts);


