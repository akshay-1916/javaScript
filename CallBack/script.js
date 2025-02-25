// Sync in JS

// Synchronous:Synchronus means the code runs in perticular sequence of instruction Given in program.Each instruction wait for the previous instruction to complete its execution.

// Asynchronus:Due to Synchronus programing sometime imp instructio get blocked due to some previous instruction,which cause a delay in the UI.
// Asynchronus code execution allows to execute next instructions immediately and doesn't the flow


// console.log("one");
// console.log("two");
// setTimeout(()=>{
//   console.log("akshay");
// },2000);


// console.log("three");


// Callback:A callback is function passed as an argument to another function.

// function sum(a,b){
//   console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//   sumCallback(a,b);
// }

// calculator(2,4,sum);

// const hellow=()=>{
//   console.log("hellow");
// }

// setTimeout(hellow,3000)




// Callback Hell:Nested Callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)

// This style of programing becomes difficult to understand and manage.

function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("Data=",dataId);
    if(getNextData){
      getNextData();
    }
  },2000);
}

getData(100,()=>{
getData(2,()=>{
  getData(5)})
});

