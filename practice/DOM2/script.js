let d=document.querySelectorAll("div");
console.dir(d);

let idx=1;
for(div of d){
    div.innerText=`new ${idx}`;
    idx++;
}