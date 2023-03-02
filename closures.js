//CLOSURE IN JAVSCRIPT
//the function shown below shows an example of javascript closure where
//the varible of outer function is accessible by inner function
function func(){
    var a=4;
    function innerfunc(){
        return a;
    }
    console.log(a);
    return innerfunc();
    
}
console.log(func());
//________________________________________________________________________
//function closures with parameters
//when the values of a and b are not available in outerfunction

function func(a){
    
    function innerfunc(b){
      console.log(a,b);
        //  return a*b;
     }
     return innerfunc;
 }

 var output=func(4);
 console.log(output(4));
//output-> 4,4 ,16

//this will provide following cases:
//Case1:
//when a is defined in outer scope and b is defined in outer scope
function func(a){
    a=3;//a is defined
    b=5;//b is defined
   function innerfunc(b){
     console.log(a,b);
        return a*b;
    }
    return innerfunc;
}
// console.log(func(4));
var output=func(4);
// console.log(output)
console.log(output(4));
//output->> a=3,b=4,a*b=12
// here the parameter passed in outerfunction will replace value of a=4 with a=3
//but will not change the value of b
//the parameter passed in function call will be directly passed to the innerfunc
//which will not check the value of b in outerscope
//___________________________________________________________
function func(a){
    b=5;//b is defined
   function innerfunc(){
     console.log(a,b);
        return a*b;
    }
    return innerfunc;
}
// console.log(func(4));
var output=func(4);
// console.log(output)
console.log(output(4));
//here the output is the closure
//
//output->> a*b=20,a=4,b=5;
//when parameter b is not passed in the innerfunction then innerfunction will search
//the value of b in outerscope and it will place the value of b in innerfunction
//___________________________________________________________________________
function func(a,b){
    function fun(e,f){
        return e+f;
    }
    return fun;
}
var c=func();
console.log(c(4,5))
//in the code above
//var c is closure
//the var e and f is passed as a and b in the innerfunction fun
//if we do not parameter e and f, the program will not run as the outer function
//has no access to parameters a and b
// the parameters e and f are set directly by taking values from a and b which
//is provided by function call
//_____________________________________________________________________---------
function fun()  
{  
function closure(val)  
{  
return function()  
{  
return val*val;  
}  
}  
var a = [];  
var i;   
for (i = 0; i < 5; i++)  
{  
a[i] = closure(i);   
}
return a;  
}  
var output = fun();  
console.log(output[0]());  
console.log(output[1]()); 
console.log(output[2]()); 
console.log(output[3]()); 
console.log(output[4]()); 
/*in the code shown above we can infer that when the closure of function fun is
called then it will return an array of function as var a represents an array of
functions. when we call array with the value of i then it will call the closure
function with the value passed in it and will return the value of closure function*/

//___________________________________________________________________________________________________

function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    a=100;
    return y;
}

var z=x();
z();

//_____________________________________________________________________________________________________________


// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       return function sum4(d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// c=result
// console.log(c,result);

// function multiply(x,y){
//     return x*y
// }
// function square(x){
//     return multiply(x,x)
// }
// console.log(square(3))

// let x=4
// function hel(){
//     var y=3
//     function hev(){
//         console.log(x)
//     }
//   return hev;
// }
// hel()()
// First fullName variable defined in the global scope:
// const fullName = "1";

// Nested functions containing two more fullName variables:
// function profile() {
// //   const fullName = "2";
//   function sayName() {
//     // const fullName = "3";
//     function writeName() {
//       return fullName;
//     }
//     return writeName();
//   }
//   return sayName();
// }
// console.log(profile())

