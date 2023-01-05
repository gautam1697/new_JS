// Class is the blueprint of the instance in Javascript
// for example
const a= new Date()// here date is the inbuilt calss and a is the instance of that class
a.getHours()//here getHours is the class method of inbuilt class date

//Class can be created using the method of class expression and class expressions can be named or can be used without a name.

//_______________________________________________________
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}
const a= new Color('red', 'green', 'blue', 'yellow')
console.log(a)
//this program shows the working of the constructor in javascript

//_____________________________________________________________________________________________________________________________________


class Product
{
    constructor(item,price,discount,product_code){
        this.item=item;
        this.price=price;
        this.discount=discount;
        this.product_code=product_code
    }
}
let pencil= new Product('pencil',20,2,'p1')
console.log(pencil)

const Product1=class {
    constructor(item,price,discount,product_code){
        this.item=item
        this.price=price,
        this.discount=discount
        this.product_code=product_code
        
    }
    get getDiscount(){
        return this.discount;
    }
    set setDiscount(value){
        this.discount=value;
    }
}
let chair= new Product1('Chair',300,3,'cc223')
console.log(chair)
console.log(Product1)



//____________________________________________________________________________________
//this show the concept of inheritance of a class

class Product{
    constructor(item){
        console.log('Passed by furniture '+ item)
        this.item=item
    }
    getitem(){
    return this.item +' is a product'
    }
}
class Furniture extends Product{
    constructor(item){
        super(item);
    }
    getitem(){
        return this.item + ' is a furniture';
    }
}
const pencil= new Product('pencil')
// console.log(pencil.getitem())
const chair= new Furniture('chair')
console.log(chair)
//__________________________________________________--

const myclass=class MyclassName{
    constructor(value){
        this.value=value
    }
}
const instance= new MyclassName(34)
console.log(instance)
//this will throw an error that MyclassName is not recognized because the expression is visible only to the class's body

.//This will work only when

const myclass=class MyclassName{
    constructor(value){
        this.value=value
    }
}
const instance= new myclass(34)// here we are creating an instance of the class using the expression of that class
console.log(instance)


//_________________________________
//The example shown below shows how constructor of a class is used to set the values of an object
class Color{
    constructor(r,g,b){
        this.r=r;
        this.b=b;
        this.g=g;
        this.values=[r,g,b]
        
    }
}
const red= new Color(450,530,700)
console.log(red)
//_____________________________________________
//The example shown below shows that the constructor of a class acts just like a normal function in which we can use spread operator.

class Color{
    constructor(...values){
        this.values=values
    }
}
const obj= new Color(1,2,2,34,4)
console.log(obj)//this lin will return an array of all the values passed when creating the instance of the class.
//Whenever we call new then each time a new isntace of tha class is created.
//__________________________________________________________________________________________
// The example shown below represents that when two instances of same class are created using new keyword with same properties, even then the values of two objects are not equal.
class Color{
   		 constructor(...values){
       	 this.values=values
   			 	}
				}
		const obj= new Color(1,2,2,34,4)
		console.log(obj)
		const obj1= new Color(1,2,2,34,4)
		console.log(obj1)
		console.log(obj===obj1)// this line will give the output false
//____________________________________________________________________________________________-
class Myclass{
    constructor(value){
        this.value=value
        return [];//if we try to return anything from the constuctor of a class then the returned value will become the expression of the class overriding the value of the instance object.So it is advised not to return something from the constuctor function.
    }
}
const obj= new Myclass(3)
console.log(obj)

//____________________________________________________________________________________
//The code shown below shows how the value of red can be changed using getter and setter methods defined in the class
class Color {
  constructor(r, g, b) {
    this.r=r;
    this.g=g;
    this.b=b;
    this.values=[r,g,b];
  }
  getRed(){
      return this.r
  }
  getRedvalue() {
    return this.values[0];
  }
  setRed(value){
      this.r=value
  }
  setRedvalue(value){
      this.values[0]=value;
  }
}

const red = new Color(255, 450, 345);
console.log(red.getRed()); // 255
console.log(red.getRedvalue())
red.setRed(23)
red.setRedvalue(232)
console.log(red.getRed(),red.getRedvalue())

//_____________________________________________________
//The code shown below shows an example of private values
class Color{
    #values;
    constructor(l,g,b,t,q){
        this.#values=[l,g,b,t,q]}
    getles(){
        return this.#values[0]}
    setles(value){
        this.#values[0]=value;}
}
const les=new Color(68,69,990,2323,23,23,23)
console.log(les.getles())
class NewColor extends Color{
    constructor(r,g,b,...values){
        super()
        this.values=[r,g,b]
        }
    getRed(){
        this.values[0]}}
const red= new NewColor(12312,1312,123123)
console.log(red.values())
//___________________________________________________________________________________________________________________
//The program show below the concept of getter and setter function having same name and different functionalities
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
//   set red(value) {
//     this.values[0] = value;
//   }
}

const red = new Color(255, 0, 0);
red.red = 12;
//Note- In strict mode this line will throw error
console.log(red.red); // 0

//_____________________________________________
//The block of code shown below represents the use of static methods in classes n javascript.
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 123 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
console.log(Color.isValid(123,0,0))
console.log(Color.isValid(230423423,0,0))
