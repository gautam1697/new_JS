function Emp(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age
    
}
function permaEmp(id,name,age){
Emp.call(this,id,name,age);
    
}
function tempEmp(id,name,age){
   Emp.call(this,id,name,age); 
}
var p_emp=new permaEmp(101,'gautam',);
var t_emp=new tempEmp(102,'this');
console.log(p_emp.id,p_emp.name)
console.log(t_emp.id,t_emp.name)
//this is how function callback works in javascript
//we can access the the function attributes in different 
//functions using call() method of function
//______________________________________________________________________________
