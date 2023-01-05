//The function shown below represents use of setTimeout function on Javascript

function x(){var i =1;
setTimeout(function(){
    console.log(i)
},3000);
    console.log('a')//this line will print first
}
x();
//In the lines of code above we can infer that a will console first and the input i will execute afterwards.
//Here setTimeout function acts as a callback and stores the value of i in it with a time of 3000 miliseconds and executes the next line.
//So when the 3000 miliseconds are over then Javascript will print the value inside the setTimeout function.

//___________________________________________________________________
//

//because when the loop iterates so fast, that when the code reaches the callback and callback refers to the value of the variable, the value of variable becomes 6. THe callback doesn't have access to the varibale but has access to the reference of the value of the value because closures have access to the reference of their lexical environment variables.
function x(){
for(var i=1;i<=5;i++){
setTimeout(function(){
    console.log(i)
},i*1000);
}
    console.log('a')//this line will print first
}
x();
//the output of the above code will be  a,6,6,6,6,6,6
//So to overcome the above problem we declare variable using let keyword because let is block scoped and evertime the loop runs a new variable i is declared. So when the closure looks for variable refrence the value of i is different everytime.
function x(){
for(let i=1;i<=5;i++){
setTimeout(function(){
    console.log(i)
},i*1000);
}
    console.log('a')//this line will print first
}
x();
//the output of the above code will be  a,1,2,3,4,5

//In order to make this program work var only then we have to create another function in which we will pass the value of i inside this function which is holding another callback setTimeout function, which is shown in the example below.

function x(){
for(var i=1;i<=5;i++){
    function close(x){
setTimeout(function(){
    console.log(x)
},x*1000);
}
    close(i);
}

    console.log('a')//this line will print first
}
x();
