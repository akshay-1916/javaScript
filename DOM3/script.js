// DOM Manipulation

// properties
// 1.tagName:returns tag element nodes
// 2.innerText:returns the next content of the element and all its children
// 3.innerHTML:returns the plain text or HTML contents in the element
// 4.textContent:returns textual content even for hidden elements

let d=document.querySelector("h2");
console.dir(d.innerText);

d.innerText=d.innerText+" From apna college"


console.dir(d.innerText);
