// inheritance is passing down properties and methods from parent class to child class.

// class Parent{
// }



// class Child extends Parent{
    
// }


class Parent{
    hellow(){
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj=new Child();


// 

class Person{

    constructor(species){
        this.species="Homo Sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

}

class Engineer{
    work(){
        console.log("Java Program Build something");

    }
}


let aksEng=new Engineer();