//program showing the concept of callback function in javascript

function getdata(x,y,callback){
    console.log("multiplication is",x*y);
    callback();
}
function showdata(){
    console.log("this is show data")
}
getdata(20,20,showdata)
///__________________________________________________
//another example og callback function
function showData(name, age) {  
    alert(name,age);  
    }  
      
    function getData(callback) {  
    var name = prompt("Enter name");  
    var age = prompt(" Enter age");  
    callback(name, age);  
    }  
      
    getData(showData);  
//_____________________________________________________________
//The code shown below shows an example of callback function 

const getrollno=()=>{
    setTimeout(()=>{
        console.log('getting roll number')
        let roll=[1,2,3,4,5]
        console.log(roll);
        
    },2000)
    }
getrollno()
//_____________________________________________________________________________

function x(){
    
}
x(function y(){console.log('y')
    
})
//the function y here is callback function
//it is not called here
//another function is responsible for calling a callback function

//_________________________________________________________________________________

setTimeout(function(){
    console.log('timer')
    
},5000)
//this callback function inside the set timeout function will be executed when the timer expires
//but javascript will not wait for the time and will execute the above lines

function x(y){
    console.log('x')
    y();
}
x(function y(){console.log('y')});
//here y is the callback function called inside a function x
