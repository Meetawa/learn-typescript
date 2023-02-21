"use strict";
// Type assertion is a technique that informs the compiler about the type of a variable.
/*
Example:
    let x;
    x="rahulsaini";
    console.log(x.length); //we can't do this because it gives a any type so x is no idea about .length
*/
/*
    Two Method in Type assertion:
        - <> angular brackets
        - as keyward
*/
//Method 1:<> bracket
let x;
x = "rahulsaini";
console.log(x.length);
//Method 2: as keywords
console.log(x.length);
