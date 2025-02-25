let p=[122,250,600,100,300];
let i=0;
for(let v of p){
    console.log(`current price is ${v}`);
    let off=v/10;
    p[i]=p[i]-off;
    console.log(`after offer price is ${p[i]}`)
i++;
}

// method 2
let w=[122,250,600,100,300];
 
for(let i=0;i<w.length;i++){
    let of=w[i]/10;
    w[i]=w[i]-of;

}
console.log(w);