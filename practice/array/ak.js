let m=[89,88,98,86,80,90];
sum=0;

for(let i=0;i<m.length;i++){
    sum=sum+m[i];
}

let ave=sum/m.length;
console.log(ave);


// method 2
let o=[89,88,98,86,80,90];
sum=0;
for(let v of o){
    sum=sum+v;
}
let av=sum/m.length;
console.log(av);

