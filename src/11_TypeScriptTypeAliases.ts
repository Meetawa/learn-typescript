// Aliases allows types to be easily shared between different variables/objects

//Example 1:
/*
let a1:string | number | undefined=10;
let b:string | number | undefined=10;
let c:string | number | undefined=10;
let d:string | number | undefined=10;
*/

//why we define types again and again then we alias type

//Example 1: why we use alias and how
console.log("Example 1 :");

type variableType = string | number | undefined;
let a1:variableType="rahulsaini";
let b:variableType=20;
let c:variableType=30;
let d:variableType=40;
console.log(a1);
console.log(b);
console.log(c);
console.log(d);

//Example 2 :type Alias use in functions 
console.log("Example 2 :");

type UserInput = string;
 
function Input(str: string): UserInput {
  return str;
}
let NameIS ="rahulsainimeetawa"
let userInput =Input(NameIS);
console.log(userInput);




//object over aliases
console.log("Example 3 :");

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function print(pt: Point) {
    console.log("x value is " + pt.x);
    console.log("y value is " + pt.y);
  }
   
  print({ x: 100, y: 100 });



