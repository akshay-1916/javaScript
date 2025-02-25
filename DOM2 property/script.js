// DOM Manipulation

// properties
// 1.tagName:returns tag element nodes
// 2.innerText:returns the next content of the element and all its children
// 3.innerHTML:returns the plain text or HTML contents in the element
// 4.textContent:returns textual content even for hidden elements

let d=document.querySelector("div");
console.dir(d);
console.log(d.innerText);
console.dir(d.innerHTML);

console.log(d.innerText="abc");


