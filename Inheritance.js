//INHERITANCE IN JS
//allows us to create a new class on the basis of already existing class
//provides flexibility to the child classes to reuse parent class methods
//extends keyword is used to create a child class
//child class acquires all the properties of parent class
//maintains a IS -A relationship
//extends keyword is used in class expression or class declarations.
//we also use prototype based approach to achieve inheritance
class Bike{
    constructor(){
        this.company="Honda"
    }
}
class Vehicle extends Bike{
    constructor(name,price){
        super();
        this.name=name;
        this.price=price;
    }
}
var v=new Vehicle('Motorcycle',5000)
console.log(v.name,v.company,v.price)
//in this method class Vehicle inherits class Bike.
//____________________________________________________________________________--
//this shows the concept of inheritance through functions by using prototype

function Bike(company){
    this.company=company;
}
Bike.prototype.getCompany=function(){return this.company;
}

function Vehicle(name,price){
    this.name=name;
    this.price=price;
}
var bike=new Bike("Harley")
console.log(bike.company)
Vehicle.prototype=bike;
var vehicle=new Vehicle('fatboy',120000)
console.log(vehicle.name,vehicle.company,vehicle.price)
//____________________________________________________________________________
//by inheritance of existing date modules in js
class Moment extends Date {  
    constructor(year) {  
      super(year);  
    }}  
  var m=new Moment("FEB 16, 2106 20:22:10");  
  console.log("Year value:")  
  console.log(m.getFullYear());  