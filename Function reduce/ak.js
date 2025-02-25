// reduce
// performs some operations and reduce the array to single value.It reduce the single value.

let arr=[1,2,3,4,5,6,7,8,90];

const a=arr.reduce((prev,curr)=>{
    return prev+curr;
})

console.log(a);

let qq=[22,34,44,54,2,112,45,67];
const o=qq.reduce((prev,curr)=>{
    return prev>curr ? prev:curr;
})
console.log(o)