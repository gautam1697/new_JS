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
    