//interface use with function

//Example 1:
interface Points {
    x: number;
    y: number;
  }
   
  function printCoord(pt: Points) {
    console.log("x value is " + pt.x);
    console.log("y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });