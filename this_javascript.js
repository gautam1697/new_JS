//this keyword uses in javascript in different condition and how to use this keyword

//1. When a function is called in the global scope,then this is bound to the global object(window in browser and global in node js).
function foo() {
  this.a = 2;
}

foo();
console.log(a); // 2


//Note: If you declare the foo() function above in strict mode, then you call this function in global scope, this will be undefined and assignment this.a = 2 will throw Uncaught TypeError exception.
//2.
function foo() {
  this.a = 2;
}

const obj = {
  foo: foo
};

obj.foo();
console.log(obj.a); // 2
//Clearly, in the above snippet, the foo() function is being called with context is obj object and this reference now is bound to obj. So when a function is called with a context object, the this reference will be bound to this object.

//3.
//.call, .apply and .bind can all be used at the call site to explicitly bind this. Using .bind(this) is something you may see in quite a lot of React components.

const foo = function() {
  console.log(this.bar)
}

foo.call({ bar: 1 }) // 1
//4.
function a(b,c){
    var d=b
    this.f=b
   var e=c
    this.g=c
   console.log(f,g)
}
console.log(a(12,13))
const p1=new a(14,15)
console.log(p1.f,p1.g,p1.d,p1.e)//from this line we can infer that we cannot access the varibales of a function outside its scope even if they are passed as arguments. But if we set the values of the variables using this keyword then we can access the value using dot operator with function.
