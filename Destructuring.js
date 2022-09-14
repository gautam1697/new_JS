//Destructuring
// by destructuring anything we can change and set the attributes of an object.
//the code shown below shows an example of destructuring of an object.
obj={name:'gautam',role:'developer',age:25}
console.log(obj)
let name=obj.name;
let role=obj.role;
let age=obj.age;
obj.name='satan';
console.log(obj)//output->>{name:'satan',role:'developer',age:25}

