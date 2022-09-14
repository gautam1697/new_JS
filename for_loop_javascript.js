//Understanding loops in Javascript
arr=[1,2,34,4,55,6,7,7]
console.log(arr,typeof arr)
arr.push(32)
console.log(arr)
for (x in arr){
    console.log(x)
}
// This statement is used for counting the values inside the array.
// will loop throughout the length of the array

for(x in arr){
    console.log(arr[x])
}
//this statement is used to print values of particular index in increasing order

obj={name:'gautam',object:'value',key:'person',random:34}
for (key in obj){
    console.log(key)
}
// this statement is used to print the keys of the corresponding
// objectof the given object

var obj={name:'gautam',object:'value',key:'person',random:34}
for (key in obj){
    console.log(key,obj[key])

    var obj={name:'gautam',object:'value',key:'person',random:34}
for (key in obj){
    console.log(obj[key]);//for printing only keys of objects

}

}
// this is the method through which we can print the key value pairs 
//
//of an object in javascript
var obj={name:'gautam',object:'value',key:'person',random:34}
for (key in obj){
    console.log(`${key}`)
    console.log(`${obj[key]}`)
    
}
// this is the method thorugh which we can print key value pair
// using template literals.

//-----------------------------------------------------------------------------
const cars = ["BMW", "Volvo", "Mini"];
for (x of cars){
    console.log(x)
}
for (x in cars){
console.log(x)
}
//in the code above in keyword is used to count 
//the number of
// elements of the array whereas the of keywords
// is used to print the elements of the array
//----------------------------------------------

arr=[1,2,3,4,5,6,'gautam','value','this']
console.log(arr)
for( i=0;i<arr.length;i++){
    console.log(i)
}
//for loop for index
for( i=0;i<arr.length;i++){
    console.log(arr[i])
}
//for loop for elements