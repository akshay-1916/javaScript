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

let v=prompt("Enter a number:");
let t=[];

for(let i=1;i<=n;i++){
    t[i-1]=i;
}
console.log(t);

let e=r.reduce((m,h)=>{
    return m*h;
});
console.log(e);