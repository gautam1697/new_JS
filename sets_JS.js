//Concept of sets in Javascript
//Set removes duplciate element values
//we can only pass iterable objects in the 
obj={name:'gautam',age:24,marks:90,value:90}
a=[1,2,3,4,5,6,7,7,7,7,7,77,]
a=Object.values(obj)
b= new Set(a)
console.log(b)
// set removes the duplicate value element in the object literal when iterated.
//removes the duplicate element from the array.
//___________________________________________________________________
//SET METHODS:
//1.set.add()
obj={name:'gautam',age:24,marks:90,value:90}
// a=[1,2,3,4,5,6,7,7,7,7,7,77,]
b.add(23)
console.log(b)
//2.set.clear()
//this method is used to clear the set
a=[1,2,3,4,5,6,7,7,7,7,7,77,]
b=new Set(a);
b.add(23)
console.log(b)
//3.set.has()
//to check wether the element is present in the set or not
//
obj={name:'gautam',age:24,marks:90,value:90};
a=[1,2,3,3,4,5,5,'empty',6,6,6,7,8,9]
a=new Set(a)
b=new Set(Object.keys(obj));

// console.log(b);
// console.log(b.entries())
console.log(a.has('empty'))
/______________________________________________________________________
//4.set.values()
//returns all the values present in the iterator
//
//_______________________________________________________________________
//5.set.delte()
//deletes an element from the given set
arr=[1,2,4,3,4,4,55,5,]
b=new Set(arr)
console.log(b);
b.delete(55)
console.log(b)
//