//OOPS concepts in javascript
//Class in JS
//Classes are special type of functions
//we define class just like function expression
//class syntax contains two components
//1.class declarations, 2.class expressions
//class declaration-> a.defined using class keyword.name always
// b.starts with uppercase
//3.cannot be redeclared
//4.not a part of hoisting
class Employee{
    constructor(a,b,c){
        this.a=a
        this.b=b
        this.c=c
        console.log(this.a,this.b,this.c);
    }
    detail(){
        console.log(this.a+this.b+this.c)
    }
}

emp= new Employee(4,5,9);
// emp.constructor;
// emp.detail();
console.log(Employee.constructor());
//_____________________________________________---
var emp = class Employee{ 
    constructor(id, name) {  
      this.id = id;  
      this.name = name;  
      console.log(this.id,this.name)
    }  
   detail(name,id){
        console.log(this.name,this.id)
    }
  }
  // console.log(emp.name);  
  var emp1= new emp(1,'derived')
  emp.detail;
  emp.constructor;
  console.log(emp.name,emp.id)
  //In this code shown above we cannot access class variables by using class
  //and dot operator
  //the variable name and dot operator defines the properties of variables 
  //not the class that is stored in that variable
  var emp = class Employee{ 
    constructor(id, name) {  
      this.id = id;  
      this.name = name;  
      console.log(this.id,this.name)
    }  
   detail(name,id){
        console.log(this.name,this.id)
    }
  }
  // console.log(emp.name);  
  // var emp1= new emp(1,'derived')
  // emp.detail;
  // emp.constructor;
  console.log(emp.name)

//__________________________________________________________________--
//PROTOTPE IN JS OOPS:
// var age=25;
function Employee(id,name){
    this.id=id;
    this.name=name;
    }
    Employee.prototype.age=24;
    var emp=new Employee(101,'gautam')
    // Employee.prototype.age=24;
    console.log(emp.age=34)
    console.log(emp)
