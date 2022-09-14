/*We use function in javacript to promote code reusability and less repetition*/
function func(a,b){
    return(a+b);
}
console.log(func(12,12))

function func1(number){
    return number*number*number;
    console.log(number*number);
}

console.log(func1(12))

// in this function we cannot pass default argument ahead of positional argument
// it will result in error as compiler will get confused where to put the value
//revcieved from user
function func2(num1,number=5){
    return number+num1;
}
console.log(func2(12))

var add= new Function('num1','num2','return num1+num2')
console.log(add(2,5))
//this is a new way of creating function in javascript. this is called function object in javascript.
var pow=new Function('num1','num2','return Math.pow(num1,num2)')
console.log(pow(2,3))