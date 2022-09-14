//JS problems


//program to find the max between 3 using if else condition
var a=5
var b=3
var c=4
if(a>b&&a>c){
    console.log(a)
}
else if(b>a&&b>c){
    console.log(b)
}
else{
    console.log(c)
}


//program to print the table of a number
for (i=1;i<11;i++){
    console.log(6*i)
}


//program to find the prime number

number=11
arr=[]
for ( i=0;i<=number;i++){
    if(number%i==0){
        arr.push(i)}
        else{
            continue
        }
    }
if(arr.length>2){
    console.log('not a prime')
}
else{
    console.log('prime number')
    console.log(number)
}
//program to find out wether the given number is odd or even
var a=12
var b=(a%2==0)?"even":"odd"

console.log(b)
//program to find max bw 3 numbers
var a=5
var b=6
var c=4
console.time()
//var d=(a>b&&a>c)?a:(b>c)?b:c;
console.log((a>b&&a>c)?a:(b>c)?b:c)
//using 4th variable
// console.timeEnd()
//with nested if
var a=6;
var b=55;
var c=455;
if(a>b){
    if(a>c){
        console.log(a)
    }
}
if(b>a){
    if(b>c){
        console.log(b)
    }
}
if(c>a){
    if(c>b){
        console.log(c)
    }
}