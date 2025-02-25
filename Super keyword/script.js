// super keyword
// super keyword is use to call to the constructor of its parents class to access the parents property and methods.

// super(args):call Prents constructor
// super.parentMethod(args)

class Person{
    constructor(name){
        console.log("Enter parent constructor");
        this.species="homo species";
        this.name=name;
    }
    eat(){
        console.log("Eat");
    }

}


class Engineer extends Person{
    constructor(name){
        console.log("Enter child Constructor");
        super(name); //invoke parent class construcrtor.
        // this.branch=branch;
        // console.log("Exit Child Constructor");
    
    }

    work(){
        super.eat();
        console.log("Solve Problem,duild something");

    }

}

let engObj=new Engineer();