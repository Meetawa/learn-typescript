// Aliases allows types to be easily shared between different variables/objects
type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("x value is " + pt.x);
    console.log("y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

