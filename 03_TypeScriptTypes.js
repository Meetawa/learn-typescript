"use strict";
/*
DIFFERENT TYPES OF TYPESCRIPT:
    primitives:
        -boolean
        -number
        -string
    there are two main ways TypeScript Assignment:
        -Explicit
        -Implicit
*/
exports.__esModule = true;
//Explicit - writing out the type(Explicit type assignment are easier to read and more intentional.)
var a = "rahulsaini";
console.log(a);
var n = 1000;
console.log(n);
//Implicit - TypeScript will "guess" the type, based on the assigned value
var b = "rahulsaini";
console.log(b);
//Error In Type Assignment:JavaScript will not throw an error for mismatched types but ts is gives error
// let firstName: string = "yoman"; // type string
// firstName = 33; // attempts to re-assign the value to a different type
// let firstName1 = "yoman"; // inferred to type string
// firstName1 = 33; // attempts to re-assign the value to a different type
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
var json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
