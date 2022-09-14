//CLOSURE SYNTAX DIFFERENCE
//CASE1: When innerfunction is not called in return of the of func() and closure c is ccalled
//this code will run with passing func() in closure c
function func(){
    a=13;
    b=14;
    function innerfunc(){
        return a+b;
    }
    return innerfunc();
}
var c=func();
console.log(c)
//output->>>>27
//____________________________________________________________________________________________________

//CASE2: When innerfunction called in return of the of func() and the closure c is not called 
//this code will run with passing func() in closure c
function func(){
    a=13;
    b=14;
    function innerfunc(){
        return a+b;
    }
    return innerfunc();
}
var c=func();
console.log(c)
//output-->>> 27
//____________________________________________________________________________________________________
////CASE3: When innerfunction called in return of the of func() and the closure c is called
//NOTE:this code will not run with passing func() in closure c
function func(){
    a=13;
    b=14;
    function innerfunc(){
        return a+b;
    }
    return innerfunc();
}
var c=func();
console.log(c())
//output->>>> error
//____________________________________________________________________________________________________
////CASE4: When innerfunction is not called in return of the of func() and the closure c is not called
//NOTE:this code will not run with passing func() in closure c
function func(){
    a=13;
    b=14;
    function innerfunc(){
        return a+b;
    }
    return innerfunc;
}
var c=func();
console.log(c)
//output->>[Function: innerfunc]