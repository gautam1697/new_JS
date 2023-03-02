arr=[100,100,100,100,34]
//Map method

 console.log(arr.map((a)=>{return a+1}))//this is used to create a new array performing some functionalities on array 

 console.log(arr.filter((x)=>{return x-1}))
//this 
//a filter on elements can be performed using array fitler methods

//for example we can find the sum of the elements of the array using reduce method
console.log(arr.reduce((ini=0,x)=>{
    return ini=ini+x
}))
