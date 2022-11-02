//program showing the difference between let and var

function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
varTest();//output-> 2,2
letTest();//output->2,1


function varTest() {
   x = 1;
  {
     x = 2;
    console.log(x);  
  }
  console.log(x); 
}

function letTest() {
  let x = 1;
  {
     x = 2;  
    console.log(x);  
  }
  console.log(x);  
}
varTest();//output-> 2,2
letTest();//output->2,2 this will output 2,2 because are reassigninig ht value of varible x which is defined before.



var x= 'global'
let y='global'
console.log(this.x)//this will print global as var is globally scoped
console.log(this.y)//this will print undefined as let is locally scoped
