//Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.



//type Aliases:Type Aliases can be used for primitives like string or more complex types such as objects and arrays
type Po = {
    x: number;
    y: number;
  };
  // Exactly the same as the earlier example
  function prints(pt: Po) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  prints({ x: 100, y: 100 });





//interface:An interface declaration is another way to name an object type
type P = {
    x: number;
    y: number;
  };
  // Exactly the same as the earlier example
  function printCo(pt: P) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCo({ x: 100, y: 100 });


