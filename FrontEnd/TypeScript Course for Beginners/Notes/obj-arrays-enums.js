"use strict";
// const person:{
//     name:string;
//     age:number;
//     hobbies: string[];
//     role: [number,string]
// } ={
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
console.log(person.name);
let favoriteActivities;
favoriteActivities = ['Sports', 1];
