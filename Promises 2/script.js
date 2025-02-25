// Promises
// .then() & .catch()
// promise.then((res)=>{...})
// promise.catch((err)=>{.. })

const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("I am a promises");
    resolve("Success");
  });
};

let promice=getPromise();
promice.then((res)=>{
  console.log("Promise fulfilled",res);
});

promice.catch((err)=>{
  console.log("rejected",err);
});