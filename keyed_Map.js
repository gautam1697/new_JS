//Map is a keyed collection and this map is differen from the mapo method used in arrays in Javascript
const sayings = new Map();
c=new Map();//new way of creating a map
c.set(1,'one')//adding key value pairs to the map
c.set(2,'two')
// console.log(c)
// c.clear()//removes all the elements present in map
// console.log(c.get(1))//get the particular value of the inserted key
// console.log(c.has(1))//returns a boolean value
// console.log(c.values())//returns the values of object
// console.log(c.keys())//returns the keys of object

console.log(c)
// c.delete(1)//removes the the specified key value pair 

//_____________________________________________________________________________________

sayings.set('dog');
console.log(sayings)
sayings.set('cat', 'meow');
console.log(sayings.size)
console.log(sayings.has('woof')); //
console.log(sayings.get('dog'))//undefined
console.log(sayings.get('cat'))//meow
sayings.get('fox'); // undefined

sayings.delete('dog');
console.log(sayings)
// sayings.has('dog'); // false

for ( [key, value] of sayings) {
  console.log(`${key} says ${value}`);
}// "cat goes meow"
sayings.clear();
console.log(sayings)
// sayings.size; // 0
//____________________________________________________________________________________________
 obj={role:1,role1:2,role2:2,role3:3,role4:4,role4:4}
 console.log(Object.values(obj).map((a)=>{return a}))//this gives an output array [1,2,3,4]
 
 //NOTE: map method in javscript is used to create a new array evertime a value is passed in that function.
