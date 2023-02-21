//Union types are used when a value can be more than a single type.
//Using the | we are saying our parameter is a string or number

//UNION :
let pid:string | number
pid='rahulsaini'
console.log(pid);//rahulsaini
pid=3;
console.log(pid);//3

// Union Type Errors (you need to know what your type is when union types are being used to avoid type errors)

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'
//   }
  

