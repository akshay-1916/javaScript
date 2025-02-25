// Async-Await

// async function always returns a promise.
// async function myFunction(){...}

// await pauses the execution of its surrounding async function until the promise is settled
// it return promis compalsary

// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("weather data");
//     resolve(200);
//     },2000)
//   });
// }


// async function getWheatherData(){

// await api();
// await api();
// } 



function getData(dataId){

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("weather data");
    resolve(200);
    },2000)
  });
}

async function getAllData(){
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");

  await getData(2);
  console.log("getting data3....");

  await getData(3);
}

// IIFE:immediately invoked function Expression
// IIFE is a function that is called immediately as soon as it is defined.

(async function getAllData(){
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");

  await getData(2);
  console.log("getting data3....");

  await getData(3);
})();
