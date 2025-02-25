// A java script object is an entity hsving state and behavior(properties and method).

// JS objects have a special property called prototype.
// We can set prototype using __proto__

// if object & prototype have same method,object's method will be used.


const student={
    fulname:"akshay",
    marks:99,
    printMarks:function(){
        console.log("marks is=",this.marks);
    },
}

const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    }
};

const karanArjun={
    salary:50000,
};


const karanArjun2={
    salary:50000,
};

const karanArjun3={
    salary:50000,
};
const karanArjun4={
    salary:50000,
};

karanArjun.__proto__=employee;

karanArjun2.__proto__=employee;


// class
// class is progtam code template for creating object.
// Those object will have some state(variable) and some behavior (functions) inside it.

// class MyClass{
// constructor(){...}
// myMethod(){...}
// }


// let myObj=new MyClass();


class ToyotaCar{
    
    constructor(brand,mileage){
        console.log("Create a new Object");
        this.brand=brand;
        this.mileage=mileage;
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}


let fortuner=new ToyotaCar("fort",10);
console.log(fortuner);

let lexus=new ToyotaCar("lex",30);
console.log(lexus);

