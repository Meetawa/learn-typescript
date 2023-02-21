"use strict";
//object
const user = {
    id: 1,
    name: 'rahulji'
};
console.log(user);
const user1 = {
    id: 1,
    name: 'yoman'
};
console.log(user1);
//Type Inference
const car = {
    type: "rahu",
};
car.type = "meetawa"; // no error
//car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
console.log(car);
//Index Signatures(it can be used for objects without a defined list of properties)
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
