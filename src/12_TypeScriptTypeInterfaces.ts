// Interfaces are similar to type aliases, except they only apply to object types.

//Example 1:
interface Rectangle {//type convert into interface
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
console.log(rectangle);

//Example 2:
interface UserInterface {
    name:string,
    rollno :number,
    age?:number,//if we want not use age in object the we use (?)
} 

const student:UserInterface={
    name:"rahulsaini",
    rollno:1002,
}

console.log(student)

//what happen when we use interface in a variable

// interface yo:string | number;
// let rahul:yo="rahulsaaini"