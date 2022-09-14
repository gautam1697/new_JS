arr=[1,2,3,4,'gautam','4'-4,true,false]
console.log(arr)
// array literal
// arr=[]
obj=new Array();
console.log(obj)
//creates an empty array with new keyword
obj1=new Array('htis','this','that',10,10,20)
console.log(obj1)
//returns an array with elements
for (i=0;i<obj1.length;i++){
    console.log(obj1[i])
}
//returns the objects of the elements
//______________________________________________________________________________
//1.array.flat()
//this method converts a multi dimensional array into a single dimension array
//as shown above
arr1=[1,2,3,['gautam','is','in','array'],4,5]
b=arr1.flat(1);
console.log(b)
//_________________________________________________________________________________
//2.Array from() method
arr=[1,2,3,4,5,6,'gautam']
var b= Array.from('this')
console.log(b)//output ['t','h','i','s']
//creating array from string
var c=Array.from(arr)
console.log(c)
//output=[1,2,3,4,5,6,'gautam']
//creating array from another array
//_____________________________________________________________________
//array.filter()
var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;    
}  
  
console.log(marks.filter(check));  
//this methods filters the condition provided by the function


function test(element, index, array) {  
    return element>=25;  
  } 
  console.log([21,32,21,43,97,98,99].filter(test));  
  //_____________________________________________________________________________
  //3.arr.find() method
  //this method is used to find a particular element 
  var arr=[5,22,19,25,34];  
var result=arr.find(x=>x>25);  
console.log(result)
//____________________________________________________________________________________  
a=[1,2,3,4,5,6,7,]
console.log(Array.isArray(a))
//this function returns wether a data type is array or not
//_____________________________________________________________________
//4.array.fill method
arr=[1,2,3,4,5,6]
console.log(arr.fill('gautam',1,2))
//output->>>>>>>>[ 1, 'gautam', 3, 4, 5, 6 ]
//replaces a particular element in the array and returns the modified array
//____________________________________
//5.array.indexOf method
arr=[1,2,3,4,5,56,7,8,9,0]
b=arr.indexOf(5,4)//will return index
b=arr.indexOf(5,5)//will return -1 as it couldnt find index of element
console.log(b)
//______________________________________
//6.array join method()
arr=[1,2,3,4,5,6]
console.log(arr)
b=arr.join("this")//this seperates the elements with 'this'
b=arr.join('')//this removes the spaces between the string
console.log(b)
//_______________________________--
//7.array.keys() method
arr=[1,2,3,4,5,6]
b=arr.keys();
for(x of arr.keys()){
    console.log(x)
}
//returns an iterator object
//_________________________--
//8. array.lastindexOF(element,index)
var arr=["C","C++","Python","C++","Java"];  
var result= arr.lastIndexOf("C++");  
console.log(result);  
//returns the last index of the element present in array
//__________________________________________________________
//9. array.reverse
var arr=[1,2,23,4,45,67,]
b=arr.reverse()
console.log(b)
//prints the reverse of the array
//_____________________________________________________________________
//10.Array sort()
//this method is used to sort elements of the array in
//ascending or descending order
//we use arrow function to sort array in javascript
arr=[1,2,34,5,65,7,88]
console.log(arr.sort())
//this will give output
//[1,2,34,5,65,88]
//as it will only compare the first digit elements in the array
// for comparing elements we define arrow function inside sort 
arr=[1,2,34,5,65,7,88];
console.log(arr.sort((a,b)=>a-b));
//this will give output
//[1,2,5,7,34,65,88]
//but this method will work only if all the elements are of same type
//if a string or object is inserted between the numbers then this method will not
// work.Similarly we can reverse an array just by changing a-b to b-a

// When the sort( ) method compares two values, it sends the values to our compare function and sorts the values according to the returned value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.


users = [
  {name: 'Scotty', age: '18'},
  {name: 'Tommy', age: '21'},
  {name: 'Sally', age: '71'},
  {name: 'Billy', age: '18'},
  {name: 'Timmy', age: '21'}
];
console.log(users.sort((a,b)=>{
  _A=a.name+a.age;
  _B=b.name+b.age;
  if(_A>_B) return 1;
  if(_A<_B)return -1;
  return 0;
}));
//sorting objects passed in array
//_______________________________________________________________
//10. Array.findIndex()
//syntax- arr.finIndex(callback(value,index,arr)thisArg)
//returns the index of first element satisfying the condition
var arr=[5,22,19,25,34];  
var result=arr.findIndex(x=>x>20);  
console.log(result)  


function isPrime(value, index, arr) {  
  var start = 2;  
  while (start <= Math.sqrt(value)) {  
    if (value % start++ < 1) {  
      return false;  
    }  
  }  
  return value > 1;  
}  
console.log([8, 4, 7, 22].findIndex(isPrime)); 
//__________________________________________________________________________
//11.Array.forEach()
//this is method is used to get each element in an array
//return type- undefined
//syntax-arr.forEach(callback(current value,index,arr),thisArg)


var arr = ["C", "C++", "Python"];  
  
arr.forEach(function(a) {  
 console.log(a);  
});  
//without using arrow function

console.log(arr.forEach((a)=>{
    console.log(a)}))//returns undefined because return type of for each is undefined
    
arr.forEach((a)=>{
    console.log(a)});
    //using arrow function
    //will return the elements of the array

    let sum=0;
    var arr = [10,18,12,20];  
      
    arr.forEach(function myFunction(element) {  
      sum = sum+element; 
        console.log(sum)
    });
    console.log(sum);
    
//_________________________________________________________________
//12.array.splice()
//this method is used to add/remove array element to/from given index
//syntax:arr.splice(startfrom index,delete no.of elements,add element1,
//element 2 to removed space)
arr=[1,2,3,44,5,4,4,4,4]
b=arr.splice(0,1,'gautam')//removes the first element from the index and adds a string at that place
console.log(b)
console.log(arr)

