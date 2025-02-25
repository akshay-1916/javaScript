// key:value

const student={
    fname:"akshay kokare",
    age:19,
    cgpa:8.5,
    ispass:true

};


console.log(student.age);
console.log(student["age"]);

student["age"]=student["age"]+1;
console.log(student.age);

