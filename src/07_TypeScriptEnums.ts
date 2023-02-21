//ENUM :
/*
    An enum is a special "class" that represents a group of constants (unchangeable variables).
    Enums come in two flavors (string and numeric)
*/

//Numeric Enums - Default(enums will initialize the first value to 0 and add 1 to each additional value)
console.log("Before Initialized values are");
enum direction{
    up,
    down,
    left,
    right,
}
console.log(direction.up);//0
console.log(direction.down);//1
console.log(direction.left);//2
console.log(direction.right);//3

console.log("After Initialized values are");

//Numeric Enums - Initialized(in this we can set the values according to us)
enum direction1{
    up=1,
    down,
    left,
    right="yoman",
}
console.log(direction1.up);//0
console.log(direction1.down);//1
console.log(direction1.left);//2
console.log(direction1.right);//3

