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

export {};
//Explicit - writing out the type(Explicit type assignment are easier to read and more intentional.)
let a :string="rahulsaini"
console.log(a);
let n:number=1000;
console.log(n);


//Implicit - TypeScript will "guess" the type, based on the assigned value
let b="rahulsaini";
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
let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(v);//string
let arr:any[]=[1,true,'hello']
console.log(arr);









//UNION (its use combine)
let pid:string | number
pid='rahulsaini'
console.log(pid);//rahulsaini
pid=3;
console.log(pid);//3




//type assertion






