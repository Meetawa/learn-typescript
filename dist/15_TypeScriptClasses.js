"use strict";
//ypeScript adds types and visibility modifiers to JavaScript classes.
//Members: Types : The members of a class (properties & methods) are typed using type annotations, similar to variables
/*
class Person {
    namePerson: string;
  }
  
  const person1= new Person();
  person1.namePerson = "Jane";
  console.log( person1.namePerson);

  */
//In above code is right but its show constructor error which is not defind
//how to fix it 
//Example 1: basic class only 
class students {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const s1 = new students("rahul", 1001);
const s2 = new students("saini", "12er");
console.log(`s1 details are : ${s1}`);
console.log(`s2 details are : ${s2}`);
//Example 2: data members and member functions define
class CollegeStudent {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    //member functions
    register() {
        return `${this.name} , ${this.id} : is registers`;
    }
}
const c1 = new CollegeStudent("rahu", 1001);
const c2 = new CollegeStudent("Rahul saini", "19EBKCS091");
console.log(c1.register());
console.log(c2.register());
//Members: Visibility : Class members also be given special modifiers which affect visibility.
/*
-public - (default) allows access to the class member from anywhere
-private - only allows access to the class member from within the class
-protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section
*/
class Members {
    constructor(name) {
        this.name = name;
    }
    Display() {
        return this.name;
    }
}
const p = new Members("yoman");
console.log(p.Display()); // person.name isn't accessible from outside the class since it's private
