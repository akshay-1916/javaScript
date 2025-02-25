// Insert Element
// let el=document.createElement("div");
// 1.node.append(el):add at the end of node (inside)
// 2.node.prepend(el):add at the start of node (inside)
// 3.node.before(el):add before the node (outside)
// 4.node.after(el):add after the node(outside)

let c=document.createElement("button");
c.innerText="click me";
console.dir(c);

let s=document.querySelector("div");
s.append(c)

s.prepend(c);
s.after(c);

let h=document.createElement("h1");
h.innerHTML="<i>hi i am akshay</i>";

let o=document.querySelector("body").prepend(h)

let f=document.querySelector("p");
f.remove();