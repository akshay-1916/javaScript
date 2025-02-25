// Promises

// Promises is for "eventual" completion of task.It is an object in JS. It is a solution to callback hell.

// let promise=new Promise((resolve,reject)=>{...})

// 

let promise=new Promise((resolve,reject)=>{
  console.log("Iam a promice.");
  resolve(123);
})

// let promise2=new Promise((resolve,reject)=>{
//   console.log("Iam a promice.");
//   reject("some error found");
// });


function getData(dataId,getNextData){
  return new Promise((resole,reject)=>{
    setTimeout(()=>{
      console.log("data",dataId);
      resolve("Succes");
    if(getNextData){
      getNextData();
    }
    },5000);
    
  })
}

