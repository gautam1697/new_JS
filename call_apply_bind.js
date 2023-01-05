obj={'car':'xyz','model':'abc'}
arr=['asd','pop']
a1='asd1'
b1='asd22'
function print(arg1,arg2){
    a=arg1
    b=arg2
    car='aston'
    model='martin'
    console.log(this.car,this.model)
    console.log(a,b)
}
print.call(obj,a1,b1)
print.call(obj,[a1,b1])//this will not work as we are passing array in call method
// print()
//This is the example of call method in javascript
print.apply(obj,[a1,b1])
// print.apply(obj,a1,b1)
print.apply(obj,[...arr])//this is an example where we can see that apply method accepts arrays as arguments.
//This is the example of apply method


//we can pass arrays argument in apply method but we cannot paass arrays in call method in javascript

//Both call and apply method are used to change the context of this keyword for a function.

//this is an example of bind function

//bind method creates a copy of the function with a new value to this present inside the calling function

obj={a:3,b:4}

function test(arg1,arg2){
    a='aston'
    b='martin'
    console.log(this.a,this.b,arg1,arg2)
}
test()
// test.call(obj,...12,13)
test.bind(obj)()

