obj={name:'gautam',age:24,role:'developer'}
arr1=Object.keys(obj)
arr2=Object.values(obj)
console.log(obj)
console.log(arr1)
console.log(arr2)
const obj1 = {};
for(var i = 0; i< arr1.length ; i++){
    obj1[arr1[i]] = arr2[i]
}
console.log(obj1)