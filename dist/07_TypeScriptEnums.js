"use strict";
//ENUM :
/*
    An enum is a special "class" that represents a group of constants (unchangeable variables).
    Enums come in two flavors (string and numeric)
*/
//Numeric Enums - Default(enums will initialize the first value to 0 and add 1 to each additional value)
console.log("Before Initialized values are");
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
console.log(direction.up); //0
console.log(direction.down); //1
console.log(direction.left); //2
console.log(direction.right); //3
console.log("After Initialized values are");
//Numeric Enums - Initialized(in this we can set the values according to us)
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 1] = "up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1["right"] = "yoman";
})(direction1 || (direction1 = {}));
console.log(direction1.up); //0
console.log(direction1.down); //1
console.log(direction1.left); //2
console.log(direction1.right); //3
