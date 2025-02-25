let ae=[78,89,87,88,90,91,97,86,97];

let nar=ae.filter((val)=>{
    return val>90;
});

console.log("toppers",nar);


let n=prompt("Enter a number:");
let r=[];

for(let i=1;i<=n;i++){
    r[i]=i;
}
console.log(r);

let ee=r.reduce((b,a)=>{
    return b+a;
});
console.log(ee);