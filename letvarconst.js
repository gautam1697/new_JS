var x=0;//here we initialize a global varibale x
console.log(typeof z); //it will print undefined as z is not initialized yet,but is declared later 
function a() {
  var y = 2; //y is a local variable of functin a

  console.log(x, y);//this will print 0,2 as x is global 0 and y is initialized with 2

  function b() {
    x = 3; // value of x is redefined by the functionn to 3
    y = 4; //value of y is redefined inside the function to 3
    z = 5; // z is declared and initilized with values 5
  }

  b();
  console.log(x, y, z); //after the function call all the values x,y,z(3,4,5)
}

a(); 
console.log(x, z);//after the function a is called the value of x and z are 3,5 since they are global variable
console.log(typeof y)//since y is not a global varibale the type of y will be undefined.

