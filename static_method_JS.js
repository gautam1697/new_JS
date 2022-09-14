//Static method in JS
//JS provides a static method that belongs to a class instead of instance of that
//class, so instance is not required to call this static method.These methods
//are called dirrectly on class itself.
//static keyword is used to declare static method.
//static method can be of any name.
//if we declare two static methods of same name then JS will invoke the
//method declared later.
//static method is used to create utility function
//we can use static keyword to call static method within another static method.
//cannot use this keyword to direclty call static method inside a non static method.
//in that case we use static method either using class name or the property of
//constructor.

class Test{
    constructor(){
        console.log(Test.display());
        console.log(this.constructor.display());
    }
    static display(){
        return ('static method displayed.');
    }

}
// Test.display()
var t= new Test();

class Test{
    static display(){
        return ('static method displayed.');
    }
    show(){
console.log(Test.display());
}
}
// Test.display()
var t= new Test();
t.show();





