a=document.querySelector(".b");
let cm="light";
let body=document.querySelector("body");




a.addEventListener("click",()=>{
    if(cm=="light"){
        cm="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }

    else{
        cm="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})
