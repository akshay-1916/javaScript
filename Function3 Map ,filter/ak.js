// Map
// crerate a new array with the result of some operation.The value its callback return are used to from new array

// arr.map(callbackFnx(value,index,array))


arr=[1,2,3,4,5,6];

arr.map((val)=>{
    console.log(val*2);
})


// Filter
// creat a new array of elements that give true for a condition/filter.
// e.g:all even element

aq=[1,2,3,4,6,7,99,77,5,43,22];

aq.filter((v)=>{
    return v%2==0;
})


let nae=aq.filter((va)=>{
    return va>5;
})

console.log(nae);