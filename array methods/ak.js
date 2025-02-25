// push(): add to end
// pop():delete from end & return
// toString():converts array to string



let fooditem=["potato","lichi","potato","mango","banana"];
console.log(fooditem);
fooditem.push("chips");
fooditem.pop();
let tos=fooditem.toString();

console.log(tos);

// concat():joins multiple array and return result
// unshift():add to start
// shift():delete from start and return

let marval=["thor","spider","ironman"];
let dcheros=["superman","batman"];
console.log(marval.concat(dcheros));
// let ne=marval.unshift("akshay");
let nq=marval.shift();

console.log(nq);
console.log(marval);

// sclice()return a piece of array
// slice(startidx,endidx);
let num=[22,44,66,77,88,99,6,5,4,3,21];
console.log(num.slice(3,6));

// splice():change original array(add,remove,replace);
// splice(startidx,delcount,newelem);
console.log(num.splice(3,2,444,555,666));
console.log(num);
console.log(num.length);
console.log(num.splice(3,2));
console.log(num);
num.splice()
