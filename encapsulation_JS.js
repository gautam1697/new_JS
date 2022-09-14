//ENCAPSULATION
//It is the process of binding data with functions acting on data.It allows us to 
//control data and validate it.
//we use var keyword to make datamembers private
//use getter setter method to get and set data respectively.
//encapsulation allows us to handle object using properties
//1. read/write- allows to read and write using getter and setter
//2. read only- alows to  only read using getter method
//3. write only- allows only to set data using setter method
class Employee{
    constructor(){
        var id;
        var name;
    }
    getid(){
        return this.id;
    }
    getname(){
        return this.name;
  
    }
    setid(id){
        this.id=id;
    }
    setname(name){
        this.name=name;
    }
    
}
var emp1=new Employee();
emp1.setid(101);
emp1.setname('Gautam')
console.log(emp1.getname())
console.log(emp1.getid())

//_________________________________________________________________________
//adding validation to encapsulation
class Employee{
    constructor(){
        var id;
        var name;
    }
    getid(){
        return this.id;
    }
    getname(){
        return this.name;
  
    }
    setid(id){
        if(id>200||id<100){
            alert("Invalid ID")
        }
        else{
            this.id=id;
        }
        
    }
    setname(name){
        this.name=name;
    }
    
}
var emp1=new Employee();
emp1.setid(00101);
emp1.setname('Gautam')
console.log(emp1.getname())
console.log(emp1.getid())
//_____________________________________________________________________________
//we can encapsulate and optimize our code using defineProperty method of objects.
function Employee(name,id){
    var name=name
    var id=id
    Object.defineProperty(this,'name',{get:function(){return name;},set:function(name){this.name=name;}})
    Object.defineProperty(this,'id',{get:function(){return id;},set:function(id){this.id=id;}})
}
var emp=new Employee('gautam',101)
console.log(emp.name,emp.id)
