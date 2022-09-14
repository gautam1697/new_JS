//converting an object into two different arrays
var arr1=[]
var arr2=[]
var obj={name:'gautam',object:'value',key:'person',random:34}
for (key in obj){
    arr2.push(obj[key])
    arr1.push(key)
}
console.log(arr1)
console.log(arr2)
