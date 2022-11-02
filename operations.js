var a= 100==20// this is to check equality// will return boolean value//loose equality operator
console.log(a)

var a= 100===20/* Identical(equal of same type)// will
 return boolean value//strict equality operator//it
does not implements a type 
conversion on the operand and does not change the data type before comparision and returns false
even if the data types are not same*/
console.log(a)

var a='100'
var b=100
console.log(a!=b)//Not equality//false
console.log(a!==b)//Not Identical(same data type)//true


var a=(10==='10')|(20===20)//bitwise or
console.log(a)
 var a=(10==='10')||(20===20)//logical or
console.log(a)
 var a=(10==='10')&&(20===20)//logical and
console.log(a)
 var a=(10==='10')&(20===20)//bitwise and
console.log(a)

let x=5;
y=100-150+200
console.log(y)
/* first the function will perform multiplication and division
 then addition and at last subtraction*/
//___________________________________________________________________________________
obj={name:'gautam',age:24,marks:100,value:34}
console.log(obj.marks)
delete obj.marks;
console.log(obj);
arr=[1,2,3,4,54];
console.log(arr[0]);
// delete arr[0];
//delete method does not works on array
//instance of method

function func(name,age){
    this.name=name
    this.age=age
}
obj= new func('gautam',24);
console.log(obj)
console.log(obj instanceof func)

//how void is used with passing value ahead of it in javascript

function func(){
    a=10
    b=20
    return void a+b;
}
function func1(){
    void 23
}
console.log(func())
console.log(func1())
//Iterator in javascript,how yield is used.
function* foo(index) {
    while (index < 3) {
      yield index;
      index++;
    }
  }
  
  const iterator = foo(0);
  
  console.log(iterator.next().value);
  // expected output: 0
  
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  //this line will run but the value will be undefined as the index 
  //value is out of range
  
  //___________________________________________________________________________________
  function f(){
    return 4;
}
function g(){
    return 3;
}
y = x = f()
console.log(x,y)
y = [ f(), x = g() ]
console.log(x,y)
//______________________________________________________________________________________
const x=y=z=r=d=3;
console.log(x)
let y=32;//this line will throw an error as value of y is already defined in the lines above.
console.log(y)
x[f()] = g()
x=f()
console.log(x,y)
