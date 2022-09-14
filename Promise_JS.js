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
