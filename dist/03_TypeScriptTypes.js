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
//Explicit - writing out the type(Explicit type assignment are easier to read and more intentional.)
let a = "rahulsaini";
console.log(a);
let n = 1000;
console.log(n);
//Implicit - TypeScript will "guess" the type, based on the assigned value
let b = "rahulsaini";
console.log(b);
//Error In Type Assignment:JavaScript will not throw an error for mismatched types but ts is gives error
// let firstName: string = "yoman"; // type string
// firstName = 33; // attempts to re-assign the value to a different type
// let firstName1 = "yoman"; // inferred to type string
// firstName1 = 33; // attempts to re-assign the value to a different type
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
//Type: any(any is a type that disables type checking and effectively allows all types to be used)
let v = true;
v = "string"; // no error as it can be "any" type
console.log(v); //string
let arr = [1, true, 'hello'];
console.log(arr);
//Explicit Array
let ids = [1, 2, 3, 4, 5];
console.log(ids); //[1, 2, 3, 4, 5]
ids.push(23);
ids.push(25);
console.log(ids); //[1, 2, 3, 4, 5, 23, 25]
ids.push("hello man");
console.log(ids); //[1, 2, 3, 4, 5, 23, 25, 'hello man']
//TUPLES
let person = [1, 'rahulsaini', true];
console.log(person);
console.log(typeof person); //object
console.log(typeof person[0]);
console.log(typeof person[1]);
console.log(typeof person[2]);
//TUPLES ARRAY
let employee = [number, string, number][];
employee = [
    [1001, "rahulsaini", 93.00],
    [1002, "shivam", 97.99],
    [1003, "sunny", 99],
    [1004, "kishan", 99.99],
    [1005, "deepak", 100],
    [1006, "anna", 50],
];
