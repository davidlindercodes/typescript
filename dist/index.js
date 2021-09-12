"use strict";
let id = 6;
let company = "linder";
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'david'];
ids.push(4);
// Tuple 
let person = [1, 'david', true];
// Tuple Array 
let employee;
employee = [
    [1, 'david'],
    [3, 'steve'],
    [9, 'mike']
];
// Union 
let pid = 22;
pid = 22;
pid = '22';
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const User = {
    id: 1,
    name: 'John'
};
// Type Assertion 
let cid = 1;
// let customerId = <number>cid 
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const david = new Person(3, 'david linder');
david.id = 4;
console.log(david.register());
