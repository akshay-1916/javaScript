// Events
// The change in state of object.
// Events are fired code of "intresting changes" that may affect code execution.

// 1.Mouse event(click,double click,etc)
// 2.keyboard event:keypress,keydown,keyup.
// 3.From events:submit,etc.
// 4.print and many more.

// Event in JS
// node.event=()=>{
// handle here
//    }

let b=document.querySelector("#btn1");

b.onclick=()=>{
    console.log("btn1 was click");
    let a=25;
    a++;
    console.log(a);
};

let di=document.querySelector(".d1");

di.onmouseover=()=>{
    console.log("you are inside div");
};
console.log(b.type);