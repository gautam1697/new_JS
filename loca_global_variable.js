const a=200;

function b(){
    var d=34;
    var a=33;
    console.log(d);
    console.log(a);
}
function c(){
    var d=32;
    console.log(d);
    console.log(a);
}
b()
c()
/*1.In the example above a is a global variable and d is a local variable.
2. In function b var a is a local varibale and the console prints the local varibale as local variable is given precedence.
3. in function c as no local varibale is present therefore the function prints the global value declared of a.
