//Inheritance: Implements (Interfaces can be used to define the type a class must follow through the implements keyword.)

//Example :
interface yoInterface {
  id: number;
  name: string;
  register(): string;
}
class y implements yoInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  //we not to declare any types in member function
  register() {
    return this.name;
  }
}

const e = new y(10001, "rahulsaini");
console.log(e);
console.log(e.register());

//Inheritance: Extends (Classes can extend each other through the extends keyword. A class can only extends one other class)

//Example
class Cteacher {
  name: string;
  id: string | number;

  constructor(name: string, id: number | string) {
    this.name = name;
    this.id = id;
  }
}
class Cstudent extends Cteacher {
  age: number;

  constructor(name: string, id: number | string, age: number) {
    super(name, id);
    this.age = age;
  }

  Display() {
    return `name is : ${this.name} , id is : ${this.id} , age is : ${this.age}`;
  }
}
const Cs1 = new Cstudent("rahulsaini", 10001, 22);
const Cs2 = new Cstudent("yoman", 10002, 42);
const Cs3 = new Cstudent("haha", 10003, 25);
const Cs4 = new Cstudent("rahulmeetawa", 10004, 56);
const Cs5 = new Cstudent("rahul", 10005, 24);

console.log(Cs1.Display());
console.log(Cs2.Display());
console.log(Cs3.Display());
console.log(Cs4.Display());
console.log(Cs5.Display());
