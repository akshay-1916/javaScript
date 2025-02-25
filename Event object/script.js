// Event Object

// It is a special objet that has detail about the event.All event handelers have access to the Event object's and methods.

let b1=document.querySelector("div");

div.onmouseover=()=>{
    console.log("you are inside div");


}

// Event Listeners

// node.addEventListener(event,callback)
// node.removeEventListener(event,callback)

// Note:the callback reference should be same to remove

div.addEventListener("click",()=>{
    console.log("you are inside div");


});