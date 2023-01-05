//PROMISE
/*promise is a proxy value not necesarily known when the promise is created.
It allows you to associate handlers asynchronous action's eventual success value
or failure.This lets asynchronous methods return values like synchronous methods:
instead of immediately
returning the final value,asynchronous methods returns a promise to supply value
 at some point in future.

*/
var p=new Promise(function(resolve,reject){
    x=3;
    if(x==3)
    resolve(x+1);
    else
     reject(x);
});
p.then(function(fromResolve){console.log("Promise is "+fromResolve)})
.catch(function(fromReject)
{console.log("Promise is"+fromReject)});



//____________________________________________________________--
//The code below shows an example of how a promise works.
//There are generally 2 parameters in a promise. Resolve and Reject. If the condition is true then the given statement is resolved and if the condition is false then the promise is rejected.
var p = new Promise(function(resolve,reject)
{
    x=14;
    //or if x=='14'
    if(typeof x=='number'){
        resolve(x/2)
    }
    else{
        reject(x)
    }
})
console.log(p)// result-> Promise{7} //or if x=='14' then the promise will be rejected.

//__________________________________________________
//The code shown below shows that we can chain promises after a promise is resolved or rejected by chaining which can be shown below by the example below

var p = new Promise(function(resolve,reject)
{
    x=14;
   
    if(typeof x=='number'){
        resolve(x/2)
    }
    else{
        reject(x)
    }
}).then(function(fromresolve){
    console.log('Promise is resolved and the value of promise is'+fromresolve)
}).catch(function (fromreject){
    console.log('Promise is rejected and the value of promise is'+ fromreject)
})
//In the code shown above since the condition is true then the result will run then function.

//_____________________________________________________________________________________________________

var p = new Promise(function(resolve,reject)
{
    x='14';
   
    if(typeof x=='number'){
        resolve(x/2)
    }
    else{
        reject(x)
    }
}).then(function(fromresolve){
    console.log('Promise is resolved and the value of promise is'+fromresolve)
}).catch(function (fromreject){
    console.log('Promise is rejected and the value of promise is'+ fromreject)
})
//In the code shown above the condition is false, thus it will return catch function.
//_______________________________________________________________________________________________
//The code show below if we do not return a result of previous promises then there is no wa to track settlement and the promise in this condition is called 'FLOATING'.

var p = new Promise(function(resolve,reject)
{
    x='14';
   
    if(typeof x=='number'){
        //resolve(x/2)
    }
    else{
        reject(x)
    }
}).then(function(fromresolve){
    console.log('Promise is resolved and the value of promise is'+fromresolve)
}).catch(function (fromreject){
    console.log('Promise is rejected and the value of promise is'+ fromreject)
})

//___________________________________________________________________________________________________________
//


async function func1(){
b=32;
console.log(b)
}
async function func2(){
b=50;
console.log(b)
}
async function func3(){
b=34;
console.log(b)
}


c= Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then(function(fromresolve){console.log('this was resolved')})
 //this can be written in another form as is hown below
 Promise.all([func1(), func2(), func3()]).then(function(fromresolve){console.log('this was resolved')});
 //___________________________________________________________________________________________
