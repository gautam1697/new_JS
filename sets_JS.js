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
//______________________________________________________________________
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
//______________________________________________________________________________

const mySet = new Set();
mySet.add(1);
mySet.add(1);//this line will not add 1 to the set as set does not allow duplicate values
mySet.add(12);
mySet.add('some text');
mySet.add('foo');
console.log(mySet)

mySet.has(1); // true
mySet.delete('foo');//this will delete the value 'foo' from the set
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}// this will return 1, 12, 'some text
console.log(mySet)//{ 1,12,'sometext'}

//_____________________________________________________________________________________________
const mySet = new Set();
mySet.add(1);
mySet.add(12);
mySet.add('some text');
mySet.add('foo');
console.log(mySet)
a=[...mySet]// this is the spread operator through which we can creaet an array using set
console.log(a)
b=Array.from(mySet)// this is another way by which we can create an array using set 
console.log(b)
