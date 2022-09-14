//ASYNC AND AWAIT
//the code shown below is example of async function which will return a promise object
//
async function myfirstfunction() {  
return "Hello World"  
}  
console.log(myfirstfunction())
//________________________________________________________________________________---
//await implementation
var a=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        x=3
        if(x==3)
        resolve('Promise resolved')
        else
        reject('Promise not resolved')
    },300)
});
async function func(){
    var b=134
    var result= await a;
    console.log(a) 
    console.log(b);
    
}
func()
//here in the code shown above if we do not use the keyword await then, the program will run but the promise will be pending
//and the output will not print the resolved condition
