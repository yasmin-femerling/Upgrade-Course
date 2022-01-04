// const person:{
//     name:string;
//     age:number;
//     hobbies: string[];
//     role: [number,string]
// } ={

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person={
    name:'Max',
    age:30,
    hobbies:['Sports', 'Cooking'],
    role: Role.AUTHOR
};

console.log(person.name);

let favoriteActivities: any[];
favoriteActivities = ['Sports',1];

