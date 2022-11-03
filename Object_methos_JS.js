//Object methods in Javascript
//1. Object.assign
const ob1={a:1,b:2,c:3,d:4}
const ob2={g:1,h:2,i:3}
const ob3=Object.assign(ob1,ob2,{c:4,d:5})
console.log(ob3)
//in this method, we assgin new propery values to object, 
//if the propery values are already present in the object 
//from which it is assigned, then the new values will override
// the values of old defined values in new object.

//2.Object.create()
const people={printIntroduction:function(){console.log(`my name is ${this.name}.Am I human? ${this.human}`)}}
const me=Object.create(people);
me.name='gautam';
me.human=true;
console.log(me)
me.printIntroduction();
// in this method we create an object using prototype of other objects
//here object me is created by using the prototype of object people
var a={printIntro:function(){console.log(`My name is ${this.name}.My age is ${this.age}.My role is ${this.role}.`)}}
    
c=Object.create(a,{name:{value: 'hello'},age:{value: 23},role:{value: 'dev'}})
  console.log(c)
  console.log(c.name)
  console.log()
  //this method can be used to create object inline with passing property values
  //as objects.

//3.Object.defineProperty(objectname,'property',descriptor({value:}))


ob1={}
ob2={}
Object.defineProperty(ob2,'property2',{value:34})
Object.defineProperty(ob1,'property1',{value:30})
console.log(ob2.property2)
console.log(ob1.property1)
console.log(ob1)
console.log(ob2)
// this is the method used to define
// properties of an object.
//if an object is empty than 
//we can use define property method 
//create a property in empty object

const object1 = {};  
Object.defineProperty(object1, 'property1', {value: 42});  
object1.property1 = 177;  
// throws an error in strict mode  
console.log(object1.property1);  
// we cannot change the value of the property explicitly like this. 

//we can add a property to an object through this method
function fun(){
    this.name='aman'
    this.age=24
}
let person1=new fun();
let person2=new fun();
console.log(person1)
console.log(person2)
person1.gender='male';

console.log(person1)

person1.greet=function(){
    return 'hello'}
console.log(person1.greet());
console.log(person1.gender
)
//4.this is the format for defineProperties function in objects
//used to declare more than 1 property at the same time
const object1 = {};  
Object.defineProperties(object1,{property1:{value:'gautam',value:'Gautam',value:"GAUTAM"},property2:{value:'prateek'},property3:{value:'vandana'}});
console.log(object1.property3,object1.property1);
obj={'number':'gautam',2:'prateek',3:'vandana'}
b=Object.entries(obj)
console.log(b)
console.log(Object.entries(obj))
//this returns a array of arrays containng key value pair 
//or array of properties

//5.Object.freeze(obj)
var obj1={name:'gautam'};
obj2=Object.freeze(obj1);
obj1.name="prateek";
console.log(obj2)

////\\

var obj={name:'prateek',age:32};
obj.name='Gautam';
obj.age=24;
console.log(obj)
obj2=Object.freeze(obj)
obj2.name-'Prateek';
console.log(obj2)
//we cannot perform any changes on object once 
//the object is passed into the freeze function


//6.Object.getPrototypeOf()
function Func(name,age){
  this.name=name
  this.age=age
}
obj= new Func('gautam',24)
console.log(obj)
console.log(Object.getPrototypeOf(obj))
obj1={name:'gautam',age:24}
console.log(Object.getPrototypeOf(obj1))
//in the example shown above we an infer that the prototype or obj is Func{}
// and the prototype for obj1 is an empty object literal

const prototype1 = {};  
const object1 = Object.create(prototype1);  
const prototype2 = {};  
const object2 = Object.create(prototype2);  
console.log(Object.getPrototypeOf(object1) === prototype1);  
console.log(Object.getPrototypeOf(object1) === prototype2); 

//from the example shown above we can infer that an object can have
//only one prototype 
//7.Object.is()-->> returns a boolean value if object is extensible else false
//8.Object.isExtensible->> returns a boolean value if the object is extensible else False
//9.Object.isFrozen-->>returns a boolean value if object was frozen before else false
//10.Object.seal->
//11.Object.isSealed->> returns a boolean if object is sealed else false
obj={name:'gautam'}
obj.gender='male'
console.log(obj)
obj2=Object.seal(obj)
console.log(obj2)
obj2.age=24
console.log(obj2)
console.log(Object.isSealed(obj2))
//from the code above we can infer that if we add a value after the object is passed
//through seal function, the property cannot be added to the object
obj={name:'gautam',age:25,marks:100}
//12Object.getOwnPropertyDescriptor--> returns boolean for given property if
//it is enumerable,writable and conigurable
//13.Object.getOwnPropertyDescriptors-> returns boolean value for all properties
//if properties are enumerable,writable and configurable
//14.Object.getOwnPropertyNames-->
obj={role1:1,role2:2,role3:3,role4:4}
console.log// this property returns an array of properties irrespective of wether they are enumerable or not
//returns an array of all property keys
//15.Object.getOwnPropertySymbols
//returns all the symbols defined for all properties in the object

console.log(Object.getOwnPropertyDescriptor(obj,'name'))
console.log(Object.getOwnPropertyDescriptors(obj,'name'))
console.log(Object.getOwnPropertyNames(obj,'name'))
console.log(Object.getOwnPropertySymbols(obj,'name'))
//________________________________________________________________________________________________________________________
//Getter and setter functions in objects
const obj = {a: 7,get b() {return this.a + 1;},
set c(x) {this.a =x / 2;}
};

console.log(obj.a); // 7
console.log(obj.b); // 8, returned from the get b() method
obj.c = 50;         // Calls the set c(x) method
console.log(obj.a); // 25
console.log(obj.b)
