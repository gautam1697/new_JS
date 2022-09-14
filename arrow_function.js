
//syntax for arrow function 
let Func=(a,b)=>a*b;
console.log(Func(12,12))
//in the example shown above,a,b are parameters passed in function and the a*b
//is the return type of the function
//arrow functions are also known as lambda function in javascript
//we use arrow symbol=>

let str=()=>"this is name";
console.log(str())
// this is function with empt parameters with a name
str=(a,b)=>a+b;
console.log(str(12,12))
// this function will override the function decaled above

//another example of arrow function
let string1 = (name=string, roll_no=number) =>
"i am " + name + " and my roll no is "
+ `${roll_no}`;

console.log(string1("srinivas", 49));
