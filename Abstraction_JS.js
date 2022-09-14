//ABSTRACTION IN JS
//Abstraction is way of hiding implementation details and showing only
//functionality to users.Ignores the unrequired details and shows only important ones.
//reduces duplication of code
//cannot create instance of abstract class
class A{
    set(x,y){
        this.a=x;
        this.b=y;
    }
    display()
{
    console.log("a is ",this.a,"b is ",this.b)
}    }
var z= new A()
z.set(4,5);
z.display();