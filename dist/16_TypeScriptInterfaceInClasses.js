"use strict";
//Interface IN Class 
//Inheritance: Implements
class yo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //we not to declare any types in member function
    register() {
        return this.name;
    }
}
const e1 = new yo(10001, "rahulsaini");
console.log(e1);
console.log(e1.register());
