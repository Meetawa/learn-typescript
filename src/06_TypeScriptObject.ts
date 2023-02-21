//object
const user:{
    id:number,
    name:string
}={
    id:1,
    name:'rahulji'
}

console.log(user);


//Another way is (it is better than above declaration method):
type user1={
    id:number,
    name:string
}

const user1 :user1={
    id:1,
    name:'yoman'
}
console.log(user1);


//Type Inference
const car = {
    type: "rahu",
  };
  car.type = "meetawa"; // no error
  //car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
  console.log(car);
  
  
//Index Signatures(it can be used for objects without a defined list of properties)
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
