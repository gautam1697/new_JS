//Polymorphism is a core concept of OOPS
//provides a way to perform a single action in different forms
//can call same methods on different objects
//we can pass any type of data members with the methods
class A{
    display(){
    console.log('this is in class A')
}}
class B extends A{
      display(){
    console.log('this is in class ')
}
    
}
var b=new B();
b.display();
// if display is not present in class B then it will find it in class A else it
//will print the display present in class B.
//
//
class A{
    display(){
    console.log('this is in class A')
}}
class B extends A{
      display(){
    console.log('this is in class B')
}
    
}
var b=[new A(),new B()];
b.forEach(function(msg){ msg.display();})
// this will run both the display methods present
//____________________________________________________________________________
//polymorphism using prototype

function A()  
{  
}  
A.prototype.display=function()  
{  
  return "B is invoked";  
}  
function B()  
{  
    
}  
  
B.prototype=Object.create(A.prototype);  
  
var a=[new A(), new B()]  
  
a.forEach(function(msg)  
{  
  console.log(msg.display());  
});  
