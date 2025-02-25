let DATA="secrate imformation"


class user{
constructor(name,email){
    this.name=name;
    this.email=email;
}


viewData(){
    console.log("Website Data",DATA);
}
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="Some new value";

    }
}

let student1=new user("akshay","Akshay@gmail.com");
let student2=new user("ak","ak@gmail.com");

let teacher1=new user();



let admin1=new Admin("aksh","aaaa@gmail.com");