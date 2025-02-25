let n=prompt("Enter the number:");

if(n>90 && n<100){
    console.log("A");
}
else if(n>70 && n<89){
    console.log("B");
}
else if(n>60 && n<69){
    console.log("C");
}

else if(n>50 && n<59){
    console.log("D");
}

else if(n<49){
    console.log("F");
}

else {
    console.log("Enter the number betwen(1-100)");
}