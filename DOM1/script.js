// DOM:Document Object Model
// The 3 Musketeers of  Web Dev
// HTML(structure)
// CSS(style)
// JS(logic)

// 
console.log(document.body);
console.dir(document.body);

console.log(document.head);
console.dir(document.head);

// DOM Manipulation

// Selecting with id:document.getElementById("myId")
let heading=document.getElementById("heading");
console.log(heading);

//selecting with class:document.getElementsByClassName("myClass") 
let c=document.getElementsByClassName("myclass");
console.dir(c);

// selecting with tag:document.getElementByTagName("p")
let t=document.getElementsByTagName("p");
console.dir(t);

let w=document.querySelector("p");
console.dir(w);
let y=document.querySelectorAll("p");
console.dir(y);

let u=document.querySelector("#myid");
console.dir(u);

let p=document.querySelector(".myclass");
console.dir(p);