// Objects in Javascript
var emp= new Object();
emp.id=101;
emp.name='Rambo';
emp.age=34;
emp.salary=50000;
console.log(emp)
// this is the method of creating an instance of the object
var emp={name:'gautam',age:24,role:'developer'}
//this is the method of creating object through object literal

function emp(id,name,salary){
this.id=id;
this.name=name;
this.salary=salary;
}
e=new emp(102,'Gautam',50000);
console.log(e,typeof e)
f=new emp(103,'Prateek',50000);
console.log(f,typeof f)
// this method show that we can create objects using
// a function or can be called as creating objects using 
//an object constructor.


function emp(id,name,salary){
this.id=id;
this.name=name;
this.salary=salary;
    
    
this.changeSalary=changeSalary;
function changeSalary(otherSalary){
this.salary=otherSalary;
}    }
e= new emp(101,'gautam',35000)
e.changeSalary(40000)
console.log(e.id,e.name,e.salary)
//in this example we use inner function inside a 
//function emp to change the attributes of the outer function.
// we can change the value of attribute even after the object is created.