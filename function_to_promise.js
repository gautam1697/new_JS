//Program to convert function into a promise.

function a (){
    return undefined
}
function b(callback){
   d=callback()+" "+'world';
   return d;
}

c=new Promise((resolve,reject)=>{
    if(a()!=undefined){
        resolve(b(a))
    }
    else{
        reject('reject')
    }
})
c.then(dat=>console.log(dat)).catch(err=>console.log(err))
