Func('gautam');

function Func(name){
    console.log(name);
}
// with he help of hoisting we can call the function before declaring it
//this is called function hoisting
var a=10;
console.log(a,b);
var b=20;
//this will print a=10 and b undefined as b is declared but not defined.
//In hoisting only declaration of the variable is put at top not its value.
//this code can be written as
var a=10;
var b;
console.log(a,b);
b=20;
//this is the concept of hoisting. It puts let and const defined varibles at the
//the top of the of scope.

// this is also an example of hoisting
console.log(a)
var a = 4;


function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
// console.log(b);
console.log(a)
//this program will give output
//undefined
//hello
//4
//if b is declared inside scope and called outside the scope then it will throw
//a reference error as b is not declared outside the scope, but if b is printed
//inside the scope and the function is called then the var b is hoisted at the
//top of the program and the value of b is prined which is hello


//this is an example of function hoisting

greet();

let greet = function() {
    console.log('Hi, there.');
}
// this example at runtime will throw error as we use function exppression greet
// and in hoisting only declaration of the function is passed not the value stored
// in it. This will throw an uncaught type error.
