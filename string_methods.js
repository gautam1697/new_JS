//string methods in javascript

var string= String('this is string')// converts any object into string
var string1=new String('this is new string');//creates a string object
var string2='this is new string';//string
console.log(string,string1,string2);
// console.log(string1.replace('t','boom'))
console.log(string.substr(3,3))//format--> str.substring(index,length)
console.log(string.substring(3,3))//format--> str.substring(index,index)
var b='this is'
console.log(b.substr(3,3))
console.log(b.toLocaleUpperCase())


var str=new String("this is string");
console.log(str);
var c=str.toString();
console.log(c,typeof c)
// toString() method in javascript is used to convert string object
// into string literals.This method does not changes original string.
const a='string';
var b=a.valueOf()
console.log(b, typeof b)
// this method will return the value stored inside the string without changing 
//its type
var str='javascript';
console.log(str.match('s'))
// this method returns the element and the index related to that element,
// input string and the groups related to it
