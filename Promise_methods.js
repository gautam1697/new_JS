//PROMISE METHODS
//1.Promise.resolve(promise)
//this method returns a promise object only when the condition Promise.constructor==promise
var a=new Promise(function(resolve,reject){
    x=3;
    if(x==3)
    resolve('this is correct')
    reject(x)
});
a.then(function(fromResolve){
    console.log()
}).catch(function(fromReject){console.log('condition not fulfilled',x)});
console.log(Promise.resolve(a))
//output->> Promise{'this is correct'}

//If the condition is not true then
var a=new Promise(function(resolve,reject){
    x=3;
    if(x==3)
    resolve('this is correct')
    reject(x)
});
a.then(function(fromResolve){
    console.log()
}).catch(function(fromReject){console.log('condition not fulfilled',x)});
console.log(Promise.resolve(a))
//output->>>Promise { <rejected> 13 }
//condition not fulfilled 13
//_________________________________________________________________________________
//2.Promise.resolve(obj)
//this method converts and object into promise
var obj={name:'gautam',age:24,role:'developer'}
b=(Promise.resolve(obj))
console.log(b)
b.then(function(fromResolve){
    console.log('yes')}).catch(function(fromReject){console.log('no')});

//output->>>>Promise { { name: 'gautam', age: 24, role: 'developer' } }
//output->>>>yes
//_________________________________________________________________________________
//3.Promise.reject(obj)
//this method converts and object into promise
var obj={name:'gautam',age:24,role:'developer'}
b=(Promise.reject(obj))
console.log(b)
b.then(function(fromResolve){
    console.log('yes')}).catch(function(fromReject){console.log('no')});

//output->>>>Promise { <rejected>{ name: 'gautam', age: 24, role: 'developer' } }
//output->>>>no
//_________________________________________________________________________________
//4.Promise.all()
//Makes a promise resolved when each item in an array is fulfilled 
//or rejects when items in the array are not fulfilled.
//case 1: when all the conditions are fulfilled
const p1=Promise.resolve(3)
const p2=Promise.resolve(4)
const p3=new Promise(function(resolve,reject){
    x=4;
    if(x==4)
    resolve(x)
    else
    reject('y')
});
const p4=new Promise(function(resolve,reject){
    x=4;
    if(x==4)
    resolve(x)
    else
    reject('y')
});

Promise.all([p1,p2,p3,p4]).then((values)=>{console.log(values)});
//output-->>>>>[ 3, 4, 4, 4 ]
//case 2: when one of the condition is rejected
const p1=Promise.resolve(3)
const p2=Promise.resolve(4)
const p3=new Promise(function(resolve,reject){
    x=4;
    if(x==4)
    resolve(x)
    else
    reject('this')
});
const p4=new Promise(function(resolve,reject){
    x=14;
    if(x==4)
    resolve(x)
    else
    reject('y')
});

// Promise.all([p1,p2,p3,p4]).then((values)=>{console.log(values)});
Promise.all([p1,p2,p3,p4]).then((values)=>{console.log(values)}).catch((values)=>{console.log(values)});
//output->>>>>> y
//this is happening because when the condition for 'catch()' is satisfied the
// program will not run for 'then()' function
//_________________________________________________________________________________________________________________---
//5.Promise.race()
//race returns a Promise object if the condition if fulfilled or rejected

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 09, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // expected output: "two"
//______________________________________________________________________________________________________________________

var p4=42;
// var p1=Promise.reject(3)
var p2=Promise.resolve(4)

var p3=new Promise(function(resolve,reject){
    x=14;
    if(x==4)
    resolve(x)
    else
    reject('this')
});
var p1=new Promise(function(resolve,reject){
    x=14;
    if(x==4)
    resolve(x)
    else
    reject('y')
});

// Promise.race([p1,p2,p3,p4]).then((values)=>{console.log(values)});
Promise.race([p1,p2,p3,p4]).then((values)=>{console.log(values)}).catch((err)=>{console.log(err)});
//output->>>> y

//____________________________________________________________________________________
//6.Promise.allSettled()
//this method checks every promise is fullfilled or rejected adn returns wether the promise is fulfilled or rejected
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(5);
const promise3 = Promise.resolve(4);
const promise4 = Promise.reject(6);
const promises = [promise1, promise2,promise3,promise4];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
// "fulfilled"
// "rejected"
//___________________________________________________________________________________________________
//7.Promise.any()
//this method returns a value as soon as any of the promise is fulfilled
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"
//in this program we can see that a promise1 is rejected and as soon as promise 2 is fulfilled the Promise.any function
//returns the value of promise2
//______________________________________________________________________________________________________
//Promise.prototype.then()
const promise1 = new Promise((resolve, reject) => {
    resolve('Succ!');
  });
  
  promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
  });
  promise1.then((arr)=>{console.log('this is arr', arr)});
  
  