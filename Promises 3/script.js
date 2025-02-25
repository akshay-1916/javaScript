function asyncFunc1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data1");
      resolve("success");
    },4000);
  })
}

function asyncFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data2");
      resolve("success");
    },4000);
  })
}


console.log("feching data1...");
asyncFunc1().then((res)=>{
  

  console.log("feching data2...");
asyncFunc2().then((res)=>{
 
});


});


