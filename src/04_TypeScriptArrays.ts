//Explicit Array
let ids :number[]=[1,2,3,4,5]
console.log(ids);//[1, 2, 3, 4, 5]
ids.push(23);
ids.push(25);
console.log(ids); //[1, 2, 3, 4, 5, 23, 25]
//ids.push("helloman");
console.log(ids);//[1, 2, 3, 4, 5, 23, 25, 'hello man']

//String Array
const names: string[] = [];
names.push("Dylan"); // no error
console.log(names);


//Readonly(it is keyword can prevent arrays from being changed.)

/*const name:readonly string[]=["rahul"];
name.push("saini");// Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(name);
*/

//Type Inference(TypeScript can infer the type of an array if it has values.)

/*
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
console.log(numbers);
*/

