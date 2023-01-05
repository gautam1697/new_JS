//Programs showing the concept of shadowing
// When a same name variable is present in block scope as well as global scope then the block scope variable in the block will shadow the value of global scope within the scope.This is called varibale shadowing.
const a= 13
{
    const a=14
    console.log(a)
}
console.log(a)
//this is possible
const a= 13
{
    let a=14
    console.log(a)
}
console.log(a)
//this is possible
const a= 13
{
    var a=14
    console.log(a)
}
console.log(a)
//this is not possible
let a= 13
{
    var a=14
    console.log(a)
}
console.log(a)
//this is not possible

let a= 13
{
    let a=14
    console.log(a)
}
console.log(a)
//this is  possible
let a= 13
{
    let a=14
    console.log(a)
}
console.log(a)
//this is  possible

var a= 13;
{
    var a=14
    console.log(a)
}
console.log(a)
//this is  possible
//this will set the global value of a=14
var a= 13;
{
    let a=14
    console.log(a)
}
console.log(a)
//this is  possible
var a= 13;
{
    const a=14
    console.log(a)
}
console.log(a)
//this is  possible
